import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from '../shared/lib/classNames/classNames';

import { Suspense } from 'react';
import AppRouter from './providers/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';

function App() {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar />
                <div className='content-page'>
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;