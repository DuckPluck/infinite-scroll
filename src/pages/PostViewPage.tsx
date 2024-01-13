import { PostCard } from '../components/elements/PostCard/PostCard';
import { postApi } from '../API/postApi';
import { useParams } from 'react-router-dom';
import { Loading } from '../components/ui/Loading/Loading';


export const PostViewPage = () => {
    const postId = Number(useParams().id);

    const { data: post, isLoading }: { data?: Post, isLoading: boolean } =
        postApi.useFetchPostByIdQuery(postId);

    if (isLoading || !post) {
      return (
        <Loading />
      );
    }

    return (
        <PostCard post={post} />
    );
};
