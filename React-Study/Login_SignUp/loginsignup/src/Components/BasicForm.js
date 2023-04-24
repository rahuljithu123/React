import React, { useState } from 'react'
//login form
const BasicForm = () => {
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("")
    const[allEntry,setAllEntry]=useState([]);

    const submitForm=(e)=>{
        e.preventDefault();
        const newEntry={email:email,password:password};
        setAllEntry([...allEntry,newEntry]);
        console.log(allEntry)

    }
  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email"  autoComplete='off' value={email} 
          onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" value={password} 
          onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        {
            allEntry.map((curr)=>{
            return (<div className="showDataStyle">
                 <p>{curr.email}</p>
                 <p>{curr.password}</p>
                </div> )
            })
        }
      </div>
    </>
  );
}

export default BasicForm