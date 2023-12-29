import styles from "./Product.module.scss"
import { Link } from "react-router-dom"
import SingleProduct from "../../pages/singleProduct/singleProduct"
import { useState } from "react"

export const Product = (item) =>{
	const [list,setList] = useState([])

	const addFav = (el) =>{
		setList(prev => [...prev,el])
	}

    return (
			<Link to={item.item.id} className={styles.products}>
				<div
					className={item.classVariant ? styles.productBox : styles.productList}
				>
					<div className={styles.imgBox}>
						<img
							src={item.item.img}
							alt={item.item.name}
							width={100}
							height={100}
						/>
					</div>
					<div className={styles.textBox}>
						<p>{item.item.name}</p>
						<span>${item.item.price}</span>
					</div>
					<button onClick={() =>{
						addFav(item)
						localStorage.setItem("favList",JSON.stringify(list))
					}}>
						{console.log(list)}
						<i className='fa-solid fa-heart'></i>
					</button>
				</div>
			</Link>
		)
}