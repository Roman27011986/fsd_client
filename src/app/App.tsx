import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from '../shared/lib/classNames/classNames';

import AppRouter from './providers/router/ui/AppRouter';


function App() {
    const {theme, handleToggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [ theme ])}>
            <button onClick={handleToggleTheme}>toggle theme</button>
            <AppRouter />
        </div>
    );
};

export default App;