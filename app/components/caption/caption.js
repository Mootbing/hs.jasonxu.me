import styles from './caption.module.css'

export default function Caption ({title, subtitle, ...props}) {
    return <div className={styles.captionContainer} {...props}>
        <p className={styles.title}> {title} </p>
        <p className={styles.subtitle}> {subtitle} </p>
    </div>
}