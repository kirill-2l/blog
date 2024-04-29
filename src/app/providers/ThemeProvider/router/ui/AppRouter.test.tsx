import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/libs/tests/componentRender';
import AppRouter from '@/app/providers/ThemeProvider/router/ui/AppRouter';
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { UserRole } from '@/entities/User';

describe('app/router/ui/AppRouter.component', () => {
    test('Page should be rendered', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page)
            .toBeInTheDocument();
    });
    test('Page not Found', async () => {
        componentRender(<AppRouter />, {
            route: '/nonexistent-page-route',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page)
            .toBeInTheDocument();
    });
    test('User doesn\'t have access rights to page if not authorized', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),

        });

        const page = await screen.findByTestId('MainPage');
        expect(page)
            .toBeInTheDocument();
    });
    test('User has access rights to page if authorized', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    _inited: true,
                    authData: {},
                },
            },
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page)
            .toBeInTheDocument();
    });
    test('User doesnt have enough access rights for the page', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _inited: true,
                    authData: {
                        roles: [UserRole.USER],
                    },
                },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page)
            .toBeInTheDocument();
    });
    test('User has enough access rights for the page', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _inited: true,
                    authData: {
                        roles: [UserRole.ADMIN],
                    },
                },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page)
            .toBeInTheDocument();
    });
});
