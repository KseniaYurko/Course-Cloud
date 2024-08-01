import Link from "next/link";
import Image from "next/image";

//import icons
import course_cloud_logo from '@/public/icons/course-cloud-logo.svg'
import search_icon from '@/public/icons/search.svg'
import fav_icon from '@/public/icons/bookmark.svg'
import profile_icon from '@/public/icons/user-circle.svg'
import notifications_icon from '@/public/icons/bell.svg'
import dark_mode_icon from '@/public/icons/moon.svg'

//import header style
import styles from './style.module.css'

export default function Header() {
    return (
      <header className={styles.header}>
        <div className={styles['header-logo']}>
            <Link href="/">
                <Image 
                    src={course_cloud_logo} 
                    alt="Course Cloud logo" 
                    width={250}
                />
            </Link> 
        </div>
        <nav className={styles['header-nav']}>
            <Link href="/" className={styles['header-nav-item']}>Лента</Link>
            <Link href="/tests" className={styles['header-nav-item']}>Тесты</Link>
            <Link href="/courses" className={styles['header-nav-item']}>Курсы</Link>
        </nav>
        <div className={styles['header-user_menu']}>
            <div className={styles['header-user_menu-item']}>
                <Image src={search_icon}  alt="search_icon" className={styles.icon} />
            </div>
            <Link href="/favorites" className={styles['header-user_menu-item']}>
                <Image src={fav_icon}  alt="fav_icon" className={styles.icon} />
            </Link>
            <Link href="/profile" className={styles['header-user_menu-item']}>
                <Image src={profile_icon}  alt="profile_icon" className={styles.icon} />
            </Link>
            <div className={styles['header-user_menu-item']}>
                <Image src={notifications_icon}  alt="notifications_icon" className={styles.icon} />
            </div>
            <div className={styles['header-user_menu-item']}>
                <Image src={dark_mode_icon}  alt="dark_mode_icon" className={styles.icon} />
            </div>  
        </div>
      </header>
    );
}