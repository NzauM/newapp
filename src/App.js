import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Quotes from './Quotes';
import { myQuotes } from './Data';

function App() {
  let myList = myQuotes.map((elem, ind)=>{
    console.log(elem)
    console.log(ind)
    return(
      <Quotes key={ind} quoteheading={elem.quoteheading} quoteparagraph={elem.quoteparagraph} quotebutton={elem.quotebutton}/>
    )
  })
  
  return (
   <>
    <h1 style={{color: 'red'}}>Karibu Phase 2</h1>
    <p>This should be interesting</p>
    <Button/>
    {myList}
   </>
    
  );
}

export default App;
