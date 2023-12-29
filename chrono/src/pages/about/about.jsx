import styles from "./about.module.scss"
import React from "react"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'



export default function About(){


    const bannerWrapper = [
			{
				img: '/images/abo-01.webp',
				maintitle: 'Italian Design Watches',
				subtitle: 'Watch that lasts longer',
				desc: 'Sed vestibulum nulla elementum auctor tincidunt. Aliquam sit amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim nulla, sollicitudin ac hendrerit nec, tempor quis nisl',
			},
			{
				img: '/images/abo-02.webp',
				maintitle: 'Mechanical Watches',
				subtitle: 'Crafted with accuracy and class',
				desc: 'Aliquam sit amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim nulla, sollicitudin ac hendrerit nec, tempor quis nisl. Sed vestibulum nulla elementum auctor tincidunt.We personalize watches just for you',
			},
		]

	const watchesSteel = [
		{
			steel: 'Stainless Steel',
			icon: <i className='fa-regular fa-circle-dot'></i>,
		},
		{
			steel: 'Sapphire glass',
			icon: <i className='fa-regular fa-circle-dot'></i>,
		},
		{
			steel: 'Quartz movement',
			icon: <i className='fa-regular fa-circle-dot'></i>,
		},
		{
			steel: 'Water resistance',
			icon: <i className='fa-regular fa-circle-dot'></i>,
		},
		{
			steel: 'Beautiful Finish',
			icon: <i className='fa-regular fa-circle-dot'></i>,
		},
	]	


	const partnersLogo = [
		{
			logo: '/images/logo10.webp',
		},
		{
			logo: '/images/logo11.webp',
		},
		{
			logo: '/images/logo12.webp',
		},
		{
			logo: '/images/logo13.avif',
		},
		{
			logo: '/images/logo14.webp',
		},
		{
			logo: '/images/logo15.webp',
		},
		{
			logo: '/images/logo16.webp',
		},
	]

	const customersTestimonials = [
		{
			text: 'Cras pretium risus ac tempor ultrices. Phasellus pretium ex odio, sit amet ultricies nulla accumsan quis. Morbi pharetra orci rutrum ultrices tempor. Proin venenatis nisl dui, sit amet imperdiet elit tincidunt et',
			star: <i className='fa-solid fa-star'></i>,
			name: 'Dwight Clark',
			category: 'Business Man',
			img: '/images/customerfoto1.avif',
		},
		{
			text: 'Vestibulum velit enim, lobortis sit amet mi eu, commodo aliquet metus. Quisque iaculis eros a sem commodo, metus in convallis. Praesent eu auctor enim. Phasellus in nibh ut ipsum accumsan ullamcorper veleros.',
			star: <i className='fa-solid fa-star'></i>,
			name: 'Dallas Lawrence',
			category: 'HR Specialist',
			img: '/images/customerfoto2.jpg',
		},
		{
			text: 'Cras pretium risus ac tempor ultrices. Phasellus pretium ex odio, sit amet ultricies nulla accumsan quis. Morbi pharetra orci rutrum ultrices tempor. Proin venenatis nisl dui, sit amet imperdiet elit tincidunt et',
			star: <i className='fa-solid fa-star'></i>,
			name: 'Fredrick Maldonado',
			category: 'Systems Analyst',
			img: '/images/testimonial1.avif',
		},
	]


    return (
			<main className={styles.aboutMain}>
				<section className={styles.about}>
					<h1>About</h1>
					<p>
						<Link to='/'>Home</Link> / About
					</p>
				</section>
				<section className={styles.gridBannerContainer}>
					<div className={styles.gridBannerTitles}>
						<p>OUR CRAFTSMANSHIP</p>
						<h3>We personalize watches just for you</h3>
					</div>
					<div className={styles.gridBannerWrapper}>
						{bannerWrapper.map((item, index) => {
							return (
								<div key={index} className={styles.bannerWrapperContent}>
									<img src={item.img} alt='' width={100} height={100} />
									<div className={styles.bannerWrapperTitles}>
										<h4>{item.maintitle}</h4>
										<h3>{item.subtitle}</h3>
										<p>{item.desc}</p>
									</div>
								</div>
							)
						})}
					</div>
				</section>
				<section className={styles.luxuryContainer}>
					<div className={styles.luxuryTitles}>
						<p>NEW ERA OF YOUR TIME</p>
						<h3>Super Luxury, Super Watches</h3>
					</div>
					<div className={styles.accurateContent}>
						<div className={styles.accurateTitle}>
							<h3>Accurate Watch</h3>
							<p>
								Quisque sed lectus rhoncus, auctor dui sed, mattis metus. Donec
								ac quam eu sem blandit tincidunt ut nec lectus. Nunc et
								consequat mi. Duis et justo sedt porta lobortis sit amet nec
								turpis. Nam fringill.
							</p>
						</div>
						<div className={styles.accurateImg}>
							<img src='/images/img4.webp' alt='img4' />
						</div>
						<div className={styles.watchesCategory}>
							<ul>
								{watchesSteel.map((item, index) => {
									return (
										<li key={index}>
											<span>{item.icon}</span> {item.steel}
										</li>
									)
								})}
							</ul>
						</div>
					</div>
				</section>
				<section className={styles.brandedContainer}>
					<div className={styles.brandedTitle}>
						<h4>BRANDED & LONGLISTING</h4>
						<h3>Affordable watch</h3>
						<p>Modern and best portable timepiece</p>
					</div>
					<div className={styles.brandedContent}>
						<div className={styles.brandedWatches}>
							<div className={styles.contentImg}>
								<img src='/images/abo-03.webp' alt='' />
							</div>
							<div className={styles.contentTitle}>
								<i className='fa-regular fa-lightbulb'></i>
								<h3>Timeless watches to fit your style</h3>
								<p>
									Quisque sit amet justo eget lorem congue sagittis sit amet
									congue sapien. In vitae fermentum erat. Sed hendrerit elit nec
									dignissim imperdiet. Vivamus nunc felis, semper ut po.
								</p>
							</div>
						</div>
						<div className={styles.brandedWatches1}>
							<div className={styles.contentImg}>
								<img src='/images/abo-04.webp' alt='' />
							</div>
							<div
								className={`${styles.contentTitle} ${styles.contentTitleRevers}`}
							>
								<i className='fa-solid fa-hourglass-start'></i>
								<h3>A lot more luxury watches</h3>
								<p>
									Praesent rutrum justo vel mattis finibus. Curabitur sed
									pharetra turpis, nec mollis metus. Ut dignissim dictum
									imperdiet. Cras dui est, convallis ut ante a, finibus
									ullamcorper.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className={styles.partnersContainer}>
					<div className={styles.partnerTitle}>
						<h4>OUR VALUABLE</h4>
						<h3>Worldwide Partner</h3>
						<p>At varius vel pharetra vel turpis nunc eget.</p>
					</div>
					<div className={styles.partnersSwiper}>
						<Swiper
							loop={true}
							spaceBetween={50}
							slidesPerView={5}
							onSlideChange={() => console.log('slide change')}
							onSwiper={swiper => console.log(swiper)}
						>
							<div>
								{partnersLogo.map((item, index) => {
									return (
										<SwiperSlide key={index}>
											<img src={item.logo} alt='' />
										</SwiperSlide>
									)
								})}
							</div>
						</Swiper>
					</div>
				</section>
				<section className={styles.customersContainer}>
					<div className={styles.customersTitle}>
						<h4>HAPPY CUSTOMERS</h4>
						<h3>Testimonials</h3>
						<p>
							Urna duis convallis convallis tellus id interdum velit laoreet.
						</p>
					</div>
					<div className={styles.testimonialContent}>
						<Swiper
						loop={true}
							spaceBetween={50}
							slidesPerView={2}
							onSlideChange={() => console.log('slide change')}
							onSwiper={swiper => console.log(swiper)}
						>
							{customersTestimonials.map((item,index) => {
								return (
									<SwiperSlide key={index}>
										<div className={styles.testimonialTitle}>
											<p>{item.text}</p>
											<span>
												{item.star}
											</span>
										</div>
										<div className={styles.testimonial}>
											<img src={item.img} alt="" />
											<h3>{item.name} - <span>{item.category}</span></h3>
										</div>
									</SwiperSlide>
								)
							})}
						</Swiper>
					</div>
				</section>
			</main>
		)
}