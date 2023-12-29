import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from "./singleProduct.module.scss"

export default function SingleProduct() {
	const { id } = useParams()

	const [post, setPost] = useState([])
	useEffect(() => {
		;(async () => {
			const response = await axios.get(`http://localhost:4200/AllWatches/${id}`)
			const result = response.data

			setPost(result)
		})()
	}, [])


	return (
		<main className={styles.main}>
			<section className={styles.postContainer}>
				<div className={styles.postImgBox}>
					<img src={post.img} alt='' />
				</div>
				<div className={styles.postItemBox}>
					<h3>{post.name}</h3>
					<h5>{post.productInfo}</h5>
					<p>
						Price: <span>{post.price}</span>
					</p>
					<p>Color: <span>{post.color}</span></p>
					<p>Material: <span>{post.material}</span></p>
					<button>ADD TO WISHLIST</button>
				</div>
			</section>
		</main>
	)
}
