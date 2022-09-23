import { useState } from "react";
function Newcomponent({ getUserData }) {
    const[name, setName] = useState('')
  console.log(getUserData);

  function handleEnterName(e){
    let myname = e.target.value
    setName((name)=>myname)
    // Call getUserData/prop function to access the callback function in the parent.7
    getUserData(name)
  }
  

  return (
    <>
      <h1>KAribu</h1>
      <label>
        Name:
        <input onBlur={handleEnterName} type="text" name="name" />
      </label>
    </>
  );
}

export default Newcomponent;
