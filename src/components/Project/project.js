import React from 'react'
import './project.css';
import project1 from '../../assets/Liquorproject.png';
import project2 from '../../assets/project2.png';

const Project = () => {
  return (
    <section id='projectPage'>
      <div className='projects'>
        <h1 className='contactPageTitle'>My Projects</h1>
        <p className='clientDesc'>
        Explore a curated selection of my projects, each a testament to my passion for innovation and craftsmanship. From dynamic web applications to intuitive mobile interfaces, my portfolio showcases a diverse range of projects that demonstrate my expertise in front-end and back-end development. Dive into each project to discover the unique challenges I've tackled and the creative solutions I've implemented, all with the goal of delivering impactful digital experiences.
        </p>
        <div className='clientImgs'>
          <a href='https://github.com/akashpawar6363/CDAC_Project.git' target='_blank' rel='noopener noreferrer'>
            <img src={project1} alt='project1' className='clientImg' ></img><span className='projectName'>Enterprise level product's shipping</span>
          </a>
          <a href='https://github.com/akashpawar6363/CDAC_Project.git' target='_blank' rel='noopener noreferrer'>
            <img src={project2} alt='project2' className='clientImg' ></img><span className='projectName'>Enterprise level product's shipping</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Project