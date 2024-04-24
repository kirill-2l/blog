import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './Portal.module.scss';

interface PortalProps {
    children: ReactNode,
    element?: HTMLElement
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        element = document.body,
    } = props;
    return createPortal(children, element);
};
