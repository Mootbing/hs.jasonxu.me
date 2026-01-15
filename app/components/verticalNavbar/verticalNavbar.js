import Image from 'next/image'
import styles from './verticalNavbar.module.css'
import links from '@/app/data/links'

function NavBarItem ({text, link, selected, ...props}) {
    return <a href={link} className={styles.navbarItemContainer} {...props}>
        <p className={styles.navbarText}  style={{
            color: selected ? "#fff" : "#3B3B3B",
        }}>
            {text}
        </p>
    </a>
}

export default function VerticalNavbar ({selected}) {
    return <div className={styles.navbarContainer}>
        {
            links.map((link, index) => {
                return <NavBarItem
                    key={index}
                    text={link.name}
                    link={link.href}
                    selected={selected.toLowerCase() === link.name.toLowerCase()}
                />
            })
        }
    </div>
}