import React, { useState } from 'react';

function MyComponent() {
  const [car,setCar]=useState({year:2004,
                              make:"Honda",
                              model:"civic"
  })
  function handleYear(event){
      setCar(c=>({...c,year:event.target.value}))
  }
  function handleModel(event){
      setCar(c=>({...c,model:event.target.value}))
  }
  function handleMake(event){
      setCar(c=>({...c,make:event.target.value}))
  }
  return(
    <div>
      Your fav car is {car.model} & made in {car.year} by {car.make}
      <br />
      <input type="text" value={car.make} onChange={handleMake}/>
      <input type="text" value={car.model} onChange={handleModel}/>
      <input type="number" value={car.year} onChange={handleYear}/>
    </div>
  )

}

export default MyComponent;
