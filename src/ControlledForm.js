import {React, useRef, useState} from 'react'

export default function ControlledForm() {

    const [userData, setUserData] = useState({
        firstName : '',
        lastName: '',
        email: '',
        profession : '',
        gender: 'male'
    })

    const [submitted, setSubmitted] = useState(false)

    const [errors, setErrors] = useState({
        firstName : '',
        lastName: '',
        email: '',
        profession : '',
    })

    const firstNameRef = useRef(null)

    const handleChange = (evt) => {
        // console.log(evt.target.name , evt.target.value);
        setUserData({
            ...userData,
            [evt.target.name] : evt.target.value
        })

        setErrors({
            ...errors,
            [evt.target.name] : ''
        })

        // console.log(userData);
    }

    const handleSubmit = (evt) =>{
        evt.preventDefault()
        const {firstName, lastName, email, profession} = userData
        console.log('FirstName ref',firstNameRef.current.value);
        firstNameRef.current.focus()
        const userErrors = {
            firstName: '',
            lastName: '',
            email: '',
            profession: ''
        }

        let isError = false

        if (firstName === '') {
            isError = true
            userErrors.firstName = 'First Name is Required'
          
        }

        if (lastName === '') {
            isError = true
            userErrors.lastName = 'Last Name is Required'
          
        }

        if (email === '') {
            isError = true
            userErrors.email = 'Email is Required'
           
        }  

        if (profession === '') {
            isError = true
            userErrors.profession = 'Profession is Required'
           
        }  
        setErrors(userErrors) 
       if (isError) return
        
       setSubmitted(true)
       setUserData({
        firstName : '',
        lastName: '',
        email: '',
        profession : '',
        gender: 'male'
       })
    }
   

    const {firstName, lastName , email, profession, gender} = userData;
  return (
    <div>
        {submitted && <h3>Form Is Submittd Successfully</h3>}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='firstName'>First Name:</label>
                <input 
                type='text' 
                name="firstName" 
                id='firstName' 
                value={firstName}
                ref={firstNameRef}
                onChange={handleChange} />
                <p style={{color: 'red'}}>{errors.firstName}</p>
            </div>
            <br/>
            <div>
                <label htmlFor='lastName'>Last Name:</label>
                <input 
                type='text'
                name="lastName" 
                id='lastName' 
                value={lastName}
                onChange={handleChange} />
                <p style={{color: 'red'}}>{errors.lastName}</p>
            </div>
            <br/>
            <div>
                <label htmlFor='email'>Email:</label>
                <input 
                type='text'
                name="email" 
                id='email' 
                value={email}
                onChange={handleChange} />
                <p style={{color: 'red'}}>{errors.email}</p>
            </div>
            <br/>
            <div>
                <label htmlFor='gender'>Gender:</label>
                <input 
                type='radio'
                name='gender' 
                checked= {gender === 'male'}
                value='male' 
                onChange={handleChange}/>Male
                <input 
                type='radio'
                name='gender' 
                checked= {gender === 'female'}
                value='female' 
                onChange={handleChange}/>Female
                
            </div>
            <div>
                <label htmlFor='profession'>Profession:</label>
                <select 
                id='profession'
                name='profession'
                value={profession}
                onChange={handleChange}>
                    <option value='' disabled>Select Option</option>
                    <option value='webDevloper'>Web Devloper</option>
                    <option value='softDevloper'>Software Devloper</option>
                    <option value='designer'>Designer</option>
                </select>
                <p style={{color: 'red'}}>{errors.profession}</p>
            </div>
            <br/>
            <input type='submit' value='submit' />
        </form>
        
    </div>
  )
}
