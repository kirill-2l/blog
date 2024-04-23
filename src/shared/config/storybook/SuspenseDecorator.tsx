import { Suspense } from 'react';
import { Story } from '@storybook/react';

export const SuspenseDecorator = (Story: Story) => (
    <Suspense><Story /></Suspense>
);
