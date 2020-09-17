import * as React from 'react';
import { CommonProps } from '../../typings/CommonProps';

export type UseLockedArgs = {
  locked: CommonProps<unknown>['locked'];
  style?: React.CSSProperties;
}

const lockedStyles: React.CSSProperties = { pointerEvents: 'none' };

export const useLocked = ({ locked, style }: UseLockedArgs ) => {
  if(locked) {
    return {
      ...lockedStyles,
      ...style,
    }
  }

  return style;
}