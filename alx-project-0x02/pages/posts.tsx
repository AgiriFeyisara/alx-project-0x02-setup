import React from "react";
import { type PostProps } from "@/interfaces";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="p-6">
      <Header />
      <h1 className="text-3xl font-bold mb-6">Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.slice(0, 10).map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
