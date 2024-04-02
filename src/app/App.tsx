import { Suspense, useEffect } from 'react';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { userActions } from 'entities/User';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from '../shared/lib/classNames/classNames';
import AppRouter from './providers/router/ui/AppRouter';
import { useAppDispatch } from './providers/StoreProvider/ui/StoreProvider';

function App() {
    const { theme } = useTheme();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

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
