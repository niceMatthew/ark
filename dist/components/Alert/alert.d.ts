import React, { FC } from 'react';
export declare type AlertType = 'success' | 'default' | 'danger' | 'warning';
export interface AlertProps {
    message: React.ReactNode;
    description?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    alertType?: AlertType;
}
declare const Alert: FC<AlertProps>;
export default Alert;
