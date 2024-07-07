import React from 'react'
import phone from './Assests/phone.png'
import mail from './Assests/mail .png'


const Contact = () => {
  return (
    <div className='contact'>
      <h2>contact details</h2>
      <div className='contactparent'>
        <div className='contactchild1'>
          <div className='iconback'><img src={phone} className='icons'/></div>
          <div className='details'>6304188699</div>
        </div>
        <div className='contactchild2'>
          <div className='iconback1'><img src={mail} className='icons'/></div>
          <div className='details'>Devimamidala385@gmail.com</div>
        </div>
        
      </div>

        
      
    </div>
  )
}

export default Contact
