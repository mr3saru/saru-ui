import React from 'react'
import { Story, Meta } from '@storybook/react'
import Primary from './Primary'

export default {
  title: 'Primary',
  component: Primary,
  args: {
    children: 'My Primary'
  }
} as Meta

export const Default: Story = (args) => (
  <Primary {...args}>{args.children}</Primary>
)
