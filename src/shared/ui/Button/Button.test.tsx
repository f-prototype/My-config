import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('button test', () => {
  test('render btn', () => {
    render(<Button>Text</Button>);
    expect(screen.getByText('Text')).toBeInTheDocument();
  });
  test('btn have class', () => {
    render(<Button className="clear">Text</Button>);
    expect(screen.getByText('Text')).toHaveClass('clear');
  });
});
