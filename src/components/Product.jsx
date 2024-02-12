import PropTypes from 'prop-types'

const Product = ({ title, image, price, category, description }) => {
  // Method 2 - Short Circuit - setting default value for props with missing values. Will still raise prop validation error in the console

  const img = image && image.url   // if image exists, return image.url, else return falsey value
  
  return (
    <div className='card bg-secondary text-light col-6 col-sm-5 col-md-3 mx-3 shadow py-3'>
      <h4 className='card-title my-2'>{title}</h4>
      <img src={img || 'https://www.placehold.co/250'} alt={title} className='card-image img-fluid rounded my-2' style={{maxHeight: '250px'}} />
      <h6 className='my-2'>$ {price || 'Default Price'}</h6>
      <h5 className='my-2'>{category}</h5>
      <details title='description' className='my-2'>{description}</details>
    </div>
  )
}

// validate props to determine what type of data it is and if it is required.
Product.propTypes = {
  // shortcuts
  // ptar, ptsr, ptnr, ptar
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.any.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

// method 1 of setting default values for missing prop values from the fetched data
Product.defaultProps = {
  title: 'Default Title',
  // alternatives for this provided above
  // image: { url: 'https://www.placehold.co/250' },
  // price: 'Default Price',
  category: 'Default Category',
  description: 'Default Description',
}

export default Product