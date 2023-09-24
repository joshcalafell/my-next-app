// Button.stories.ts|tsx

// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
    size: 'large',
    backgroundColor: '#aa99ff',
  },
}

export const Secondary: Story = {
  args: {
    ...Primary.args,
    primary: false,
    label: 'Button',
    size: 'large',
    backgroundColor: '#ff0099',
  },
}
