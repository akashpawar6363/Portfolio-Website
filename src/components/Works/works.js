import React from 'react';
import './works.css';
import c from '../../assets/C++.png';
import html from '../../assets/HTML.png';
import css from '../../assets/CSS.png';
import javascript from '../../assets/JavaScript.png';
import reactjs from '../../assets/reactjs.png'
import java from '../../assets/java.png';
import springboot from '../../assets/springboot.png';
import aws from '../../assets/AWS.jpg';
import github from '../../assets/github.png';
import MySQL from '../../assets/mysql.png';


const Works = () => {
  return (
    <section id='works'>
      <h2 className='worksTittle'>My Skills</h2>
      <span className='worksDesc'>
        Proficient in a diverse array of technologies including C++, Java, and Spring Boot for robust backend development.
        Skilled in crafting dynamic and responsive frontend experiences with HTML, CSS, and JavaScript. 
        Experienced in version control and collaboration using GitHub. Additionally, proficient in React.js for building interactive user interfaces and MySQL for efficient data management.</span>
      <div className='worksImgs'>
        <img src={c} alt='c' className='worksImg'/>
        <img src={html} alt='html' className='worksImg'/>
        <img src={css} alt='css' className='worksImg'/>
        <img src={javascript} alt='javascript' className='worksImg'/>
        <img src={reactjs} alt='reactjs' className='worksImg'/>
        <img src={java} alt='java' className='worksImg'/>
        <img src={springboot} alt='springboot' className='worksImg'/>
        <img src={aws} alt='aws' className='worksImg'/>
        <img src={MySQL} alt='mysql' className='worksImg'/>
        <img src={github} alt='github' className='worksImg'/>
      </div>
    </section>
  )
}

export default Works;