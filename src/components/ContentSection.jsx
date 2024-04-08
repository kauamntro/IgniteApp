import React from 'react';
import { Post } from './Post';
import NewPost from './NewPost';

export default function ContentSection({ post = false, posts }) {
    
    const Content = () => {
        return posts.map(post => (
          <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
        ));
      };
  
    return (
    <>
    {post ? <NewPost /> : <Content />}
    </>
  )
};
