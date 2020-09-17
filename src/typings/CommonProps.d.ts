import * as React from 'react';

export type Colors = 'primary' | 'success' | 'info' | 'warning' | 'danger';
type ColorsOutline = 'primary-o' | 'success-o' | 'info-o' | 'warning-o' | 'danger-o';

export type CommonProps<S> = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color'> & {
  /**
   * 配置组件是否锁定
   */
  locked?: boolean;
  /**
   * 设置颜色主题
   */
  color?: Colors | ColorsOutline;
  shape?: string;
  animation?: string;
  variant?: string;
  /** 
   * 是否显示focus状态样式
   */
  hasFocus?: boolean;
  /** 
   * 控制状态的集合。 通常是boolean, string 或者 string array
   */
  state?: S;
  bigger?: boolean;
  plain?: boolean;
  /**
   * hook中的setState,状态派发函数
   */
  setState?: React.Dispatch<React.SetStateAction<S>>
}