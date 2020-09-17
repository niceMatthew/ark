import { CommonProps } from '../../typings/CommonProps';

const isBoolean = (e: unknown) => typeof e === 'boolean';
const isNullish = (e: unknown) => e === null || e === undefined;
const isIndeterminate = (e: unknown) => e === 'indeterminate';

export const useControlled = <S, P extends CommonProps<S>>(props: P) => {
  let { checked, state, setState, value, defaultValue, ...rest } = props;

  if(setState) {
    if(
      (isBoolean(state) || isIndeterminate(state) &&
      !isBoolean(checked) &&
      isNullish(checked))
    ) {
      checked = !!state;
    }
  } else if(Array.isArray(state)) {
    checked = state.includes(value)
  } else if(isNullish(checked)) {
    checked = Object.is(state, value)
  }

  if(isNullish(value)) {
    value = defaultValue || ''
  }

  return { checked, value, state, ...rest }
}