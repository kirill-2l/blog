import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import {
    BaseText, Button, Input, Modal,
} from '@/shared/ui';
import { ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    rate?: number;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const { t } = useTranslation();
    const {
        className,
        hasFeedback,
        feedbackTitle,
        title,
        onCancel,
        onAccept,
        rate = 0,
    } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onCancel?.(selectedStarsCount);
        }
    }, [hasFeedback, onCancel]);

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <VStack max gap="32">
            <BaseText title={feedbackTitle} />
            <Input value={feedback} onChange={setFeedback} placeholder={t('Your feedback')} />
            <HStack gap="16" justify="end">
                <Button
                    onClick={cancelHandler}
                    theme={ButtonTheme.OUTLINE_RED}
                >
                    {t('Close')}
                </Button>
                <Button onClick={acceptHandler}>
                    {t('Submit')}
                </Button>
            </HStack>
        </VStack>
    );

    return (
        <Card className={classNames('', {}, [className])}>
            <VStack gap="8">
                <BaseText title={rate ? 'Thank you for review' : title} />
                <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
                <BrowserView>
                    <Modal isOpen={isModalOpen} lazy>
                        {modalContent}
                    </Modal>
                </BrowserView>
                <MobileView>
                    <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
                        {modalContent}
                    </Drawer>
                </MobileView>
            </VStack>
        </Card>
    );
});
