import { memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { ArticleTextBlock } from '@/entities/Article/model/types/article';
import { BaseText } from '@/shared/ui';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string,
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(({
    className,
    block,
}: ArticleTextBlockComponentProps) => (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
        {block.title && (<BaseText title={block.title} className={cls.title} />)}
        {block.paragraphs.map((paragraph, index) => (
            <BaseText text={paragraph} key={paragraph} />
        ))}
    </div>
));
