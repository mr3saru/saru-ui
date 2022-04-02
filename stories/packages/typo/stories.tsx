import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Heading as TypoHeading } from './../../../src'

import { fontSizeOptions, variantOptions } from '../../utils'

export default {
  title: 'typo',
  args: {
    children: 'Hello',
    color: 'black'
  },
  argTypes: {
    weight: {
      control: {
        type: 'select',
        options: ['light', 'normal', 'bold']
      }
    },
    color: {
      control: {
        type: 'select',
        options: [...variantOptions, 'black', 'white']
      }
    },
    fontSize: {
      control: {
        type: 'select',
        options: [...fontSizeOptions, 'xlarge', 'xxlarge']
      }
    },
    level: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
      }
    }
  }
} as Meta

export const Heading: Story = (args) => (
  <div style={{ maxWidth: '10rem' }}>
    <TypoHeading {...args} />
  </div>
)
