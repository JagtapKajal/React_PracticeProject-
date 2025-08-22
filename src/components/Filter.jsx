import React from 'react'

const Filter = () => {
    const product = [
        { id : 1, name: "Laptop", price: 50000 },
        {id :2, name: "Mobile",price:20000},
        {id :3, name: "Tablet", price: 30000},
    ]
         const filterList =  product.filter((list) => list.name 
=='Laptop') 
console.log(filterList)
  return (

    <div>
        {filterList.map((list) => <div key={list.id}>
        <h1>{list.price}</h1>
    </div>)}
    </div>
  )
}

export default Filter
