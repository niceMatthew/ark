import { useCommonProps } from './useCommonProps';
import { CheckboxRadioProps } from '../../typings/CheckboxRadioProps';

/**
 * Responsible for extracting common props for radio and checkbox
 * controls.
 */
export const useCheckboxRadioProps = <S, P extends CheckboxRadioProps<S>>(props: P) => {
    const { shape, plain, icon, indeterminate, ...rest } = props;

    return { shape, plain, icon, indeterminate, ...useCommonProps(rest) };
};