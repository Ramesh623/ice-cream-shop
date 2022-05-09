import './Products.css';
import { popularProduct } from '../data';
import Product from './Product';

const Products = () => {
  return (
    <div className='products-container'>
        {popularProduct.map(item=>(
            <Product item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Products