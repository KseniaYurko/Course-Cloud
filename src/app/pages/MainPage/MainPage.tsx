//import components
import NewsCard from "../../components/NewsCard/NewsCard"

//import styles
import styles from './style.module.css'

export default function MainPage() {
    return (
        <div className={styles['content-area']}>
            <div className={styles['news-area']}>
                <NewsCard />
            </div>
            <div className={styles['courses-area']}>

            </div>
            
        </div>
    )
}