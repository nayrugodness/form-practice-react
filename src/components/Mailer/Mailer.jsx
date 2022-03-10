import React from 'react';
import emailjs from '@emailjs/browser';

export const Mailer = ()=> {

    const sendEmail = (event) => {
        event.preventDefault();
    
        emailjs.sendForm('service_l0vz16h','template_gl5bh1o',event.target,'qzGGTcQHXQfmcgyYA')
        .then(response => console.log(response))
        .catch(error => console.log(error))

        alert('message sent successfully')
      }
    
      return (
        <div className='div-form'>
          <h1 className='title-form'>Send a message</h1>
          <form className='form-mail' onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name='user_name' />
            <hr />
    
            <label>Email</label>
            <input type="email" name='user_email' />
            <hr />
            <label>Message</label>
            <textarea name="user_message" id="" cols="30" rows="10"></textarea>
            <hr />
            <button>Send</button>
          </form>
        </div>
      )
}