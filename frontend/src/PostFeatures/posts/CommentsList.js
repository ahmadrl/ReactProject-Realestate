import { useSelector } from "react-redux";
import { selectCommentIds } from "./postsSlice";
import CommentsExcerpt from "./CommentsExcerpt";
import { useGetCommentsQuery } from './postsSlice';

const CommentsList = () => {
    const {
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetCommentsQuery()

    const orderedPostIds = useSelector(selectCommentIds)

    let content;
    if (isLoading) {
        content = <p>"Loading..."</p>;
    } else if (isSuccess) {
       
            content = orderedPostIds.map(postId => <CommentsExcerpt key={postId} postId={postId}  />)
    } else if (isError) {
        content = <p>{error}</p>;
    }

    return (
        <section>
            
            {content}
        </section>
    )
}
export default CommentsList