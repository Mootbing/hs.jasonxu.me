"use client"

import { SelectedContext } from '@/app/contexts/selectedContext';
import styles from './card.module.css'
import { useContext, useEffect, useRef, useState } from 'react';

function TechBubble ({name}) {
  return <p className={styles.techName}>{name}</p>
}

export default function Card ({project = {}}) {

  const {company, title, description, technologies, image} = project

  const {selectedProject, setSelectedProject} = useContext(SelectedContext)

  const [notSmall, setNotSmall] = useState(false)
  const [animateBackground, setAnimateBackground] = useState(false)

  const [mouseXY, setMouseXY] = useState({x: 0, y: 0})

  useEffect(() => {
    window.addEventListener('resize', () => {
      setNotSmall(globalThis?.window.innerWidth - 50 > 700)
    })
    setNotSmall(globalThis?.window.innerWidth - 50 > 700)
  }, [])

  return <div onClick={() => {
    setSelectedProject(project)
    //set current url make sure url encoded
    globalThis.window.history.pushState(null, null, "?company=" + encodeURIComponent(project.company.toLowerCase()) + "&name=" + encodeURIComponent(project.title.toLowerCase()))
  }}
  onMouseOver={() => {
    setAnimateBackground(true);
  }} 
  onMouseLeave={() => {
    setAnimateBackground(false);
  }}
  onMouseMove={(e) => {
    if (!animateBackground) {
      return
    }

    //set mouse xy relateve to card
    setMouseXY({
      x: e.clientX - e.target.getBoundingClientRect().left - e.target.getBoundingClientRect().width / 2,
      y: e.clientY - e.target.getBoundingClientRect().top - e.target.getBoundingClientRect().height / 2
    })
  }} 
  className={styles.cardContainer} style={{
    height: notSmall ? "400px" : "700px",
    transition: "0.25s ease-out",
    borderStyle: project.dashed ? "dashed" : "solid",
    borderWidth: project.dashed ? "4px" : "1px",

    transform : animateBackground ? `perspective(1000px) rotateY(${mouseXY.x / 50}deg) rotateX(${-mouseXY.y / 25}deg)` : "",
  }}>
    <div id={
      project.company.toLowerCase() + "-" + project.title.toLowerCase()
    } className={styles.hoverAnimation} style={{
      scale: animateBackground ? 2 : 1,
      opacity: animateBackground ? 1 : 0,
      transition: "0.25s ease-out",

      borderWidth: project.dashed ? "0px" : "2px",
    }} />
    <img src={image} className={styles.image} style={{
      //parallax x and y towards cursor
      transform: animateBackground ? `scale(0.5) translate(50%, 50%) translateX(${mouseXY.x / 5 * -1}px) translateY(${mouseXY.y / 5 * -1}px)` : "scale(0.5) translate(50%, 50%)",
      transition: "0.25s ease-out",
      // opacity: notSmall ? 1 : 0.25,
    }}/>
    
    <div className={styles.companyContainer}>
      <p className={styles.company}>{company}</p>
    </div>
    <div className={styles.titleContainer} style={{
      height: notSmall ? "100%" : "100%",
      width: notSmall ? "300px" : "60%",
      justifyContent: notSmall ? "center" : "flex-start",
      marginTop: notSmall ? "0px" : "50px"
    }}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description[0].length > 60 ? description[0].substring(0, 60) + "..." : description[0]}</p>
      
      <div className={styles.technologiesContainer} style={{
        flexWrap: notSmall ? "nowrap" : "wrap",
      }}>
        {
          technologies && technologies.map((technology, index) => {
            return <TechBubble key={index} name={technology} />
          })
        }
      </div>
    </div>
  </div>
}