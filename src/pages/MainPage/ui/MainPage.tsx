import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper';
import { ListBox } from 'shared/ui/ListBox/ListBox';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <PageWrapper>
            {t('main page')}
            <ListBox
                onChange={onChange}
                value={value}
                defaultValue="Select option"
                items={[{
                    value: '1',
                    disabled: true,
                    content: '1',
                }, {
                    value: '2',
                    disabled: false,
                    content: '2',
                }, {
                    value: '3',
                    disabled: false,
                    content: '3',
                }]}
            />
        </PageWrapper>
    );
};

export default MainPage;
