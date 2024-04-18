import { Container,Row,Col } from 'react-bootstrap';
import React, { useState } from 'react';
import './Contact.css'
import { contactConfig } from './content_options';


const Contact = () => {
  const [userData,setUserData] = useState(
    {
      Name: '', email: '', message: ''
    }
  )
  let name;
  let value;
  console.log(userData)
  const data = (e) => 
  {
    name = e.target.name
    value = e.target.value
    setUserData({...userData, [name]:value})
  }
  const sendData = async(e) =>
  {
    const {Name, email, message} = userData
    e.preventDefault();
    const option = {
      method: 'POST',
      headers: {
        'Content-type': 'application.json'
      },
      body : JSON.stringify({
        Name, email, message
      })
    }
    const res = fetch('https://mypersonalportafolio1-default-rtdb.firebaseio.com/messages.json', option)
    console.log(res)
  }

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2> 
      <Container>
     
       
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get In Touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {Object.prototype.hasOwnProperty.call("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form method ="post" className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    name="Name"
                    placeholder="Name" 
                    type="text"
                    value={userData.Name}
                    autoComplete='off'
                    onChange={data}
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email" 
                    value={userData.email}
                    autoComplete='off'
                    onChange={data}
                    required 
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5" 
                value={userData.message}
                autoComplete='off'
                onChange={data}
                required
              />
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit" onClick={sendData}> 
                  Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      {/* <a href={`mailto:${contact.email}`}> */}
        {/* <span className='btn btn--outline' role='button'> */}
          {/* Email me */}
        {/* </span> */}
      {/* </a> */}
      
    </section>
    
  )
}

export default Contact