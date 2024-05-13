import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Input, Button, Card, HStack } from '@/shared/ui';

import {
    getAddCommentError,
    getAddCommentText,
} from '@/features/addCommentForm/model/selectors/addCommentFormSelectors/addCommentFormSelectors';

import { DynamicModuleLoader, ReducersList } from '@/shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '@/features/addCommentForm/model/slice/addCommentForm.slice';
import { useAppDispatch } from '@/shared/libs/hooks/useAppDispatch/useAppDispatch';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentText);
    const error = useSelector(getAddCommentError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Card
                max
                padding="16"
                className={className}
                data-testid="AddCommentForm"
            >
                <HStack
                    gap="8"
                    max
                >
                    <Input
                        placeholder={t('Введите текст комментария')}
                        value={text || ''}
                        onChange={onCommentTextChange}
                        data-testid="AddCommentForm.Input"
                    />

                    <Button
                        variant="outline"
                        onClick={onSendHandler}
                        data-testid="AddCommentForm.Submit"
                    >
                        {t('Отправить')}
                    </Button>
                </HStack>
            </Card>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
