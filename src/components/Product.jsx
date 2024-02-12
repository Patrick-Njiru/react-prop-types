import PropTypes from 'prop-types'

const Product = ({ title, image, price, category, description }) => {
  // Method 2 of setting default value for props with missing values. Will still raise prop validation error in the console
  // const desc = description || title
  
  return (
    <div className='card bg-secondary text-light col-sm-4 col-md-3 mx-3 shadow py-3'>
      <h4 className='card-title my-2'>{title}</h4>
      <img src={image.url} alt={title} className='card-image img-fluid rounded my-2' />
      <h6 className='my-2'>$ {price}</h6>
      <h5 className='my-2'>{category}</h5>
      <p className='my-2'>{description}</p>
    </div>
  )
}

// validate props to determine what type of data it is and if it is required.
Product.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.any.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

// method 1 of setting default values for missing prop values from the fetched data
Product.defaultProps = {
  title: 'Default Title',
  image: { url: 'https://www.placehold.co/200' },
  price: 'Default Price',
  category: 'Default Category',
  description: 'Default Description',
}

export default Product