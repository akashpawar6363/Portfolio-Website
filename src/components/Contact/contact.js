import React, { useRef } from 'react'
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2rcf1av', 'template_awjylw1', form.current, {
        publicKey: '-fdXCxELYpYtbbqz7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email sent!")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contactPage'>
      <div className='contact' id='contact_1'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type="text" className='name' placeholder='Name' name='from_name' required/>
          <input type="email" className='email' id='email' placeholder='Email Address' name='from_email' required/>
          <textarea className='msg' rows={5} name='message' placeholder='Your Message' required/>
          <button type='submit' value='send' className='submitBtn'>Submit</button>
          <div className='links'>
            <a href='https://www.facebook.com/profile.php?id=100007634237965' target='_blank' rel='noopener noreferrer'><img src={FacebookIcon} alt='facebook' className='link'></img></a>
            <a href='https://twitter.com/AkashPawar92073' target='_blank' rel='noopener noreferrer'><img src={TwitterIcon} alt='twitter' className='link'></img></a>
            <a href='https://www.instagram.com/__akash_pawar____' target='_blank' rel='noopener noreferrer'><img src={InstagramIcon} alt='instagram' className='link'></img></a>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact