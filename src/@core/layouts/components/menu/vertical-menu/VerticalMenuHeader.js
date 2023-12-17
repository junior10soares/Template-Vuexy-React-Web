// ** React Imports
import { useEffect } from "react"
import { NavLink } from "react-router-dom"

// ** Icons Imports
import { Disc, X, Circle } from "react-feather"

// ** Config
import themeConfig from "@configs/themeConfig"

// ** Utils
import { getUserData, getHomeRouteForLoggedInUser } from "@utils"

const VerticalMenuHeader = (props) => {
  // ** Props
  const {
    menuCollapsed,
    setMenuCollapsed,
    setMenuVisibility,
    setGroupOpen,
    menuHover
  } = props

  // ** Vars
  const user = getUserData()

  // ** Reset open group
  useEffect(() => {
    if (!menuHover && menuCollapsed) setGroupOpen([])
  }, [menuHover, menuCollapsed])

  // ** Menu toggler component
  const Toggler = () => {
    if (!menuCollapsed) {
      return (
        <Disc
          size={20}
          data-tour="toggle-icon"
          className="text-primary toggle-icon d-none d-xl-block"
          onClick={() => setMenuCollapsed(true)}
        />
      )
    } else {

     return (
        <Circle
          size={20}
          data-tour="toggle-icon"
          className="text-primary toggle-icon d-none d-xl-block"
          onClick={() => setMenuCollapsed(false)}
        />
      )
    }
  }

  console.log(menuCollapsed)//fechado

  return (
    <div className="navbar-header">
      <ul className="nav navbar-nav flex-row">
        <li className="nav-item me-auto">
          <NavLink
            to={user ? getHomeRouteForLoggedInUser(user.role) : "/"}
            className="navbar-brand"
          >
            <span className="brand-logo" style={{marginRight: '25px'}}>
            <img
              src={themeConfig.app.appLogoImage}
              alt="logo"
              style={{
                position: "absolute",
                height:'30px',
                left: "26px",
                bottom: "10px"
              }}
            />
            </span>
            <h2 className="brand-text mb-0" style={{color:'#808080', fontWeight:'normal'}}>{themeConfig.app.appName}</h2>
          </NavLink>
        </li>

        <li className="nav-item nav-toggle">
          <div className="nav-link modern-nav-toggle cursor-pointer">
            <Toggler />
            <X
              onClick={() => setMenuVisibility(false)}
              className="toggle-icon icon-x d-block d-xl-none"
              size={20}
            />
         </div>
        </li>
      </ul>
    </div>
  )
}

export default VerticalMenuHeader
