import { render, screen } from '@testing-library/react';
import { Button } from '@/shared/ui';

describe('Button', () => {
    test('Button rendered', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('theme clear applied', () => {
        render(<Button variant="clear">TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
