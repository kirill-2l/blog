import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { Suspense } from 'react';

export const StyleDecorator = (Story: Story) => (<Suspense fallback=""><Story /></Suspense>);
