import React from 'react';
import './Product.css'

const Product = (props) => {
	console.log(props.product)
	const {img, name, seller, ratings, quantity, price}= props.product;
	return (
		<div>
			<div className='product'>
			<img src={img} alt="" />
			<h5>{name}</h5>
			<h6>Price: {price}$</h6>
			<p>Manufacturer: {seller}</p>
			<p>Rating: {ratings} stars</p>
		</div>
		<button className='btn-cart'>
			Add to cart
		</button>
		</div>
		
	);
};

export default Product;