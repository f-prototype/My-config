import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import cls from './PageError.module.scss';

export interface PageErrorProps {
className?: string;}

const reloadPage = () => {
  window.location.reload();
};

export const PageError = ({ className }:PageErrorProps) => (
    <div className={classNames(cls.PageError, {}, [className])}>
        <p>Something went wrong</p>
        <Button onClick={reloadPage}>Reload</Button>
    </div>
);
