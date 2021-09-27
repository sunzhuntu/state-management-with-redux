const productReducer = (state=[], action) => {
    switch (action.type) {
      case 'NEW_PRODUCT':
        return [...state, action.data]
      case 'TOGGLE_AVAILABILITY': {
        const id = action.data.id
        const productToChange = state.find(p => p.id === id)
        const changedProduct = {
          ...productToChange,
          availability: !productToChange.availability
        }
        return state.map(product => 
          product.id !== id ? product : changedProduct
        )
      }
      default:
        return state
    }
}

const generateId = () => Math.floor(Math.random() * 1000000)

export const createProduct = (title, category) => {
    return {
      type: 'NEW_PRODUCT',
        data: {
          title: title,
          category: category,
          availability: Math.random > 0.5,
          id: generateId()
        }
    }
}
  
export const toggleAvailabilityOf = (id) => {
    return {
      type: 'TOGGLE_AVAILABILITY',
      data: {id}
    }
}  


export default productReducer