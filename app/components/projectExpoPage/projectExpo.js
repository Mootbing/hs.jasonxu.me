"use client"

import VerticalNavbar from '@/app/components/verticalNavbar/verticalNavbar';

import "@/app/globals.css"

import styles from './projectExpo.module.css'
import { useEffect, useState } from 'react';
import CursorBlob from '@/app/components/cursorBlob/cursorBlob';
import RandomSky from '@/app/components/randomSky/randomSky';
import { ScrollContext } from '@/app/contexts/scrollContext';
import Card from '@/app/components/card/card';
import Interests from '@/app/components/interests/interests';
import { SelectedContext } from '@/app/contexts/selectedContext';
import Details from '../details/details';
import Navbar from '../navbar/navbar';
import ModernRoundedSidebar from '../modernRoundedSidebar/modernRoundedSidebar';
import ScrollIndicator from '../scrollIndicator/scrollIndicator';

export default function ProjectExpo({tag = "TAG", title="TITLE", description="DESCRIPTION", gemstone="./images/dev-projects/header/Aespaetha.svg", projectList=[]}) {

  const [mouseXY, setMouseXY] = useState([0, 0])

  const [scrollY, setScrollY] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {

    //store height of window
    setWindowHeight(window.innerHeight)

    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY)
    })

    window.addEventListener('mousemove', (event) => {
      setMouseXY([event.clientX, event.clientY])
    })
    setMouseXY([window.innerWidth / 2, window.innerHeight / 2])
  }, [])

  useEffect(() => {
    const company = new URLSearchParams(globalThis.window?.location.search).get("company")
    const projectName = new URLSearchParams(globalThis.window?.location.search).get("name")

    if (projectName) {
      const project = projectList.find((project) => {
        return project.title?.toLowerCase() === projectName.toLowerCase() && project.company?.toLowerCase() === company.toLowerCase()
      })
      if (project) {
        setSelectedProject(project)

        setTimeout(() => {
          const tag = document.getElementById(company + "-" + projectName)
          if (tag) {
            tag.scrollIntoView()
          }
        }, 500)
      }
    }
  }, [])

  return (
    <ScrollContext.Provider value={{scrollY, windowHeight}}>
      <SelectedContext.Provider value={{selectedProject, setSelectedProject}}>
        <div className={styles.main}>

          {/* <head> */}
          <meta name="description" content={description} />
          {/* </head> */}

          {selectedProject && <Details project={selectedProject} onClose={() => {
            setSelectedProject(null)
          }} />}

          <img src={
            gemstone
          } className={styles.backgroundGem} style={{
            // rotate based on mouse x y with 3d rotation
            transform: `translate(-50%, -50%) rotate(${((-mouseXY[0] - globalThis.window?.innerHeight / 2) + scrollY * 5) / 500}deg) scale(${Math.min(1, globalThis.window?.innerWidth / 1430)})`,
            transition: '0.15s ease-out',
          }}/>

          <RandomSky dimBottom offset={0} multiplier={10} style={{
            position: "absolute",
            width: "100vw",
            // zIndex: -1
          }}/>

          <div className={styles.hero}>
            <div className={styles.headingContainer}>
              <p className={styles.tag}>{tag}</p>
              <h1 className={styles.heading}>{title}</h1>
              <p className={styles.description}>{description}</p>
            </div>
            {/* <div className={styles.scrollImageContainer}>
                <img
                    src="/images/scroll.svg"
                    alt="Scroll Down"
                    width={100}
                    height={75}
                    className={styles.groupOneScrollImage}
                />
            </div> */}
            <ScrollIndicator />
            {/* <div className={styles.leftSideBar}>
              <VerticalNavbar selected={"Dev Projects"}/>
            </div> */}
            {/* <p className={styles.rightSideBarText}>
              MADE WITH NEXT.JS REACT JAVASCRIPT THREE.JS, BUT MOST IMPORTANTLY, LOVE
            </p> */}
          </div>

          <div className={styles.projectContainer}>
            {
              projectList.map((project, index) => {
                return <Card key={index} project={project}/>
              })
            }
          </div>

          <Interests style={{
            width: "100%",
            // margin: "20px",
            height: "50vh",
          }} />

          {/* <Navbar selected={title}/> */}

          <div style={{height: 50}}/>

          <ModernRoundedSidebar />

          {/* <CursorBlob /> */}

        </div>
      </SelectedContext.Provider>
    </ScrollContext.Provider>
  );
}