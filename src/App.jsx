import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { useState, useEffect } from 'react';
import ContentSection from './components/ContentSection';

export function App() {
  const [posts, setPosts] = useState([]);
  const [postBoolean, setPostBoolean] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("http://localhost:8080/Posts/");
        const postsResponse = await response.json();
        setPosts(postsResponse);
      } catch (error) {
        console.error("Erro ao buscar os posts:", error);
      }
    }
    
    fetchPosts();
  }, []);

  function changeContent () {
    const value = !postBoolean;
    setPostBoolean(value);
    return console.log(postBoolean)
  };

  return (
    <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar setContent={changeContent} postBoolean={postBoolean} />
      <main>
        <ContentSection posts={posts} post={postBoolean} />
      </main>
    </div>
    </>
  )
}


