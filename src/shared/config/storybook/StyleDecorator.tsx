import '@/app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { Suspense } from 'react';

export const StyleDecorator = (Story: StoryFn) => (
    <Suspense fallback="">
        <Story />
    </Suspense>
);
