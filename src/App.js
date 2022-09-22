import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Quotes from './Quotes';
import { myQuotes } from './Data';
import { useState } from 'react';

function App() {
  const[myState, setmyState] = useState(0)
  console.log("App Componet is called once")   
  let myList = myQuotes.map((elem, ind)=>{
    // console.log(elem)
    // console.log(ind)
    return(
      <Quotes key={ind} quoteheading={elem.quoteheading} quoteparagraph={elem.quoteparagraph} quotebutton={elem.quotebutton}/>
    )
  })
  // console.log(myState)

  function handlepClick(){
    console.log('p is clicked')
    setmyState((myState)=>myState+=1)
  }
  // console.log(myState)
  
  return (
   <>
    <h1 style={{color: 'red'}}>Karibu Phase 2</h1>
    <p onClick={handlepClick}>This should be interesting</p>
    <Button/>
    {myList}
   </>
    
  );
}

export default App;
