import { useState } from "react"

function Quotes({quoteheading="This quote does not have an heading", quoteparagraph="So we decided to give it that lame one", quotebutton="Buy an headingless quote?"}){
    // const[state, stateSetter] = useState(initialvalue)
    const[username, setUsername] = useState("")
    const[hovered, setHovered] =  useState(false)
    // const[varname, fnChangevarName] = useState('what varname will initially be')

    // fnChangevarName("new value of varname")
    // console.log(varname)
    // fnChangevarName((varname)=>'new value of varname')

    // console.log("Quotes component rendered")

    
    function handlePriceClick(){
        alert(`${quoteheading} has been added to your cart`)
    }
    console.log(hovered)

    function changeColor(){
        // console.log("After hover")
        setHovered((hovered)=>!hovered)
    }

    // console.log(hovered)


    function handleSubmit(e){
        let user_input = e.target.value
        // console.log(user_input)
    }

    return(
        <>
            <h1 className={hovered?'App-link': 'catherine'} onMouseEnter={changeColor}>{quoteheading}</h1>
            <p>{quoteparagraph}</p>
            <button onClick={handlePriceClick}>{quotebutton}</button>
            <label>Write here</label>
            <input onBlur={handleSubmit} type='text' name="username"></input>

        </>
    )
}

export default Quotes