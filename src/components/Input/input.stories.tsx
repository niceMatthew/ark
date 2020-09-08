import React, {useState, ChangeEvent} from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input } from './input'
 
const ControlledInput = () => {
  const [value, setValue] = useState<string>();
  return <Input value={value} defaultValue={value} onChange={ (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }} />
}

const defaultInput = () => (
  <>
    <Input
      style={{width: '300px'}}
      placeholder="placeholder"
      onChange={action('changed')}
    />
    <ControlledInput />
  </>
)

const disabledInput = () => (
  <Input
      style={{width: '300px'}}
      placeholder="disabled input"
      disabled
   />
)

const iconInput = () => (
  <Input
    style={{width: '300px'}}
    placeholder="input with icon"
    icon="download"
  />
)

storiesOf('Input component', module)
  .add('Input', defaultInput)
  .add('被禁用的Input', disabledInput)
  .add('带图标的 Input', iconInput)