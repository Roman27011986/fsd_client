import type { Meta, StoryObj } from '@storybook/react';

import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

// export const Primary: Story = {
//     render: () => <Button>test</Button>,
// };

export const Primary: Story = {
    args: {
        children: 'primary',
    },
};

export const Clear: Story = {
    args: {
        children: 'clear',
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'outline',
        theme: ThemeButton.OUTLINE,
    },
};
