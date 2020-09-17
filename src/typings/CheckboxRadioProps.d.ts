import { CommonProps } from './CommonProps';

type Shape = 'curve' | 'round';
type Fill = 'thick' | 'fill';
type Animation = 'smooth' | 'jelly' | 'tada' | 'rotate' | 'pulse'

export type CheckboxRadioProps<S = any> = Omit<CommonProps<S>, 'type'> & {
  shape?: Shape;
  variant?: Fill;
  animation?: Animation;
  plain?: boolean;
  indeterminate?: boolean;
  icon?: React.ReactElement<any, 'svg'| 'i' | 'em' | 'img'>
  /** 
   * @private
   */
  iconType?: 'svg'| 'icon' | 'image'
}