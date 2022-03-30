import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, GhostButton } from './../../../src'

export default {
  title: 'button',
  args: {
    children: 'Hello',
    disabled: false
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: '50rem' }}>
    <Button {...args}>{args.children}</Button>
  </div>
)
Default.argTypes = {
  variant: {
    control: {
      type: 'select',
      options: ['action', 'positive', 'base']
    }
  }
}

export const Ghost: Story = (args) => (
  <div style={{ maxWidth: '50rem' }}>
    <GhostButton {...args}>{args.children}</GhostButton>
  </div>
)
