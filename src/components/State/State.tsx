import * as React from 'react';
import classNames from 'classnames';
import { CheckboxRadioProps } from '../../typings/CheckboxRadioProps';

type StateProps = React.HTMLAttributes<HTMLDivElement> & {
  color?: CheckboxRadioProps['color'];
  icon?: React.ReactNode;
}

export const State = ({ color, icon, id, children, ...rest}: StateProps) => {
  return (
    <div className={classNames('state', color && `p-${color}`)} {...rest}>
      {icon}
      <label htmlFor={id}>{children}</label>
    </div>
  )
}

State.displayName = 'State';