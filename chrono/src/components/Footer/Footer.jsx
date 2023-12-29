import { Link } from "react-router-dom"
import styles from "./Footer.module.scss"

export default function Footer(){

    const footerItems = [
			{
				title: 'Information',
				innerLink: [
					{
						link: 'Search',
					},
					{
						link: 'Help',
					},
					{
						link: 'Shipping Details',
					},
					{
						link: 'Privacy Policy',
					},
					{
						link: 'Information',
					},
				],
			},
			{
				title: 'My Account',
				innerLink: [
					{
						link: 'Contact Us',
					},
					{
						link: 'About Us',
					},
					{
						link: 'Careers',
					},
					{
						link: 'Return Centre',
					},
					{
						link: 'Deliveries',
					},
				],
			},
			{
				title: 'Help',
				innerLink: [
					{
						link: 'Search Terms',
					},
					{
						link: 'Advanced Search',
					},
					{
						link: 'Help & FAQs',
					},
					{
						link: 'Store Location',
					},
					{
						link: 'Orders and Returns',
					},
				],
			},
			{
				title: 'Watches',
				innerLink: [
					{
						link: 'Hizone Watch',
					},
					{
						link: 'Giordano Watch',
					},
					{
						link: 'Romex Watch',
					},
					{
						link: 'Smart Watches',
					},
					{
						link: 'Philippe Watches',
					},
				],
			},
			{
				title: 'Support',
				innerLink: [
					{
						link: 'Chat Support',
					},
					{
						link: 'E-Mail Support',
					},
					{
						link: '24/7 Support',
					},
					{
						link: 'Customer Stories',
					},
					{
						link: 'Terms of Use',
					},
				],
			},
		]



		const cards = [
			{
				img: '/images/visa.png'
			},
			{
				img: '/images/master.png'
			},
			{
				img: '/images/amex.png'
			},
			{
				img: '/images/paypal.png'
			},
			{
				img: '/images/discover.png'
			},
		]



    return (
			<footer>
				<div className={styles.containerTitles}>
					{footerItems.map((item, index) => {
						return (
							<div key={index} className={styles.containerTitlesBox}>
								<p>{item.title}</p>
								<ul>
									{item.innerLink.map((el, index) => {
										return (
											<li key={index}>
												<a href='#'>{el.link}</a>
											</li>
										)
									})}
								</ul>
							</div>
						)
					})}
				</div>
				<div className={styles.containerIcons}>
					<div className={styles.logo}>
						<img src='/images/logo.webp' alt='' />
					</div>
					<div className={styles.contentBox}>
						<i className='fa-brands fa-twitter'></i>
						<i className='fa-brands fa-facebook'></i>
						<i className='fa-brands fa-tiktok'></i>
						<i className='fa-brands fa-instagram'></i>
					</div>
				</div>
				<div className={styles.containerCards}>
					<p>All Right Reserved © 2023, Chrono Dial (password: buddha)</p>
					<div className={styles.cardsBox}>
						{cards.map((item,index) => {
							return (
								<div key={index}>
									<img src={item.img} alt="" />
								</div>
							)
						})}
					</div>
				</div>
			</footer>
		)
}