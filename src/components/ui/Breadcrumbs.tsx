import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs() {
  const location = useLocation()
  const isAbout = location.pathname === '/about'

  return (
    <div className="breadcrumbs text-sm m-[5px]">
      <ul>
        <li>
          <Link to="/" className="flex items-center gap-1">
            <img src="https://api.iconify.design/mdi:home.svg" className="h-4 w-4" alt="home" />
            Home
          </Link>
        </li>
        {isAbout && (
          <li>
            <Link to="/about" className="flex items-center gap-1">
              <img src="https://api.iconify.design/mdi:account.svg" className="h-4 w-4" alt="about" />
              About Me
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}