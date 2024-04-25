import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from '@/shared/ui/Button';

describe('Button', () => {
    test('Button rendered', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('theme clear applied', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
