import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { getUserInited, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from '../shared/lib/classNames/classNames';
import AppRouter from './providers/router/ui/AppRouter';

function App() {
    const { theme } = useTheme();

    const dispatch = useAppDispatch();

    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    <SideBar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
