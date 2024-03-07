import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, onClose } = props;
    const { t } = useTranslation();
    return (
        <Modal isOpen={isOpen} onClose={onClose} className={classNames(cls.LoginModal)}>
            <LoginForm />

        </Modal>
    );
};
