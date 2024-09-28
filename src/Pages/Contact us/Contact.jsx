import React from 'react'
import './Contact.css'
const ContactUs = () => {
  return (
    <div className='contact'>
        <h1>contact us</h1>
        <div className="info">
            <div className="mobile">
                <h4><img src="/phone-call.png" alt="" />
                    Helpline no.</h4>
                
               +91 8500000001
                
            </div>
            <div className="email">
                <h4><img src="gmail.png" alt="" />Email</h4>
                
                skyfuloflove@gmail.com
                
            </div>
            <div className="address">
                <h4>                <img src="/location-pin.png" alt="" />Address</h4>
                
                Plot No. P-168, H. No. 50-32-167 Haridevapuram, Children's School, Mahaver Rd, Hyderabad, Telangana 523054

Hyderabad
                
            </div>
        </div>
      
    </div>
  )
}

export default ContactUs
