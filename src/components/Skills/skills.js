import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';



const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTittle'>What I do</span>
      <span className='skillDesc'>I am a skilled and passionate web designer with experience in creating visually appending and user friendly websites. I have astrong understanding of desgin and a keen eye for detail. I am profficient in HTML, CSS, JavaScript, ReactJs as well as in Java, SpringBoot and MySQL.</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>UI/UX Design</h2>
            <p>I specialize in crafting intuitive and visually stunning user interfaces that prioritize seamless experiences. With a keen eye for detail and a passion for innovation, I excel in creating designs that captivate users and elevate engagement. Explore my portfolio to see how my skills can enhance your digital projects.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>Website Design</h2>
            <p> I showcase my expertise in full-stack website design, where I seamlessly integrate front-end and back-end technologies to create dynamic and responsive web experiences. Leveraging a combination of HTML, CSS, JavaScript, and various server-side languages and frameworks, I craft user-friendly interfaces with robust functionality. From concept to deployment, I specialize in delivering comprehensive solutions that meet both client needs and industry standards.</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills;