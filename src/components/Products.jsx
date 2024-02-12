import PropTypes from 'prop-types'
import Product from './Product'

const Products = ({products}) => {
  return (
    <div className='row justify-content-around g-5 my-5'>
      {products.map(item => <Product key={item.id} {...item} /> )}
    </div>
  )
}

Products.propTypes = { products : PropTypes.array.isRequired }

export default Products