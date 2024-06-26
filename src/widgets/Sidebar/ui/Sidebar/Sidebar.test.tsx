import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/libs/tests/componentRender';
import { Sidebar } from '@/widgets/Sidebar';

describe('Sidebar', () => {
    test('Sidebar rendered', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Sidebar toggle', () => {
        componentRender(<Sidebar />);
        const toggleButton = screen.getByTestId('sidebar-toggle');

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();

        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
