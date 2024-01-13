import classNames from 'classnames';

import { Button } from '../../ui/Button/Button';

import './PostCard.scss';


interface Props {
  className?: string;
  post: Post;
}

export const PostCard = ({ className, post }: Props) => {
  const blockClassName = classNames('post-card', className);
  return (
    <div className={blockClassName}>
      <p className="post-card__title">
        {`${post.id}. ${post.title}`}
      </p>

      <p className="post-card__description">{post.body}</p>

      <Button to="/infinite-scroll/" forwardBack className="post-card__button">
        назад
      </Button>
    </div>
  );
};
