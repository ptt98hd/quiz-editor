import type { ComponentProps } from 'react';
import './container.css';

type ContainerProps = ComponentProps<'div'>;

export function Container({ className, ...props }: ContainerProps) {
  return <div className={`${'container'} ${className}`} {...props} />;
}
