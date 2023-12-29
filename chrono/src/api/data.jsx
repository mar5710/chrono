import axios from 'axios';

export const AllWatches = async () =>{
    const response = await axios.get("http://localhost:4200/AllWatches")
    const result = await response.data

    return result
}

export const getColorCategory = async () => {
	const response = await axios.get('http://localhost:4200/colorCategory')
	const result = await response.data

	return result
}

export const getMaterialCategory = async () => {
	const response = await axios.get('http://localhost:4200/materialCategory')
	const result = await response.data

	return result
}