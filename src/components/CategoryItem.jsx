import './CategoryItem.css';

const CategoryItem = ({item}) => {
    return (

        <div className='cate-item-container'>
            <img className='image' src={item.img} alt='category Item'/>
            <div className='info'>
              <h1 className='title'>{item.title}</h1>
              <button className='button'>SHOP NOW</button>

            </div>
        </div>
  )
}

export default CategoryItem;