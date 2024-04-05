import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import { Code } from 'shared/ui/Code/Code';

interface ArticleCodeBlockComponentProps {
    className?: string,
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(({
    className,
    block,
}: ArticleCodeBlockComponentProps) => (
    <div className={classNames('', {}, [className])}>
        <Code text={block.code} />
    </div>
));
