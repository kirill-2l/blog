import { memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { ArticleImageBlock } from '@/entities/Article/model/types/article';
import { BaseText } from '@/shared/ui';
import { TextAlign } from '@/shared/ui/BaseText';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string,
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({
    className,
    block,
}: ArticleImageBlockComponentProps) => (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>

        <img src={block.src} alt={block.title} className={cls.image} />
        {block.title && (<BaseText title={block.title} align={TextAlign.CENTER} />)}
    </div>
));
