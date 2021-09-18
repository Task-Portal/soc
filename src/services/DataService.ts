import Post from "../models/Post";
import PostItem from "../models/PostItem";

export async function getPostById(Id: string): Promise<Post> {
  const promise = new Promise<Post>((res, rej) => {
    setTimeout(() => {
      const post = {
        id: "1",
        views: 22,
        title: "Post 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userName: "dave",
        userId: "1",
        points: 11,
        createdOn: new Date(),
        lastModifiedOn: new Date(),
        postItems: [
          {
            id: "1",
            views: 22,
            points: 2,
            body: "PostItem 1",
            userName: "jon",
            userId: "2",
            createdOn: new Date(),
            postId: "1",
          },
          {
            id: "2",
            views: 11,
            points: 14,
            body: "PostItem 2",
            userName: "linda",
            userId: "4",
            createdOn: new Date(),
            postId: "1",
          },
        ],
      };

      res(post);
    }, 2000);
  });
  return promise;
}

export async function getUserPosts(id: string): Promise<Array<Post>> {
  const result = new Promise<Array<Post>>((res) => {
    setTimeout(() => {
      const posts: Array<Post> = [];
      posts.push({
        id: "1",
        views: 22,
        title: "Post 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userName: "dave",
        userId: "1",
        points: 11,
        createdOn: new Date(),
        lastModifiedOn: new Date(),
        postItems: [
          {
            id: "1",
            views: 22,
            points: 2,
            body: "PostItem 1",
            userName: "jon",
            userId: "2",
            createdOn: new Date(),
            postId: "1",
          },
        ],
      });
      posts.push({
        id: "2",
        views: 2,
        title: "Post 2",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userName: "tim",
        userId: "2",
        points: 55,
        createdOn: new Date(),
        lastModifiedOn: new Date(),
        postItems: [
          {
            id: "1",
            views: 22,
            points: 2,
            body: "PostItem 1",
            userName: "jon",
            userId: "2",
            createdOn: new Date(),
            postId: "2",
          },
        ],
      });

      res(posts);
    }, 2000);
  });
  return result;
}
