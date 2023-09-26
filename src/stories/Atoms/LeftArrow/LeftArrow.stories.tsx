// Button.stories.ts|tsx
import React from 'react'
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react'

import { LeftArrow } from './LeftArrow'

const meta: Meta<typeof LeftArrow> = {
  component: LeftArrow,
}

export default meta
type Story = StoryObj<typeof LeftArrow>

export const Primary: Story = {
  args: {
    arrowClick: () => {},
  },
}
