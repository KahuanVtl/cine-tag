import styles from './NaoEncontrada.module.css'

export default function NaoEncontrada(){
    return(
        <>
            <section className={styles.espaco}>
                <h2>Ops...</h2>
                <p>A página requerida não foi encontrada</p>
            </section>
        </>
    )
}