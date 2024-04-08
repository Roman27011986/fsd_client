import { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

import cls from './LoginModal.module.scss';

interface ILoginModal {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<ILoginModal> = ({ className, isOpen, onClose }) => {
    const mods: Record<string, boolean> = {};

    return (
        <Modal
            className={
                classNames(cls.btn, mods, [className])
            }
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
