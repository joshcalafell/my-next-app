// Button.stories.ts|tsx
import React from 'react'
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
    arrowClick: () => {},
  },
}
