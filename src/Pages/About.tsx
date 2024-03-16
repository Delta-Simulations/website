// import { useRef, useState, useEffect } from 'react'
import { NumberStats } from '../components/numberIncrease'
import { AboutStatsProvider } from '../components/aboutStatsProvider'
// import { AboutBioProvider } from '../components/aboutBioProvider'

export const About = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-6 p-5">
      <AboutStatsProvider
        downloads={<NumberStats totalDownloads={400} subtext="K+" animationDuration={20} />}
        yearsOfDevelopment={<NumberStats totalDownloads={3} subtext="+" animationDuration={20} />}
        contributors={<NumberStats totalDownloads={25} subtext="+" animationDuration={20} />}
      />
      <div className=" w-5/6 flex flex-col gap-6">
        {/*<AboutBioProvider
          name="C-17"
          bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. A dignissimos aliquam provident, illo modi dolore accusantium officiis minima dolores ipsa placeat eligendi dicta repellat soluta debitis perferendis beatae eaque. Quaerat."
          image="/delta.png"
        />*/}
      <div className="h-fit bg-black/70 p-10 rounded-3xl  border-2 border-yellow-500/20 flex items-center gap-10 flex-row">
      <div className="flex items-center gap-10">
        <div className="text-3xl text-yellow-500">Our Projects</div>

          <div className="w-1/2 text-slate-300">
          We are currently developing a C-17A Globemaster and UH-60M Blackhawk for Microsoft Flight Simulator.
          We are dedicated to creating highly detailed, accessible addons for flight simulation. Our development team is spread globally, united through our shared desire towards these projects.
          
          </div>


          </div>

          

      </div>
      {/* 
        <AboutBioProvider
          name="H-60"
          bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. A dignissimos aliquam provident, illo modi dolore accusantium officiis minima dolores ipsa placeat eligendi dicta repellat soluta debitis perferendis beatae eaque. Quaerat."
          image="/elta.png"
          imageLeft
        />*/}
      </div> 
    </div>
  )
}
