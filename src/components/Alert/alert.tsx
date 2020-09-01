import React,{CSSProperties, FC} from 'react';
import classNames from 'classnames';

export type AlertType = 'success' | 'default' | 'danger' | 'warning';
export interface AlertProps {
  message: React.ReactNode;
  description?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  alertType?: AlertType
}

const Alert: FC<AlertProps> = ({
  alertType,
  message,
  description,
  style,
  className = '',
  ...restProps
}) => {
  const [closed, setClosed] = React.useState(false);
  const ref = React.useRef<HTMLElement>();
  const classes = classNames('alert', className, {
    [`alert-${alertType}`]: alertType
  })
  return (
    <div 
      className={classes}
      {...restProps}
    >
      <span className='alert-message'>{message}</span>
      <span className='alert-description'>{description}</span>
    </div>
  )
}

export default Alert;