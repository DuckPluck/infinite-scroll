import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './Button.scss';


interface Props {
  className?: string;
  children: JSX.Element[] | JSX.Element | string;
  forwardBack?: boolean;
  to: string;
}

export const Button = ({ className, children, forwardBack, to }: Props) => {
  const blockClassName = classNames('button', className);
  return (
    <Link to={to} className={blockClassName}>
        {children}

      <svg className={forwardBack ? 'button__icon button__icon_rotate' : 'button__icon'} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
    </Link>
  );
};
