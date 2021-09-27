import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAvailabilityOf } from '../reducers/productReducer'
import Product from './Product'

const Display = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state)

    return (
    <div>
        <h3> The List of Products</h3>
        <ul>
            {products.map(product =>
                <Product 
                    key={product.id} 
                    product={product}
                    eventHandler = {() => dispatch(toggleAvailabilityOf(product.id))}
                />
            )}
        </ul>
    </div>
    )
}

export default Display