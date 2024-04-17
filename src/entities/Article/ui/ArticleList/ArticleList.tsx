import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Article, ArticleView } from 'entities/Article';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { BaseText } from 'shared/ui';
import { TextSize } from 'shared/ui/BaseText/BaseText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
// @ts-ignore
import AutoSizer, { AutoSizerProps } from 'react-virtualized-auto-sizer';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string,
    articles: Article[],
    isLoading?: boolean,
    view?: ArticleView,
    target?: HTMLAttributeAnchorTarget
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        articles,
        view = ArticleView.LIST,
        isLoading,
        target,
        className,
    } = props;
    const { t } = useTranslation();

    if (!isLoading && !articles.length) {
        return (
            <BaseText
                size={TextSize.L}
                title={t('Nothing found')}
            />
        );
    }

    return (

        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>

            {articles.length
                ? (
                    <AutoSizer
                        defaultHeight={500}
                    >
                        {({
                            height,
                            width,

                        }: AutoSizerProps) => (
                            <FixedSizeList
                                itemData={articles}
                                height={height}
                                itemCount={articles.length}
                                itemSize={400}
                                width={width}
                                initialScrollOffset={50}
                            >
                                {({
                                    index,
                                    data,
                                    style,
                                }) => {
                                    console.log(style);
                                    return (
                                        <ArticleListItem
                                            // style={{
                                            //     ...style,
                                            //     left: Number(style.left || 0) + 30,
                                            //     top: Number(style.top || 0) + 30,
                                            //
                                            //     height: Number(style.height || 0) - 30,
                                            // }}
                                            target={target}
                                            article={data[index]}
                                            view={view}
                                            key={data[index].id}
                                        />

                                    );
                                }}
                            </FixedSizeList>
                        )}
                    </AutoSizer>
                )
                : null}
        </div>
        // <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        //     {articles.length ? articles.map(renderArticle) : null}
        //     {isLoading && (
        //         <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        //             {/* eslint-disable react/no-array-index-key */}
        //
        //             {
        //                 new Array(view === ArticleView.LIST ? 3 : 9).fill('')
        //                     .map((item, i) => (
        //                         <ArticleListItemSkeleton
        //                             view={view}
        //                             key={i}
        //                         />
        //                     ))
        //             }
        //         </div>
        //     )}
        // </div>

    );
});
