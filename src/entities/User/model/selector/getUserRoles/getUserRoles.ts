import { StateSchema } from 'app/providers/store';
import { createSelector } from '@reduxjs/toolkit';
import { UserRole } from 'entities/User/model/types/user';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(
    getUserRoles,
    (roles) => Boolean(roles?.includes(UserRole.ADMIN)),
);

export const isUserManager = createSelector(
    getUserRoles,
    (roles) => Boolean(roles?.includes(UserRole.MANAGER)),
);
