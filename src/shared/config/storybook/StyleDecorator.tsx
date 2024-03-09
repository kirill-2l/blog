import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { Suspense } from 'react';

export const StyleDecorator = (story: () => Story) => (<Suspense fallback="">{story()}</Suspense>);
