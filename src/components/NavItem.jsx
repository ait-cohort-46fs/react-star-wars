import React, { useContext } from 'react'
import { SWContext } from '../utils/context'

const NavItem = ({itemTitle}) => {

  const {changePage} = useContext(SWContext);

  return (
    <li onClick={() => changePage(itemTitle)} className="nav-item btn btn-danger mx-1">{itemTitle}</li>
  )
}

export default NavItem