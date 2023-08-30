import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
className?: string}

export const Button: FC<ButtonProps> = (props:ButtonProps) => {
  const { className, children, ...otherProps } = props;
  return (
      <button type="button" className={classNames(cls.Button, {}, [className])} {...otherProps}>
          {children}
      </button>
  );
};
