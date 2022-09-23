import { useState } from "react";

function Newquote({getNewQuote}) {
    const[quoteheading, setquoteheading] = useState('')    
    const[quoteparagraph, setquoteparagraph] = useState('')    
    const[quotebutton, setquotebutton] = useState('')    

    function handlequoteheading(e){
        let heading = e.target.value
        setquoteheading((quoteheading) => heading)
    }
    function handlequoteparagraph(e){
        let paragraph = e.target.value
        setquoteparagraph((quoteparagraph) => paragraph)
    }
    function handlequotebutton(e){
        let price = e.target.value
        setquotebutton((quotebutton) => price)
    }

    function handleSubmit(e){
        e.preventDefault()
        let new_quote = {quoteheading: quoteheading, quoteparagraph: quoteparagraph, quotebutton: quotebutton}
        console.log(new_quote)
        getNewQuote(new_quote)
    }

    


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Quote heading:
          <input onBlur={handlequoteheading} type="text" name="quoteheading" />
        </label>
        <label>
          Quote Itself:
          <input onBlur={handlequoteparagraph} type="text" name="quoteparagraph" />
        </label>
        <label>
          Quote Price:
          <input onBlur={handlequotebutton} type="text" name="quotebutton" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
export default Newquote;
