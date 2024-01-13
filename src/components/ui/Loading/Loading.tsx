import classNames from 'classnames';

import './Loading.scss';


interface Props {
  className?: string;
}

export const Loading = ({ className }: Props) => {
  const blockClassName = classNames('loading', className);
  return (
    <div className={blockClassName}>
      <div className="loading__icon" />
    </div>
  );
};
