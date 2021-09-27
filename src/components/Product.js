const Product = ({product, eventHandler}) => {
    return (
        <li key={product.id}>
            {product.title} -- {product.category} -- 
            <button onClick={eventHandler}>
                {product.availability? 'available' :  'sold-out'}
            </button>
        </li>
    )
}

export default Product