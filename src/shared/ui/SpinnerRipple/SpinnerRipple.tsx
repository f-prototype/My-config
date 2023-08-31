import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SpinnerRipple.module.scss';

export interface SpinnerRippleProps {
className?: string;}

export const SpinnerRipple = ({ className }:SpinnerRippleProps) => (
    <div className={classNames(cls.SpinnerRipple, {}, [className])}>
        <div />
        <div />
    </div>
);
