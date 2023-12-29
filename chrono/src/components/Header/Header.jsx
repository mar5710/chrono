import { Link } from "react-router-dom"
import styles from "./Header.module.scss"
import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import i18n from "../../translation"


export default function Header(){
	const [favList,setFavList] = useState([])
	const location = useLocation()

	const {pathname} = location
	
	const x = useTranslation()

    const [navActive,setNavActive] = React.useState(false)
    
    const navActiveToggle = () =>{
        setNavActive(!navActive)
    }


	const [favoriteActive, setFavoriteActive] = React.useState(false)

	const favoriteActiveToggle = () => {
		setFavoriteActive(!favoriteActive)
	}

	const [languageActive,setLanguageActive] = useState(false)

	const languageActiveToggle = () => {
		setLanguageActive(!languageActive)
	}


    const navLinks = [
			{
				name: 'Home',
				link: '/',
			},
			{
				name: 'Shope',
				link: '/shope',
			},
			{
				name: 'About',
				link: '/about',
			},
		]


    return (
			<header className={styles.header}>
				{console.log(pathname)}
				<div className={styles.logo}>
					<Link to='/'>
						<img src='/images/logo.webp' alt='logo' />
					</Link>
				</div>
				<nav className={styles.nav}>
					<ul>
						{navLinks.map((item, index) => {
							return (
								<li key={index}>
									<Link
										className={pathname == item.link ? styles.linkActive : ''}
										to={item.link}
									>
										{x.t(item.name)}
									</Link>
								</li>
							)
						})}
					</ul>
				</nav>
				<div className={styles.headerIcons}>
					<div onClick={favoriteActiveToggle} className={styles.heartIcon}>
						<i className='fa-solid fa-heart'></i>
					</div>
					<div className={styles.heartIcon}>
						<i className='fa-solid fa-magnifying-glass'></i>
					</div>
					<div className={styles.heartIcon}>
						<button onClick={languageActiveToggle}>
							<img src='/images/ax.svg' alt='' />
						</button>
						{languageActive && (
							<div>
								<button onClick={() => x.i18n.changeLanguage("en")}>English</button>
								<button onClick={() => x.i18n.changeLanguage("ru")}>Russian</button>
							</div>
						)}
					</div>
				</div>
				<div onClick={navActiveToggle} className={styles.burgerMenu}>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div
					className={`${styles.mobileNavBox} ${navActive ? styles.active : ''}`}
				>
					<div onClick={navActiveToggle} className={`${styles.navCloseBtn}`}>
						<i className='fa-solid fa-xmark'></i>
					</div>
					<nav className={styles.mobileNav}>
						<ul>
							{navLinks.map((item, index) => {
								return (
									<li key={index}>
										<Link to='/'>{item.link}</Link>
									</li>
								)
							})}
						</ul>
					</nav>
					<div className={styles.account}>
						<div className={styles.accountBox}>
							<i className='fa-solid fa-user'></i>
							<span>Log in</span>
						</div>
						<div className={styles.contentBox}>
							<i className='fa-brands fa-twitter'></i>
							<i className='fa-brands fa-facebook'></i>
							<i className='fa-brands fa-tiktok'></i>
							<i className='fa-brands fa-instagram'></i>
						</div>
					</div>
					<div
						className={`${styles.favoriteBox} ${
							favoriteActive ? styles.favoriteActive : ''
						}`}
					></div>
				</div>
			</header>
		)
}