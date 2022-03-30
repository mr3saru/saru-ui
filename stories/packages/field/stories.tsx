import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TextBox as FieldTextBox } from './../../../src'

export default {
  title: 'field',
  args: {
    placeholder: 'Name',
    disabled: false
  },
  argTypes: {
    fontSize: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      }
    }
  }
} as Meta

export const TextBox: Story = (args) => (
  <div style={{ maxWidth: '50rem' }}>
    <FieldTextBox {...args} />
  </div>
)
