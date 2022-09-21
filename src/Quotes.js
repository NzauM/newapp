function Quotes({quoteheading="This quote does not have an heading", quoteparagraph="So we decided to give it that lame one", quotebutton="Buy an headingless quote?"}){
    // console.log(props)
    return(
        <>
            <h1>{quoteheading}</h1>
            <p>{quoteparagraph}</p>
            <button>{quotebutton}</button>
        </>
    )
}

export default Quotes