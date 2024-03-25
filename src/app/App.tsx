import { Suspense, useEffect } from 'react';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from '../shared/lib/classNames/classNames';
import AppRouter from './providers/router/ui/AppRouter';

import './styles/index.scss';

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
