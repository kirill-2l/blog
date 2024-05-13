import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './AppLoaderLayout.module.scss';
import { MainLayout } from '@/shared/layouts';
import { HStack, Skeleton, VStack } from '@/shared/ui';

interface AppLoaderLayoutProps {
    className?: string;
}

export const AppLoaderLayout = memo(({ className }: AppLoaderLayoutProps) => {
    const { t } = useTranslation();
    return (
        <MainLayout
            header={
                <HStack className={cls.header}>
                    <Skeleton
                        width={40}
                        height={40}
                        borderRadius="50%"
                    />
                </HStack>
            }
            content={
                <VStack
                    gap="16"
                    style={{ height: '100%' }}
                >
                    <Skeleton
                        width="70%"
                        height={32}
                        borderRadius="16px"
                    />
                    <Skeleton
                        width="40%"
                        height={20}
                        borderRadius="16px"
                    />
                    <Skeleton
                        width="50%"
                        height={20}
                        borderRadius="16px"
                    />
                    <Skeleton
                        width="30%"
                        height={32}
                        borderRadius="16px"
                    />
                    <Skeleton
                        width="80%"
                        height="40%"
                        borderRadius="16px"
                    />
                    <Skeleton
                        width="80%"
                        height="40%"
                        borderRadius="16px"
                    />
                </VStack>
            }
            sidebar={
                <Skeleton
                    borderRadius="32px"
                    width={220}
                    height="100%"
                />
            }
        />
    );
});
