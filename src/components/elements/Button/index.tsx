/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes } from 'react';
import style from './style.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  type: 'button' | 'submit' | 'reset' | undefined;
  title: string;
  color: string;
}

export default function Button({
  disabled,
  color,
  title,
  type,
  ...rest
}: IButtonProps): JSX.Element {
  return (
    <button
      {...rest}
      disabled={disabled}
      type={type}
      className={style.button__container}
      style={{ backgroundColor: disabled ? 'var(--text-input)' : color }}
    >
      {title}
    </button>
  );
}
