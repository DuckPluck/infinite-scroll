import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { postApi } from '../../../API/postApi';

import { PostListItem } from '../PostListItem/PostListItem';

import './PostList.scss';


interface Props {
  className?: string;
}

export const PostList = ({ className }: Props) => {
  const blockClassName = classNames('post-list', className);

  const getValueFromStorage = (key: string) => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key)!);
    }
    return null;
  };

  const [postStart, setPostStart] = useState(+getValueFromStorage('previousPostStart') || 0);

  const { data: posts } =
    postApi.useFetchAllPostsQuery<{ data?: Post[] }>({ limit: 20, start: postStart });

  const { ref: firstPost, inView: inViewFirstPost } = useInView({
    threshold: .1,
    delay: 500,
  });

  const { ref: lastPost, inView: inViewLastPost } = useInView({
    threshold: .1,
  });

  const addValueToStorage = (key: string, value: number) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  useEffect(() => {
    if (inViewFirstPost) {
      addValueToStorage('previousPostStart', postStart >= 10 ? postStart - 10 : postStart);
      setPostStart((prev) => prev >= 10 ? prev - 10 : prev);

      if (postStart !== 0) {
        document.documentElement.scrollTo({ top: 200 });
      }
    }
  }, [inViewFirstPost]);

  useEffect(() => {
    if (inViewLastPost) {
      addValueToStorage('previousPostStart', postStart + 10);
      setPostStart((prev) => prev + 10);
    }
  }, [inViewLastPost]);

  return (
    <div className={blockClassName}>
      <div className="post-list__header">
        <h5 className="post-list__title">Список постов</h5>
      </div>

      <div className="post-list__items-container">
        <ul role="list" className="post-list__items-ul">
          {posts?.map((post, i) => (

            i === 0 ? (
              <li className="post-list-item__li" key={post.id} ref={firstPost}>
                <PostListItem post={post} />
              </li>

            ) : i === posts.length - 1 ? (
              <li className="post-list-item__li" key={post.id} ref={lastPost}>
                <PostListItem post={post} />
              </li>

            ) : (
              <li className="post-list-item__li" key={post.id}>
                <PostListItem post={post} />
              </li>
            )
          ))}
        </ul>
      </div>
    </div>
  );
};
