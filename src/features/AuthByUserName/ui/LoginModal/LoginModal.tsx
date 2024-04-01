import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

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
            <LoginForm />
        </Modal>
    );
};
