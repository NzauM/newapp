import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Quotes from './Quotes';
import { myQuotes } from './Data';
import { useState } from 'react';
import Quoteform from './Quoteform';
import Newcomponent from './Newcomponent';
import Newquote from './Newquote';

function App() {
  const[username, setuserName] = useState('')
  const[newname, setnewname] = useState('')
  const[myState, setmyState] = useState(0)
  const[myKwotes, setKwotes] = useState(myQuotes)
  console.log("App Componet is called once")   
  console.log(myKwotes)
  let myList = myKwotes.map((elem, ind)=>{
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

  function handleUserNameChange(data){
    setuserName((username) => data)
  }
  console.log(username)

  // Defining the callback function
  function handleQuoteData(data){
    setnewname((newname)=>data)
  }

  function handleAddQuote(data){
    console.log(data)
    myKwotes.push(data)
    setKwotes((myKwotes)=>myKwotes)
    // console.log(myKwotes)
    // setKwotes((myKwotes)=>[...myKwotes, data])
    
    console.log("Added quotes")
  }

  // 
  
  return (
   <>
    <h1> This is another form</h1>
    <h2 style={{color: 'blue'}}>karibu, {newname}</h2>
    {/* Call the child and pass function as prop */}
    <Newcomponent getUserData={handleQuoteData}/>

    <h1>Enter a new quote</h1>
    <Newquote getNewQuote={handleAddQuote}/>
    
    <h1 style={{color: 'red'}}>Karibu Phase 2</h1>
    <p onClick={handlepClick}>This should be interesting</p>
    <Button/>
    <Quoteform getUsersName = {handleUserNameChange}/>
    {myList}
   </>
    
  );
}

export default App;
