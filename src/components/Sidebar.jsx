import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar({ setContent, postBoolean }) {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="" 
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/kauamntro.png" />

                <strong>Kauã Monteiro</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <button className={styles.button} onClick={setContent}>
                {postBoolean === false ? (
                <>
                    <PencilLine size={20} /> Novo Post
                </>
                ) : (
                <>Voltar ao início</>
                )}
                </button>
            </footer>
        </aside>
    )
}