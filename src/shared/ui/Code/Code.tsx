import { memo, useCallback } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Icon } from '@/shared/ui';
import cls from './Code.module.scss';
import CopyIcon from '@/shared/assets/icons/copy.svg';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);
    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Icon
                clickable
                onClick={onCopy}
                className={cls.copyBtn}
                Svg={CopyIcon}
            />
            <code>{text}</code>
        </pre>
    );
});
