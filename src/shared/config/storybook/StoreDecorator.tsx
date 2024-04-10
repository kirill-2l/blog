import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/store';
import { loginReducer } from 'features/AuthByUsername/model/slice/login.slice';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetails.slice';
import { addCommentFormReducer } from 'features/addCommentForm/model/slice/addCommentForm.slice';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';

const defaultAsyncReducers: ReducersList = {
    login: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
        `
    </StoreProvider>
);
