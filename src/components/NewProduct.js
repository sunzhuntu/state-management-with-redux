import React from 'react'
import { createProduct } from '../reducers/productReducer'
import { useDispatch } from 'react-redux'

const NewProduct = () => {
    const dispatch = useDispatch()

    const addProduct = (event) => {
        event.preventDefault()
        const title = event.target.title.value
        const category = event.target.category.value
        event.target.title.value = ''
        event.target.category.value = ''
        dispatch(createProduct(title, category))
    }

    return (
        <div>
            <h3> Add New Products</h3>
            <form onSubmit={addProduct}>
                <input name='title' />
                <input name='category'/>
                <button type='submit'> add </button>
            </form>
        </div>
    )
}

export default NewProduct