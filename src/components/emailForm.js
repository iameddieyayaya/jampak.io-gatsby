import React, { useState } from 'react'
import Email from './styled/email'
import Button from './styled/button'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Success from './success'




const EmailForm = () => {
    
    const [email, setEmail] = useState('')
    const [success, setSucess] = useState(null)

    const handleSubmit = async (e) => {
      e.preventDefault();

      const result = await addToMailchimp(email)
      // returns {
      //   "result": "success",
      //   "msg": "Thank you for subscribing!"
      // }
      
      if(!result){
        console.log("ERROR", {result})
      } else {
        setSucess(result)
      }
    }

    if(success){
      return (
        <Success />
        )
    } else {
       return (
        <form onSubmit={(e) => handleSubmit(e)} >
          <Email 
            onChange={(e) => setEmail(e.target.value)}
            type='email' placeholder='Want to stay up to date?' required/>
          <br />
          <Button type='submit'>Subscribe</Button>
        </form> 
       )
    }
}

export default EmailForm;