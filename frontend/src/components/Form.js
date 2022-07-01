import React, {useState,setState, useEffect} from 'react';
import './style.css'
import Display from "./Display";
function RegistrationForm() {
    
    const [name, setName] = useState(null);
    const [age, setAge] = useState(null);
    const [email, setEmail] = useState(null);
    const [mobile,setMobile] = useState(null);
    const [merchants, setMerchants] = useState([]);
    const [display, setDisplay] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    fetch('http://localhost:3001', {mode: 'no-cors'})
      .then(response => {
        return response.text();
      })
      .then(data => {
        setMerchants(data);
      });
  }

  
  function createUser() {
    

    fetch('http://localhost:3001/merchants', {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, age, email, mobile}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getUser();
      });

      setDisplay(true);
  }

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "name"){
            setName(value);
        }
        if(id === "age"){
            setAge(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "mobile"){
            setMobile(value);
        }
        
    }

    console.log(merchants);
    console.log(name);
    console.log(age);
    console.log(email);
    console.log(mobile);

    // const handleSubmit  = () => {
    //     console.log(nm,age,email,mobile);
    // }

//     return(
//         <div className="form">
            
//             {!setDisplay ? (
    //     <div className="form-body">
    //     <div className="username">
    //         <label className="form__label" for="firstName">Name </label>
    //         <input className="form__input" type="text" value={name} onChange = {(e) => handleInputChange(e)} id="name" placeholder="Name"/>
    //     </div>
    //     <div className="age">
    //         <label className="form__label" for="lastName">Age</label>
    //         <input  type="number" name="" id="lastName" value={age}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="Age"/>
    //     </div>
    //     <div className="email">
    //         <label className="form__label" for="email">Email </label>
    //         <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
    //     </div>
    //     <div className="mobile">
    //         <label className="form__label" for="mobile">Mobile No. </label>
    //         <input className="form__input" type="text"  id="password" value={mobile} onChange = {(e) => handleInputChange(e)} placeholder="Mobile No."/>
    //     </div>
    // </div>
    // <div class="footer">
    //     <button onClick={createMerchant} type="submit" class="btn">Register</button>
    // </div>
       
//         ) : (
//   ) : (
//     <display setDisplay={setDisplay} />
//   )}
//         </div>
       
//     )       

return (
    <div className="forml">
      {!display ? (
        <div className="form">
                <div className="form-body">
                <div className="username">
                    <label className="form__label" for="name">Name </label>
                    <input className="form__input" type="text" value={name} onChange = {(e) => handleInputChange(e)} id="name" placeholder="Name"/>
                </div>
                <div className="age">
                    <label className="form__label" for="age">Age</label>
                    <input  type="number" name="" id="age" value={age}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="Age"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="mobile">
                    <label className="form__label" for="mobile">Mobile No. </label>
                    <input className="form__input" type="text"  id="mobile" value={mobile} onChange = {(e) => handleInputChange(e)} placeholder="Mobile No."/>
                </div>
            </div>
            <div class="footer">
                <button onClick={createUser} type="submit" class="btn">Register</button>
            </div>
            </div>
      ) : (
        <Display setDisplay={setDisplay} />
      )}
    </div>
  );

}

export default RegistrationForm