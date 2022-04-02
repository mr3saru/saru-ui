import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Heading as TypoHeading, Text as TypoText } from './../../../src'

import { fontSizeOptions, variantOptions } from '../../utils'
import { textColorOptions } from '../../utils/options'

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
    }
  }
} as Meta

export const Heading: Story = (args) => (
  <div style={{ maxWidth: '10rem' }}>
    <TypoHeading {...args} />
  </div>
)

Heading.argTypes = {
  htmlTag: {
    control: {
      type: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
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
  }
}

export const Text: Story = (args) => <TypoText {...args} />

Text.argTypes = {
  htmlTag: {
    control: {
      type: 'select',
      options: ['p', 'span', 'div']
    }
  },
  color: {
    control: {
      type: 'select',
      options: textColorOptions
    }
  },
  fontSize: {
    control: {
      type: 'select',
      options: ['xxsmall', 'xsmall', ...fontSizeOptions]
    }
  }
}
