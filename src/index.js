//Call all functions inside services and log updated value/s
import {
  updateUser,
  getAllUsers,
  addUser,
  getUserById,
} from "./services/users";

import {
  getCommentById,
  getCommentsByPostId,
  updateCommentBody,
  deleteCommentById,
  addComment,
} from "./services/comments";

import {
  getPosts,
  getPostById,
  getPostsByUser,
  addPost,
  updatePostTitle,
  updatePostBody,
  updatePost,
  deletePostById,
  deletePostsByUserId,
} from "./services/posts";

//user tests
console.log("user tests");
console.log("getAllUsers", getAllUsers());
console.log("getUserById (user 7)", getUserById(7));
updateUser(1, { email: "roger@77.com", website: "hilde-edit.org" });
console.log("updateUser (user 1)", getAllUsers());
addUser({
  name: "Ciryl Gane",
  username: "BonGamin",
  email: "cirylgane@gmail.com",
  address: {
    street: "Session Rd.",
    suite: "Rm. 47",
    city: "Baguip",
    zipcode: "12345-6789",
    geo: {
      lat: "-30.2222",
      lng: "82.1111",
    },
  },
  phone: "1-234-567-8900 ",
  website: "bongamin.edu.org",
  company: {
    name: "Universal-Wrestling",
    catchPhrase: "New face of sports entertainment",
    bs: "classic and fresh talents",
  },
});
console.log("addUser", getAllUsers());

//comments test
console.log("comments test");

console.log("getCommentById (comment 1)", getCommentById(1));
console.log("getCommentsByPostId", getCommentsByPostId(1));
updateCommentBody(1, "new comment burger fries hotdog lasagna");
console.log("updateCommentBody (comment 1)", getCommentById(1));
addComment({
  postId: 1,
  name: "New Addition",
  email: "test@email.biz",
  body: "this is a test comment",
}); // generates comment with id 500001.
console.log("addComment", getCommentById(500001));
deleteCommentById(500001);
console.log("deleteComment", getCommentById(500001));

// posts test
console.log("comments test");
console.log("getPosts", getPosts());
console.log("getPostById", getPostById(1));
console.log("getPostByUserId", getPostsByUser(1));
addPost({
  userId: 1,
  title: "test post",
  body: "this is a test post",
}); // creates post with id 100001
console.log("addPost", getPosts());
updatePostTitle(100001, "new title");
console.log("updatePostTitle", getPosts());
updatePostBody(100001, "new body");
console.log("updatePostBody", getPosts());
updatePost(100001, {
  title: "newest title",
  body: "newest body",
});
console.log("updatePost", getPosts());
deletePostById(100001);
console.log("deletePostById", getPostById(100001));
deletePostsByUserId(1);
console.log("deletePostsByUserId", getPosts());
