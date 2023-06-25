const createPostSlice = (set, get) => ({
    posts: [],
    postsFromFriends: [],
    fetchPosts: async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        set({ posts: await res.json() });
    },
    filterPostByFriends: () => {
        const postFromFriends = get().posts.filter(post =>
            get().friends.find((friend )=> friend.id === post.userId))
        set({ postFromFriends })
    }
});

export default createPostSlice;