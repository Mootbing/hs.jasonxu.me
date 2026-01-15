"use client"

import ModernRoundedSidebar from "@/app/components/modernRoundedSidebar/modernRoundedSidebar"
import Navbar from "@/app/components/navbar/navbar"
import RandomSky from "@/app/components/randomSky/randomSky"
import { ScrollContext } from "@/app/contexts/scrollContext"
import "@/app/globals.css"
import Title from "@/app/parts/1-title/title"

export default function Home({}) {
  return <div style={{backgroundColor: "#000", width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
    <ModernRoundedSidebar mobileOverride alwaysExpand/>
    <RandomSky offset={0} multiplier={10} style={{
        position: "absolute",
        width: "100vw",
    }}/>
  </div>
}