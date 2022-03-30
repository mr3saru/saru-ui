import React from 'react'
import { Story, Meta } from '@storybook/react'
import PrimaryButton from './Primary'
import GhostButton from './Ghost'

export default {
  title: 'button',
  args: {
    children: 'Hello',
    disabled: false
  }
} as Meta

export const Primary: Story = (args) => (
  <PrimaryButton {...args}>{args.children}</PrimaryButton>
)
Primary.argTypes = {
  variant: {
    control: {
      type: 'select',
      options: ['action', 'positive', 'base']
    }
  }
}

export const Ghost: Story = (args) => (
  <GhostButton {...args}>{args.children}</GhostButton>
)
