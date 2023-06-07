import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [count,setCount] = useState(0);
  const [text,setText] = useState([]);
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("hello world");
    console.log(e);
    let amount = parseInt(count);
    if(count<1)
    amount=1;
    if(count>=data.length)
    amount=data.length-1;
    setText(data.slice(0,amount));
  }
  return (
  <section className='section-center'>
    <h3>tired of boring lorem ipsum</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor="amount">
        paragraphs:
      </label>
      <input type="number" name="amount" id="amount" value={count} onChange={(e)=>{setCount(e.target.value)}}/>
      <button type="submit" className='btn'>Submit</button>
    </form>
    <article className="lorem-text">
      {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, beatae?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis excepturi ad repellat!</p> */}
      {text.map((item,index)=>{
        return <p key={index}>{item}</p>
      })}
    </article>
  </section>
    )
}

export default App;
