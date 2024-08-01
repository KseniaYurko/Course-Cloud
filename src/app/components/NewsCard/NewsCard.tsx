import Image from 'next/image'

//import card styles
import styles from './style.module.css'

//import images
import profile_photo from '@/public/images/mock_profile_photo.jpg'
import card_cover from '@/public/images/mock_cover.jpg'

export default function NewsCard() {
    return (
        <>
            <div className={styles['news_card']}>
                <div className={styles['news_card-heading']}>
                    <div className={styles['news_card-heading-date']}>data</div>
                    <div className={styles['news_card-heading-text']}>heading</div>
                </div>
                <div className={styles['news_card-body']}>
                    <div className={styles['body-user_info']}>
                        <div className={styles['body-user_info-photo']}>
                            <Image src={profile_photo}  alt="profile_photo" className={styles['profile_photo']} />
                        </div>
                        <div className={styles['body-user_info-name']}>Ksenia Yurko</div>
                        <div className={styles['body-user_info-description']}>junior frontend developer</div>
                    </div>
                    <div className={styles['body-text']}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam fuga fugiat animi expedita ipsam, facere sint voluptate voluptatibus eos voluptatum?
                    </div>
                </div>
                <div className={styles['body-cover']}>
                    <Image src={card_cover}  alt="cover_image" className={styles['cover_image']} />
                </div>
            </div>
        </>
    )
}