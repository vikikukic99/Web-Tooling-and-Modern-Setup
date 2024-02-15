import type { Meta, StoryObj } from '@storybook/react'

import NavBar from './NavBar'

const meta = {
  title: 'Example/NavBar',
  component: NavBar,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NavBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
