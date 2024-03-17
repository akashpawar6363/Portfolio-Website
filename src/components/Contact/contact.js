import React, { useRef } from 'react'
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Microsoft from '../../assets/microsoft.png';
import Adobe from '../../assets/adobe.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';
import { Link } from 'react-scroll';


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
      <div className='clients'>
        <h1 className='contactPageTitle'>My Clients</h1>
        <p className='clientDesc'>
        I have had the opportunity to work with a diverse group of companies.
        Some of the notable companies I have worked with includes.
        </p>
        <div className='clientImgs'>
          <img src={Walmart} alt='client' className='clientImg' />
          <img src={Adobe} alt='client' className='clientImg' />
          <img src={Microsoft} alt='client' className='clientImg' />
          <img src={Facebook} alt='client' className='clientImg' />
        </div>
      </div>
      <div className='contact' id='contact_1'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type="text" className='name' placeholder='Name' name='from_name' required/>
          <input type="email" className='email' id='email' placeholder='Email Address' name='from_email' required/>
          <textarea className='msg' rows={5} name='message' placeholder='Your Message' required/>
          <button type='submit' value='send' className='submitBtn'>Submit</button>
          <div className='links'>
            <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'><img src={FacebookIcon} alt='facebook' className='link'></img></a>
            <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'><img src={TwitterIcon} alt='twitter' className='link'></img></a>
            <a href='https://www.youtube.com' target='_blank' rel='noopener noreferrer'><img src={YoutubeIcon} alt='youtube' className='link'></img></a>
            <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'><img src={InstagramIcon} alt='instagram' className='link'></img></a>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact