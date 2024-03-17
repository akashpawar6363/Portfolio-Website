import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';



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
            <p>I merge technical expertise with artistic flair to deliver captivating digital solutions. Dive into my collection of projects to witness firsthand the seamless fusion of functionality and aesthetics. Let's collaborate to bring your vision to life.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>App Design</h2>
            <p>Crafted by a seasoned designer, my portfolio showcases my expertise in App Design through a collection of sleek and intuitive interfaces. Explore my innovative designs, thoughtfully crafted user experiences, and attention to detail, reflecting my commitment to delivering exceptional digital solutions.</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills;