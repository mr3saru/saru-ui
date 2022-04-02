import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Link as LinkTo } from './../../../src'

import { variantOptions } from '../../utils'

const control = {
  type: 'select',
  options: [...variantOptions, 'black', 'white']
}

export default {
  title: 'navigation',
  args: {
    children: 'Hello',
    color: 'black',
    colorHover: 'action'
  },
  argTypes: {
    color: {
      control
    },
    colorHover: {
      control
    }
  }
} as Meta

export const Link: Story = (args) => (
  <div style={{ maxWidth: '10rem' }}>
    <LinkTo {...args} />
  </div>
)
