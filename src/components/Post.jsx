import React, { useEffect } from 'react';
import useFriendsPostReactor from '../store/slices/reactors/useFriendsPostReactor';
import useStore from '../store/useStore';

const Posts = () => {
    const fetchPosts = useStore((state) => state.fetchPosts);
    const posts = useFriendsPostReactor()


    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);



    return (
        <div>
            <h3>Posts</h3>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;
