import { type FC } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

type T_NavButtonProps = {
  text: string
  to: string
}

export const NavButton: FC<T_NavButtonProps> = (props: T_NavButtonProps): JSX.Element => {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = location.pathname === props.to

  const handleClick = () => {
    navigate(props.to)
  }

  return (
    <button
      className={`text-lg p-4 w-24 text-slate-300 hover:text-yellow-500 transition-colors ease-in-out  ${
        isActive ? 'font-bold' : 'font-normal'
      }`}
      onClick={handleClick}
    >
      {props.text}
    </button>
  )
}
