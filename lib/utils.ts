import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tw-merge';

export const classNames = (...classNames: ClassValue[]) =>
  twMerge(clsx(classNames));
