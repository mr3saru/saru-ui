import React from 'react'
import { Story, Meta } from '@storybook/react'

import {
  TextBox as FieldTextBox,
  TextArea as FieldTextArea
} from './../../../src'

import { fontSizeOptions } from '../../utils'

export default {
  title: 'field',
  args: {
    disabled: false
  },
  argTypes: {
    fontSize: {
      control: {
        type: 'select',
        options: fontSizeOptions
      }
    }
  }
} as Meta

export const TextBox: Story = (args) => (
  <div style={{ maxWidth: '50rem' }}>
    <FieldTextBox {...args} />
  </div>
)

TextBox.args = {
  placeholder: 'Name'
}

export const TextArea: Story = (args) => (
  <div style={{ maxWidth: '50rem' }}>
    <FieldTextArea {...args} />
  </div>
)

TextArea.args = {
  placeholder: 'Description'
}
