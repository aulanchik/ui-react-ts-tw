import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import { fn } from '@storybook/test';
import * as stories from './Button.stories';

const { Primary, Disabled } = composeStories(stories);

describe('Button Component', () => {
    it('renders primary button', () => {
        render(<Primary />);
        expect(screen.getByRole('button')).toBeDefined();
    });

    it('handles click events', () => {
        const onClick = fn();
        render(<Primary {...Primary.args} onClick={onClick} />);
        fireEvent.click(screen.getByRole('button'));
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('disables button when disabled prop is set', () => {
        render(<Disabled />);
        const button = screen.getByRole('button');
        expect(button).toBeDefined();
        expect(button.hasAttribute('disabled')).toBe(true);
    });
});
