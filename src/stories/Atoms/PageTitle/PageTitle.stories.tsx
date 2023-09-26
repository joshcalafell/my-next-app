// Button.stories.ts|tsx

// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react'

import { PageTitle } from './PageTitle'

const meta: Meta<typeof PageTitle> = {
  component: PageTitle,
}

export default meta
type Story = StoryObj<typeof PageTitle>

export const Medium: Story = {
  args: {
    label: 'Page Title',
    size: 'medium',
  },
}

export const Large: Story = {
  args: {
    label: 'Page Title',
    size: 'large',
  },
}
