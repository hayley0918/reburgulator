import React from 'react';

// props = {
//    toppings: [],
//    onRemove: ()=>{}
// }

// drawing the div with the elements in array
export default function Burger(props){
  return props.toppings.map((topping, idx) => (
    <div 
      key={idx} 
      onClick={()=>props.onRemove(idx)}
      className={topping}
    >
    </div>
  ))
}