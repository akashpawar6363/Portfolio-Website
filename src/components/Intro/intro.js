import React from 'react';
import './intro.css';
import bg from '../../assets/photo.jpg';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Akash</span><br/>Full Stack Developer</span>
        <p className='introPara'>I am a skilled web designer with experience in creating <br/>visual, user friendly and interactive websites.</p>
        <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'/>Hire Me</button></a>
      </div>
      <img src={bg} alt='' className='bg'/>
    </section>
  )
}

export default Intro;