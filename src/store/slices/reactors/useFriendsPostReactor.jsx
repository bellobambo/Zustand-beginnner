import * as React from "react"
import useStore from "../../useStore"



const useFriendsPostReactor = () => {
    const friends = useStore((state) => state.friends)
    const posts = useStore((state) => state.posts)
    const postsFromFriends = useStore((state) => state.postsFromFriends)
    const filterPostByFriends = useStore((state) => state.filterPostByFriends)


    React.useEffect(() => {
        filterPostByFriends();

    }, [filterPostByFriends, friends, posts])

    return postsFromFriends
}

export default useFriendsPostReactor;

