import { memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { ArticleCodeBlock } from '@/entities/Article/model/types/article';
import { Code } from '@/shared/ui/Code';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(({ className, block }: ArticleCodeBlockComponentProps) => (
    <div className={classNames('', {}, [className])}>
        <Code text={block.code} />
    </div>
));
