import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Card, BaseText, Button, Input, Modal, ButtonTheme, HStack, VStack, Drawer , StarRating } from '@/shared/ui';

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
    const { className, hasFeedback, feedbackTitle, title, onCancel, onAccept, rate = 0 } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onCancel?.(selectedStarsCount);
            }
        },
        [hasFeedback, onCancel],
    );

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
            <Input
                data-testid="RatingCard.Input"
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Your feedback')}
            />
            <HStack gap="16" justify="end">
                <Button onClick={cancelHandler} data-testid="RatingCard.Close" theme={ButtonTheme.OUTLINE_RED}>
                    {t('Close')}
                </Button>
                <Button onClick={acceptHandler} data-testid="RatingCard.Submit">
                    {t('Submit')}
                </Button>
            </HStack>
        </VStack>
    );

    return (
        <Card className={classNames('', {}, [className])} data-testid="RatingCard">
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
