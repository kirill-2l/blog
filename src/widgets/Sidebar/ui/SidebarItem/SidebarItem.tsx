import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { AppLink, AppLinksTheme } from '@/shared/ui/AppLink';
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
            theme={AppLinksTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
