import { ButtonHTMLAttributes } from 'react';

import { classNames } from '@/lib/utils';

type ButtonVariant = 'filled' | 'outline';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
};

const getClasses = (variant: ButtonVariant) => {
  switch (variant) {
    case 'filled':
      return 'text-white bg-zinc-900 [&:not(:disabled)]:hover:opacity-70';
    case 'outline':
      return 'border border-zinc-600';
  }
};

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  className,
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      className={classNames(
        `px-8 rounded-md py-1 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed ${getClasses(
          variant
        )}`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
