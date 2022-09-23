import { useState } from "react";

function Quoteform({getUsersName}) {
    const[usersName,setusersName] = useState('')
    function handleNameInput(e){
        let name = e.target.value
        setusersName((usersName)=>name)
        getUsersName("Mercy")
    }
    console.log(usersName)
    // console.log(getUsersName)
  return (
    <>
      <form>
      <h1> User form</h1>
        <label>
          Name:
          <input onBlur={handleNameInput}  type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
export default Quoteform;
