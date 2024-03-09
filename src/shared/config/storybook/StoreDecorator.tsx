import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { StateSchema } from 'app/providers/store/config/state.schema';
import { StoreProvider } from 'app/providers/store';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
);
