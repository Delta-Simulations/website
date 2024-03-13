import { useRef, useState, useEffect } from 'react'
import { NumberStats } from '../components/numberIncrease'
import { AboutStatsProvider } from '../components/aboutStatsProvider'
import { AboutBioProvider } from '../components/aboutBioProvider'

export const About = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-6 p-5">
      <AboutStatsProvider
        downloads={<NumberStats totalDownloads={400} subtext="K+" animationDuration={20} />}
        yearsOfDevelopment={<NumberStats totalDownloads={3} subtext="+" animationDuration={20} />}
        contributors={<NumberStats totalDownloads={25} subtext="+" animationDuration={20} />}
      />
      <div className=" w-5/6 flex flex-col gap-6">
        <AboutBioProvider
          name="C-17"
          bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. A dignissimos aliquam provident, illo modi dolore accusantium officiis minima dolores ipsa placeat eligendi dicta repellat soluta debitis perferendis beatae eaque. Quaerat."
          image="/delta.png"
        />

        <AboutBioProvider
          name="H-60"
          bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. A dignissimos aliquam provident, illo modi dolore accusantium officiis minima dolores ipsa placeat eligendi dicta repellat soluta debitis perferendis beatae eaque. Quaerat."
          image="/delta.png"
          imageLeft
        />
      </div>
    </div>
  )
}
