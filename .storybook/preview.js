import React from 'react';
import { withInfo } from '@storybook/addon-info'
import "../src/styles/index.scss"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
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