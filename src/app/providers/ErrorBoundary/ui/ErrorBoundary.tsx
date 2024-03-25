import React, { ErrorInfo, ReactNode } from 'react';

interface IErrorBoundaryProps {
    children: ReactNode;
    fallback: ReactNode;
}

interface IErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary
    extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children, fallback } = this.props;

        if (hasError) {
            return fallback;
        }

        return children;
    }
}

export default ErrorBoundary;
