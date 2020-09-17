import { CheckboxRadioProps } from '../../typings/CheckboxRadioProps';

type Props = Omit<CheckboxRadioProps, 'shape' | 'variant'> & {
  shape?: CheckboxRadioProps['shape'];
  variant?: string;
};

const isDefault = (
  animation: CheckboxRadioProps['animation'],
  type: CheckboxRadioProps['iconType']
) => {
    if(type) {
      return false;
    }

    return !animation || animation === 'smooth' || animation === 'pulse';
}

export const useClassNames = (props: Props, isSwitch?: boolean) => {
  const { animation,  plain, shape, variant, iconType } = props;

  return {
    'p-default': !isSwitch && isDefault(animation, iconType),
    'p-plain': plain,
    [`p-${animation}`]: animation,
    [`p-${shape}`]: shape,
    [`p-${variant}`]: variant,
    [`p-${iconType}`]: iconType,
  }
}