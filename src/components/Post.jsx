import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
        'Post muito bacana, hein!'
    ]);

    const [text, setText] = useState('');
    const maxLength = 50;

    const publishedDate = new Date(publishedAt);

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedDate, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedDate, {
        locale: ptBR,
        addSuffix: true
    });

    function handleCreateNewComment () {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    };

    function handleNewCommentChange () {
        setNewCommentText(event.target.value);
        const newText = event.target.value;
        if (newText.length <= maxLength) {
        setText(newText);
        }
    };

    function handleNewCommentInvalid () {
        event.target.setCustomValidity("Esse campo é obrigatório")
    };

    function deleteComment (commentToDelet) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelet;
        });

        setComments(commentsWithoutDeletedOne);
    };

    const sortedLines = content.sort((a, b) => a.order - b.order);

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarURL} />                   
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedDate.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>  
            </header>

            <div className={styles.content}>
                {sortedLines.map(line => {
                    if (line.type === "paragraph") {
                        return <p key={line.order}>{line.line}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.order}><a href={line.linkURL}>{line.linkURL}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                name='comment'
                placeholder='Deixe um comentário'
                value={newCommentText}
                onChange={handleNewCommentChange}
                onInvalid={handleNewCommentInvalid}
                required
                maxLength={maxLength}
                />
                <footer>
                    <button type="submit">Publicar</button>
                    <p>
                      {text.length}/{maxLength} caracteres
                    </p>
                </footer>
            </form>

            <div className={styles.commentList}>
            {
                comments.map( comment => {
                    return (
                    <Comment 
                    key={comment} 
                    content={comment} 
                    onDeleteComment={deleteComment} 
                    />
                    );
                })
            }
            </div>
        </article>
    )
}