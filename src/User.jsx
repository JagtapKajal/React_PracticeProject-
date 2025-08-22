import React from 'react'

const User = () => {

// Object creation/Calling 
 const User = {
  Name : 'Alice',
  Age : 21,
  Gender : 'Male'
}

const product = {
  pname : 'Biscut',
  price : 20
}

  return (
     <>
  <p>This is my Product</p>
  <div>
    <h2>pname = {product.pname}</h2>
    <h2>price = {product.price}</h2>
  </div>
  <div>
<h2>Name = {User.Name}</h2>
<h2>Age = {User.Age}</h2>
<h2>Gender = {User.Gender}</h2>
</div>
  </>
)

// Variable creation 
  const name = "John "
  const age = 20;
  return (
    <div>
      <h2>{name}</h2>
      <p>age = {age}</p>
      <h1>Hello React</h1>
      <h2>{2+2}</h2>
    </div>
  )
}

export default User
