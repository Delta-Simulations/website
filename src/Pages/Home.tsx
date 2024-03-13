import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export const Home = () => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth)
  const [pageHeight, setPageHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth)
      setPageHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const flexDirectionClass = pageWidth < 950 ? 'flex-col' : 'flex-row'

  const parentFlexDirectionClass = pageWidth < 801 ? 'flex-col' : 'flex-row'

  const childChildFlexSpacingClass = pageWidth < 800 ? 'justify-center' : 'justify-around'

  const navigate = useNavigate()

  const openUrlInNewTab = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <div className="flex w-full h-5/6 items-center justify-center overflow-y-auto">
      <div
        className={`flex ${parentFlexDirectionClass} h-full w-2/3 gap-10 items-center ${childChildFlexSpacingClass} `}
      >
        <div className="text-5xl font-bold text-yellow-500 text-center">Delta Simulations</div>
        <div className="flex flex-col gap-6 justify-center items-center">
          <div className=" w-1/2 text-slate-300 text-center">
            We are an open-source development community dedicated to creating high-fidelity aircraft for flight
            simulation.
          </div>
          <div className={`flex ${flexDirectionClass} justify-center gap-5 items-center`}>
            <button
              className="p-[3px] relative"
              onClick={() => {
                openUrlInNewTab('https://github.com/infinity-MSFS/LauncherV2/releases')
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-800 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Installer
              </div>
            </button>
            <button
              className="p-[3px] relative"
              onClick={() => {
                navigate('/about')
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-400 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent hover:text-black">
                More Information
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
