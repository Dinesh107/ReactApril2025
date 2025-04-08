import React, { useState } from "react";

function MyForm2() {
    //  const [name, setName] = useState("");
    //  const [age, setAge] = useState("");
    //  const [email, setEmail] = useState("");
    const [inputs, setInputs] = useState({email: "@gmail.com", age: 10, about: "I am a student" });
        // console.log("current state: ", name);
        function handleSubmit(e) {
            e.preventDefault(); // prevent page reload when form is submitted
            console.log("Form submitted");
            //console.log("current state: ", name, age, email);
            console.log("current state: ", inputs);
        }
        function handleChange(e) {
            //(e) => setInputs((preState) => { return {...preState, name: e.target.value}})
            const name = e.target.name
            const value = e.target.value
            setInputs((preState) => { return { ...preState, [name] : value}});
        }
  return (
    <div>
         <form onSubmit={handleSubmit} >
        <label htmlFor="">
          Enter Your Name: 
         <input type="text" name="name" onChange={handleChange} />
        </label>
        <br /><br />
        <label htmlFor="">
          Enter Your Age:
          <input type="text" name="age" onChange={handleChange} value={inputs.age}/>
        </label>
        <br /><br />
        <label htmlFor="">
          Enter Your Email:
          <input type="text" name="email" onChange={handleChange} value={inputs.email}/>
        </label>
        <br /><br />
        <label htmlFor="">
          Enter Your Country:
         <select name="country" onChange={handleChange} value={inputs.country} >
          <option value="">Select</option>
          <option value="usa">USA</option>
          <option value="india" >India</option>
          <option value="china">China</option>
          <option value="japan">Japan</option>
          <option value="australia">Australia</option>
         </select>
        </label>
        <br /><br />
        <label htmlFor="">
          Enter About you:
          <textarea name="about" value={inputs.about} onChange={handleChange} ></textarea>
        </label>
        <br /><br />
        <input type="submit" value="submit form" />
      </form>
    </div>
  )
}

export default MyForm2