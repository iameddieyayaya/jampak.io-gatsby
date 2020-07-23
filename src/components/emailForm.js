import React, { useState } from 'react'
import Email from './styled/email'
import Button from './styled/button'
import addToMailchimp from 'gatsby-plugin-mailchimp'




const EmailForm = () => {
    
    const [email, setEmail] = useState('')
    // const [listFields, setListFields] = useState('')

    const handleSubmit = async (e) => {
      e.preventDefault();

      const result = await addToMailchimp(email)
      console.log({result})
      // I recommend setting `result` to React state
      // but you can do whatever you want
      // console.log(result) 
      // returns {
      //   "result": "success",
      //   "msg": "Thank you for subscribing!"
      // }
    }


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

export default EmailForm;