import { Suspense } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Modal , Loader } from '@/shared/ui';
import { LoginFormAsync } from '@/features/AuthByUsername/ui/LoginForm/LoginForm.async';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, onClose, onSuccess } = props;
    return (
        <Modal isOpen={isOpen} onClose={onClose} className={classNames(cls.LoginModal)}>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onSuccess} />
            </Suspense>
        </Modal>
    );
};
