import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App (){
  const nayoks = ['Anwar','Jasim','Jafor','Alomgir','Salman','Bappi','Shuvo']
const products = [
  {name: 'Photoshop', price:'$90'},
  {name :'illustrator', price:'$60.99'},
  {name:'PDF', price:'40.99'}
]
const nayokNames =nayoks.map(nayok => nayok)
console.log(nayokNames)
 return (
    <div className="App">
      <header className="App-header">
       <p>I am a react person</p>
       <Counter></Counter>
       <ul>
         {
           nayoks.map(nayok => <li>{nayok}</li>)
         }
         {
           products.map(product => <li>{product.name}</li>)
         }
         </ul>
         {
           products.map(product =><Product product ={product}></Product>)
         }
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick ={handleIncrease}>Increase</button>
    </div>
  )
}


function Product(props){
  const productStyle = {
    border : '1px green solid',
    borderRadius : '5px',
    backgroundColor :'lightgray',
    height :'200px',
    width :'200px',
    float :'left'

  }
  const {name, price}=props.product;
  console.log(name, price)
  return (
    <div style={productStyle}>
    <h3>{name} </h3>
    <h5>{price}</h5>
    <button>Buy now</button>
    </div>
  )
}



 function Person(props){
   return(
     <div>
       <h3>My name : {props.name}</h3>
       <p>My profession {props.job}: </p>
     </div>
   )
 }

export default App;
