import React, { useState } from "react";

function MyForm() {
    const [name, setName] = useState("");
    // console.log("current state: ", name);
    function handleSubmit(e) {
        e.preventDefault(); // prevent page reload when form is submitted
        console.log("Form submitted");
        console.log("current state: ", name);
    }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label htmlFor="">
          Enter Your Name:
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </label>
        <input type="submit" value="submit form" />
      </form>
    </div>
  );
}

export default MyForm;
