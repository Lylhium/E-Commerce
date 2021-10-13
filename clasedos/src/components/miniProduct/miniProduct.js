import React from 'react';


const miniProduct = ({item, count}) => {
  const {title, price} = item

  return (
    <div >
      <p>{title} | {count}u. x ${price}</p>      
    </div>
  )
}

export default miniProduct
