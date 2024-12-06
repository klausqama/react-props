import styles from './Post.module.css'
import Button from '../../UI/Button'
export default function Post(props) {

    /**
     * 
     * {
     * 
     *  title,
     *  content,
     *  image,
     *  pippoFranco,
     *  published
     * 
     * }
     *  
     */


    const titolo = props.title
    const descrizione = props.content
    const immagine = props.image

    console.log(props)

return(
    <section className={styles.container}>
    <h1>{titolo}</h1>
    <p className={styles.postDescription}>{descrizione}</p>
    <div className='row'>
        <div className={styles.img}>
            <img src={immagine} alt="" />
        </div>
            <Button/>
    </div>
    </section>
)
}