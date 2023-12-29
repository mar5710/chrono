import styles from "./home.module.scss"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Link } from "react-router-dom";
import { useRef } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";


export default function Home(){

	const {t} = useTranslation()

    const prevRef = useRef(null)
    const nextRef = useRef(null)


    const heroSwiper = [
        {
            img: "/images/slider1-bg.webp",
            info: "PREMIUM MODEL",
            text: "Stylish external wrist watch"
        },
        {
            img: "/images/slider2-bg.webp",
            info: "FALL IN LOVE",
            text: "Redefining the meaning of time"
        },
        {
            img: "/images/slider3-bg.webp",
            info: "SECRET NEW MODELS",
            text: "Priceless and timeless designs"
        },
    ]

    const gridBanner = [
        {
            img: "/images/img1.webp",
            info: "Romance in the air",
            text: "WEAR YOUR STYLE WITH VERVE & ATTITUDE"
        },
        {
            img: "/images/img2.webp",
            info: "Analog & Digital",
            text: "SMART WATCHES LATEST FASHION STATEMENT"
        }
    ]

    const swiperElements = [
        {
            img:"/images/BlackStainlessSteelAutomatic.png",
            text1:"Black Dial",
            text2:"DETAILS"
        },
        {
            img:"/images/BlackAnalogNumeral.png",
            text1:"Stylish Dial",
            text2:"DETAILS"
        },
        {
            img:"/images/BlackAnalogRoman.png",
            text1:"Scientific",
            text2:"DETAILS"
        },
        {
            img:"/images/GoldenAnalogNumeral.jpg",
            text1:"Gold Case",
            text2:"DETAILS"
        },
        {
            img:"/images/PlatinumNumeralSemiAutomatic.jpg",
            text1:"Silver Case",
            text2:"DETAILS"
        },
        {
            img:"/images/Black3in1AnalogStainlessSteel.jpg",
            text1:"Classy Numeral",
            text2:"DETAILS"
        },
    ]

    

    return (
			<div className={styles.home}>
				<main className={styles.main}>
					<section className={styles.containerSlider}>
						<Swiper
							
							modules={[Navigation, Scrollbar, A11y]}
							slidesPerView={1}
							navigation={{
								prevEl: prevRef.current,
								nextEl: nextRef.current,
							}}
							onSwiper={swiper => {
								setTimeout(() => {
									swiper.params.navigation.prevEl = prevRef.current
									swiper.params.navigation.nextEl = nextRef.current
									swiper.navigation.destroy()
									swiper.navigation.init()
									swiper.navigation.update()
								})
							}}
							scrollbar={{ draggable: true }}
						>
							<div className={styles.slider}>
								{heroSwiper.map((item, index) => {
									return (
										<SwiperSlide key={index}>
											<div
												className={styles.contentSlider}
												style={{ backgroundImage: `url("${item.img}")` }}
											>
												<p>{t(item.info)}</p>
												<h2>{item.text}</h2>
												<span className={styles.span}>
													<Link to='/'>{t('EXPLORE')}</Link>
												</span>
											</div>
										</SwiperSlide>
									)
								})}
							</div>
						</Swiper>
						<div className={styles.heroControlLeft} ref={prevRef}>
							<button>
								<i className='fa-solid fa-chevron-left'></i>
							</button>
						</div>
						<div className={styles.heroControlRight} ref={nextRef}>
							<button>
								<i className='fa-solid fa-chevron-right'></i>
							</button>
						</div>
					</section>
					<section className={styles.gridBannerContainer}>
						<div className={styles.gridBanner}>
							{gridBanner.map((item, index) => {
								return (
									<div
										className={styles.gridBannerContent}
										ke='true'
										key={index}
									>
										<img src={item.img} alt='' />
										<div className={styles.gridContent}>
											<h2>{item.info}</h2>
											<p>{item.text}</p>
											<span className={styles.span}>
												<Link to='/shope'>EXPLORE</Link>
											</span>
										</div>
									</div>
								)
							})}
						</div>
					</section>
					<section className={styles.bannerSection}>
						<div className={styles.bannerContent}>
							<h3>ROMAN OR NUMERAL?</h3>
							<h2>
								The Watches We Sell Are Original And Vendor Certified For A
								Peerless Performance!
							</h2>
							<p>
								uis leo. Sed fringilla mauris sit amet nibh. Donec sodales
								sagittis magna. Sed consequat, leo eget bibendum sodales, uis
								leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
								magna. Sed consequat, leo eget. Donec sodales sagittis magna.
								Sed consequat, leo eget bibendum sodales, augue velit cursus
								nunc.uis leo. Sed fringilla mauris sit amet nibh. Donec sodales
								sagittis magna. Sed consequat, leo eget
							</p>
							<span className={styles.span}>
								<Link to='/shope'>DETAILS</Link>
							</span>
						</div>
					</section>
					<section className={styles.supportContainer}>
						<div className={styles.supportTitle}>
							<p>LATEST WATCHES YOU CAN'T RESIST!</p>
							<h2>Universal Timekeepers of the world</h2>
						</div>
						<div className={styles.supportWrapper}>
							<Swiper
								spaceBetween={50}
								slidesPerView={4}
								className={styles.swiperCont}
                                breakpoints={{
                                    1200:{
                                        slidesPerView:4,
                                        spaceBetween:30
                                    },
                                    720:{
                                        slidesPerView:3
                                    },
                                    480:{
                                        slidesPerView:2
                                    },
                                    300:{
                                        slidesPerView:1
                                    }
                                }}
							>
								{swiperElements.map((item, index) => {
									return (
										<SwiperSlide key={index}>
											<div className={styles.swiperBox}>
												<div className={styles.wrapperImg}>
													<img
														width={100}
														height={100}
														src={item.img}
														alt={item.text1}
													/>
												</div>
												<div className={styles.wrapperTitle}>
													<h3>
														<Link to='/shope'>{t(item.text1)}</Link>
													</h3>
													<p>
														<Link to='/shope'>{item.text2}</Link>
													</p>
												</div>
											</div>
										</SwiperSlide>
									)
								})}
							</Swiper>
						</div>
					</section>
					<section className={styles.subscribeContainer}>
						<p>SUBSCRIBE TO THE MAILING LIST</p>
						<h3>Newsletter</h3>
						<dir className={styles.submitBox}>
							<input type='email' placeholder='Email Address' />
							<span className={styles.span}>
								SUBMIT<i className='fa-solid fa-paper-plane'></i>
							</span>
						</dir>
					</section>
				</main>
			</div>
		)
}