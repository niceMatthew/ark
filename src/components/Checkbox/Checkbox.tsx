import * as React from 'react';
import classNames from 'classnames';
import mergeRefs from 'react-merge-refs';

import {  UseCheckboxState } from './useCheckboxState';
import { useLocked } from '../../hooks/utility/useLocked';
import { useIcon } from '../../hooks/useIcon';
import { useClassNames } from '../../hooks/utility/useClassNames';
import { useControlled } from '../../hooks/utility/useControlled';

import { useCheckboxRadioProps } from '../../hooks/utility/useCheckboxRadioProps';
import { CheckboxRadioProps } from '../../typings/CheckboxRadioProps';
import { State } from '../State/State';
import { useIndeterminate } from './useIndeterminate';

export type CheckboxProps = CheckboxRadioProps<UseCheckboxState['state']> & {
  indeterminate?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { checked, value, state, ...rest } = useControlled<
      UseCheckboxState['state'],
      CheckboxProps
  >(props);

  const {
    children,
    locked,
    color,
    id,
    className,
    style,
    indeterminate,
    icon: propsIcon,
    htmlProps,
} = useCheckboxRadioProps<UseCheckboxState['state'], CheckboxProps>(rest);

const { ref: intRef, ...aria } = useIndeterminate({ state, checked, indeterminate });

const styles = useLocked({ locked, style });
const { icon, iconType } = useIcon(propsIcon);

  return (
    <div
      style={styles}
      className={classNames(
          'pretty',
            useClassNames({
                ...props,
                iconType,
            }),
            className
          )}>
        <input
                ref={mergeRefs([ref, intRef])}
                value={value}
                type="checkbox"
                id={id}
                checked={checked}
                {...aria}
                {...htmlProps}
        />
        <State id={id} icon={icon} color={color}>
                {children}
        </State>
  </div>
  )
})

Checkbox.displayName = 'Checkbox';