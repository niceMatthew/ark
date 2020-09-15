import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { withInfo } from '@storybook/addon-info'
import "../src/styles/index.scss"

library.add(fas)

export const parameters = {
  // actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    method: '',
    storySort: {
      order: ['Intro', 'components'],
    },
  },
}

const wrapperStyle = {
  padding: '20px 40px'
}

export const decorators = [
  (storyFn) =>(
    <div style={wrapperStyle}>
      <h3>组件演示</h3>
      {storyFn()}
    </div>
  ),
  withInfo({
    header: false,
    inline: true
  })]

