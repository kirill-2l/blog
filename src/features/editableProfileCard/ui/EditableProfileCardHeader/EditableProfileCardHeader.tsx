import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/libs/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import {
    getProfileData,
} from '@/features/editableProfileCard/model/selectors/getProfileData/getProfileData';
import {
    getProfileReadonly,
} from '@/features/editableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly';
import { useAppDispatch } from '@/shared/libs/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from '@/features/editableProfileCard/model/slice/profile.slice';
import {
    updateProfileData,
} from '@/features/editableProfileCard/model/services/updateProfileData/updateProfileData';
import { HStack } from '@/shared/ui/Stack';
import { BaseText, Button } from '@/shared/ui';
import { ButtonTheme } from '@/shared/ui/Button';

interface EditableProfileCardHeaderProps {
    className?: string,
}

export const EditableProfileCardHeader = memo(({ className }: EditableProfileCardHeaderProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <BaseText title={t('Profile page')} />
            {canEdit && (
                <div>
                    {readonly ? (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdit}
                            data-testid="EditableProfileCardHeader.EditButton"
                        >
                            {t('Edit')}
                        </Button>
                    ) : (
                        <HStack gap="8">
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                data-testid="EditableProfileCardHeader.CancelButton"
                                onClick={onCancelEdit}
                            >
                                {t('Cancel')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSave}
                                data-testid="EditableProfileCardHeader.SaveButton"
                            >
                                {t('Save')}
                            </Button>
                        </HStack>
                    )}
                </div>
            )}

        </HStack>
    );
});
