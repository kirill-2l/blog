import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { AppLink, Icon } from '@/shared/ui';
import { classNames } from '@/shared/libs/classNames/classNames';
import { SidebarItemType } from '@/widgets/Sidebar/model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();
    return (
        <AppLink
            to={item.path}
            className={classNames(cls.item, {
                [cls.collapsed]: collapsed,
            })}
            activeClassName={cls.active}
        >
            <Icon Svg={item.Icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
