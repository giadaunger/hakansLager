import React from 'react';

function Newproducts() {
   const NewItems = [
    {
        id: '1',
        name: 'Chocolate Strawberry Cheerios',
        price: 120,
        image: '/images/img1.png',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe delectus unde nostrum labore error tempore adipisci dolorem atque iste incidunt.'
    },
    {
        id: '2',
        name: 'Minecraft Creeper Crunch',
        price: 99,
        image: '/images/img2.jpg',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe delectus unde nostrum labore error tempore adipisci dolorem atque iste incidunt.'
    },
    {
        id: '3',
        name: 'Strawberry Krispies',
        price: 119,
        image: '/images/img3.jpg',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe delectus unde nostrum labore error tempore adipisci dolorem atque iste incidunt.'
    },
    {
        id: '4',
        name: 'Kellogs Mashups',
        price: 115,
        image: '/images/img4.jpg',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe delectus unde nostrum labore error tempore adipisci dolorem atque iste incidunt.'
    },
    {
        id: '5',
        name: 'Oatmeal Creme Pies',
        price: 135,
        image: '/images/img5.jpg',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe delectus unde nostrum labore error tempore adipisci dolorem atque iste incidunt.'
    },
    {
        id: '6',
        name: 'Oreo´s',
        price: 99,
        image: '/images/img6.jpg',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe delectus unde nostrum labore error tempore adipisci dolorem atque iste incidunt.'
    },
    
    
   ]
   const items = NewItems.map((productItems, index) => 
        <div className='product-card' key={index}>
            <li>
                <img src={productItems.image} alt='pic' className='product-pic'/>
                <div>
                    <h1 className='product-h1'>{productItems.name}</h1>
                    <p className='product-p'>{productItems.content}</p>
                    <h3 className='product-h3'>{productItems.price} :-</h3>
                </div>
                <button className='product-btn'>Köp</button>
            </li>
        </div>)
   return(
      <div className='wrapper'>{items}</div>
   )
}
export default Newproducts;