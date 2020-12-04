import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>欢迎来到 arkd 组件库</h1>
        <h3>安装试试</h3>
        <code>
          npm install arkt --save
        </code>
        <p>
          arkt 是ark Tool的简写，是一个不断成长的React组件库，希望成为大家开发路上的方舟，应对各种各样洪水巨兽版的需求。
        </p>
      </>
    )
  }, { info : { disable: true }})