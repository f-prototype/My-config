import { classNames } from 'shared/lib/classNames/classNames';
import { SpinnerRipple } from 'shared/ui';
import cls from './PageLoader.module.scss';

export interface PageLoaderProps {
className?: string;}

export const PageLoader = ({ className }:PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <SpinnerRipple />
    </div>
);
