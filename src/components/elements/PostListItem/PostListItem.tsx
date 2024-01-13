import classNames from 'classnames';
import { useEffect, useState } from 'react';

import { Button } from '../../ui/Button/Button';

import './PostListItem.scss';

interface Props {
  className?: string;
  post: Post;
}

export const PostListItem = ({ className, post }: Props) => {
  const blockClassName = classNames('post-list-item', className);

  const formatMobileText = (str: string) => {
    return str.slice(0, 197) + '...';
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 412);

  useEffect(() => {
    const widthWatcher = () => {
      setIsMobile(window.innerWidth <= 412);
    };

    window.addEventListener('resize', widthWatcher);

    return () => {
      window.removeEventListener('resize', widthWatcher);
    };
  });

  return (
    <div className={blockClassName}>
      <div className="post-list-item__info-section">
        <div className="post-list-item__index-section">
          <div className="post-list-item__index-box">
            <div className="post-list-item__index">
              {post.id}
            </div>
          </div>
        </div>

        <div className="post-list-item__text-section">
          <p className="post-list-item__title">
            {post.id === 100 ?
              `Пост номер ${post.id} (это последний пост, который выдает моковый api)` :
              `Пост номер ${post.id}`}
          </p>

          <p className="post-list-item__description" id="post-description">
            {isMobile ?
              formatMobileText(`${post.id} ${post.title} ${post.body}`) :
              `${post.id} ${post.title} ${post.body}`}
          </p>
        </div>
      </div>

      <div className="post-list-item__button-section">
        <Button to={`post/${post.id}`}>просмотр</Button>
      </div>
    </div>
  );
};
