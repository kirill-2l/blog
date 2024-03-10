import { classNames } from 'shared/libs/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from 'features/AuthByUsername/ui/LoginForm/LoginForm.async';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, onClose } = props;
    return (
        <Modal isOpen={isOpen} onClose={onClose} className={classNames(cls.LoginModal)}>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};
