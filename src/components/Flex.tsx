import classNames from 'classnames';
import React from 'react';

type FlexProps = React.HTMLAttributes<HTMLDivElement>;

function Flex({ children, className, ...restProps }: FlexProps) {
  return (
    <div className={classNames('flex', className)} {...restProps}>
      {children}
    </div>
  );
}

export default Flex;
