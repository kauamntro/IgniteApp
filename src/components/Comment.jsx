import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

export function Comment ({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment () {
        onDeleteComment(content);
    }

    function handleLikeComment () {
        setLikeCount((prev) => {return prev + 1})
    }

    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/kauamntro.png" hasBorder={false} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Kauã Monteiro</strong>
                            <time title="11 de janeiro as 10:20" dateTime="2024-01-11 10:20:00">
                                Cerca de 1h atras
                            </time> 
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )   
}