// Button.stories.ts|tsx

// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react'

import { RightArrow } from './RightArrow'

const meta: Meta<typeof RightArrow> = {
  component: RightArrow,
}

export default meta
type Story = StoryObj<typeof RightArrow>

export const Primary: Story = {
  args: {
    primary: true,

    backgroundColor: '#aa99ff',
  },
}

export const Secondary: Story = {
  args: {
    primary: false,

    backgroundColor: '#ff0099',
  },
}
