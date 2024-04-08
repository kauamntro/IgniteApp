import React from 'react';
import { useState } from 'react';
import styles from './NewPost.module.css';
import { Avatar } from './Avatar';

export default function NewPost (author) {
  const [text, setText] = useState('');
  const maxLength = 200;

  const handleChange = (event) => {
    const newText = event.target.value;
    if (newText.length <= maxLength) {
      setText(newText);
    }
  };

  function submitNewPost () {
    event.preventDefault();
    const text = JSON.parse(event.target.querySelector('textarea').value);
    console.log(text);
  }

  return (
    <article className={styles.post}>
            <form onSubmit={submitNewPost}>
              <header>
                  <div className={styles.author}>
                      <Avatar src="https://github.com/kauamntro.png" />
                      <div className={styles.authorInfo}>
                          <strong>Kauã Monteiro</strong>
                          <span>Web Developer</span>
                      </div>
                  </div>
              
              </header>
              <div className={styles.contentForm}>
                <textarea
                name=""
                id=""
                cols="100"
                rows="10"
                maxLength={maxLength}
                value={text}
                onChange={handleChange}
                placeholder='Escreva o seu próximo post marcante...'
                required
                >
                </textarea>
                <footer>
                      <button type="submit">Publicar</button>
                      <p>
                        {text.length}/{maxLength} caracteres
                      </p>
                </footer>
              </div>
            </form>
    </article>
  )
}

