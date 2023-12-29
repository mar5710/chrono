import styles from "./shope.module.scss"
import { Link } from "react-router-dom"
import React, { useEffect, useRef, useState,useCallback } from "react"
import {AllWatches,getColorCategory,getMaterialCategory} from "../../api/data"
import { Product } from "../../components/Product/Product"

export default function Shope(){
	const [listBox, setListBox] = React.useState('setka')
	const [products, setProducts] = React.useState([])

	const [colorFilter, setColorFilter] = React.useState([])
	const [materialFilter, setMaterialFilter] = React.useState([])

	const [minPrice, setMinPrice] = React.useState(0)
	const [maxPrice, setMaxPrice] = React.useState(0)

	const [selectedColors,setSelectedColors] = useState([])
	const [material,setMaterial] = useState("")

	const [filteredProducts, setFilteredProducts] = useState([])

	let productsCount = useRef(null)

	useEffect(() => {
		productsCount.current = filteredProducts.length

	}, [colorFilter, minPrice, maxPrice])

	React.useEffect(() => {
		AllWatches().then(data => {
			setProducts(data)
			setFilteredProducts(data)
		})

		getColorCategory().then(data => setColorFilter(data))

		getMaterialCategory().then(data => setMaterialFilter(data))
	}, [])

  const handleFilterChange = async () => {
		let filtered = products
		if (material) {
			filtered = filtered.filter(product => product.material === material)
		}

		if (selectedColors.length > 0) {
			filtered = filtered.filter(product =>
				selectedColors.includes(product.color)
			)
		}

		if (minPrice || maxPrice) {
      filtered = filtered.filter(product => {
        const productPrice = product.price;
        const min = minPrice ? parseInt(minPrice, 10) : Number.MIN_SAFE_INTEGER;
        const max = maxPrice ? parseInt(maxPrice, 10) : Number.MAX_SAFE_INTEGER;
        return productPrice >= min && productPrice <= max;
      })
	}

		 setFilteredProducts(filtered)
	}

	

	const handleColorChange = color => {
		const updatedColors = [...selectedColors]

		if (updatedColors.includes(color)) {
			updatedColors.splice(updatedColors.indexOf(color), 1)
		} else {
			updatedColors.push(color)
		}

		setSelectedColors(updatedColors)
	}


	const [filterActive, setFilterActive] = React.useState(false)

	const filterActiveToggle = () => {
		setFilterActive(!filterActive)
	}
	



	return (
		<main className={styles.shopMain}>
			<section className={styles.collectionContainer}>
				<div className={styles.filterBox}>
					<div>
						<p>Price</p>
						<div className={styles.inputsBox}>
							$
							<input
								type='number'
								onChange={e => setMinPrice(e.target.value)}
								placeholder={'0'}
							/>
							<input
								type='number'
								onChange={e => setMaxPrice(e.target.value)}
								placeholder={'50'}
							/>
						</div>
					</div>
					<div>
						<p>Color</p>
						{colorFilter.map((item, index) => {
							return (
								<div key={index} className={styles.colorsBox}>
									<label htmlFor={index}>{item}</label>
									<input
										type='checkbox'
										onChange={() => handleColorChange(item)}
										checked={selectedColors.includes(item)}
										id={index}
										value={item}
									/>
								</div>
							)
						})}
					</div>
					<div>
						<p>Material</p>
						{materialFilter.map((item, index) => {
							return (
								<div key={index} className={styles.materialBox}>
									<button
										onClick={e => setMaterial(e.target.value)}
										value={item}
									>
										{item}
									</button>
								</div>
							)
						})}
					</div>
					<button onClick={handleFilterChange}>Filter</button>
					<button
						onClick={() => {
							setFilteredProducts(products)
							setMaterial('')
							setSelectedColors([])
							setMaxPrice(0)
							setMinPrice(0)
						}}
					>
						Remove Filter
					</button>
				</div>
				<div
					className={`${styles.filterBoxMobile} ${
						filterActive ? styles.active : ''
					}`}
				>
					<div
						onClick={filterActiveToggle}
						className={`${styles.filterCloseBtn}`}
					>
						<i className='fa-solid fa-xmark'></i>
					</div>
					<div>
						<p>Price</p>
						<div className={styles.inputsBoxMobile}>
							$
							<input
								type='number'
								onChange={e => setMinPrice(e.target.value)}
								placeholder={'0'}
							/>
							<input
								type='number'
								onChange={e => setMaxPrice(e.target.value)}
								placeholder={'50'}
							/>
						</div>
					</div>
					<div>
						<p>Color</p>
						{colorFilter.map((item, index) => {
							return (
								<div key={index} className={styles.colorsBoxMobile}>
									<label htmlFor={index}>{item}</label>
									<input
										type='checkbox'
										onChange={() => handleColorChange(item)}
										checked={selectedColors.includes(item)}
										id={index}
										value={item}
									/>
								</div>
							)
						})}
					</div>
					<div>
						<p>Material</p>
						{materialFilter.map((item, index) => {
							return (
								<div key={index} className={styles.materialBoxMobile}>
									<button
										onClick={e => setMaterial(e.target.value)}
										value={item}
									>
										{item}
									</button>
								</div>
							)
						})}
					</div>
					<div className={styles.buttonsBoxMobile}>
						<button onClick={() =>{
							handleFilterChange()
							setFilterActive(false)
						}}>
							Filter
						</button>
						<button
							onClick={() => {
								setFilteredProducts(products)
								setMaterial('')
								setSelectedColors([])
								setMaxPrice(0)
								setMinPrice(0)
						
							}}
						>
							Remove Filter
						</button>
					</div>
				</div>
				<div className={styles.collectionContent}>
					<div onClick={filterActiveToggle} className={styles.filterAndSort}>
						<i className='fa-solid fa-list'></i>
						Filter and Sort
					</div>
					<div className={styles.gridBox}>
						<div className={styles.listBox}>
							<button
								onClick={() => setListBox('list')}
								className={`${listBox == 'list' ? styles.activeButton : ''}`}
							>
								<i className='fa-solid fa-list'></i>
							</button>
							<button
								onClick={() => setListBox('setka')}
								className={`${listBox == 'setka' ? styles.activeButton : ''}`}
							>
								<i className='fa-solid fa-table-cells'></i>
							</button>
						</div>
						<div className={styles.productsCount}>
							<p>{filteredProducts.length} products</p>
						</div>
					</div>
					<div
						className={`${
							listBox == 'setka' ? styles.collectionBox : styles.collectionList
						}`}
					>
						{filteredProducts.map(item => {
							return (
								<Product
									classVariant={listBox == 'setka' ? true : false}
									key={item.id}
									item={item}
								/>
							)
						})}
					</div>
				</div>
			</section>
		</main>
	)
}