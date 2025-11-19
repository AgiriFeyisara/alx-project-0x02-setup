import { useState } from "react";
import Card from "../components/common/Card";
import PostModal from "../components/common/PostModal";
import type { PostData } from "../interfaces";

const HomePage = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (post: PostData) => {
    setPosts([...posts, post]);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>

      {/* Button to open modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Add New Post
      </button>

      {/* Modal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      {/* Display added posts */}
      <div className="space-y-4 mt-6">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
