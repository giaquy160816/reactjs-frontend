import React from 'react';

const posts = [
  { id: 1, title: 'Post 1', thumbnail: 'https://via.placeholder.com/150', publicDate: '2022-01-01' },
  { id: 2, title: 'Post 2', thumbnail: 'https://via.placeholder.com/150', publicDate: '2022-01-02' },
  { id: 3, title: 'Post 3', thumbnail: 'https://via.placeholder.com/150', publicDate: '2022-01-03' },
  { id: 4, title: 'Post 4', thumbnail: 'https://via.placeholder.com/150', publicDate: '2022-01-04' },
  { id: 5, title: 'Post 5', thumbnail: 'https://via.placeholder.com/150', publicDate: '2022-01-05' },
  { id: 6, title: 'Post 6', thumbnail: 'https://via.placeholder.com/150', publicDate: '2022-01-06' },
  // ... thêm các bài viết khác nếu cần
];

function BlogList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {posts.map(post => (
        <div key={post.id} className="border p-4">
          <img src={post.thumbnail} alt={post.title} className="w-full h-auto" />
          <h2 className="text-lg font-bold">{post.title}</h2>
          <p className="text-gray-500">{post.publicDate}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
