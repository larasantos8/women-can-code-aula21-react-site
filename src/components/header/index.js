import React from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaHome, FaAddressCard } from 'react-icons/fa'

function Header() {
  return (
    <nav>
      <Link to="/">
        <FaHome />
        Home
      </Link>
      <Link to="/contato">
        <FaEnvelope />
        Contato
      </Link>
      <Link to="/portifolio">
        <FaAddressCard/>
        Portifólio
      </Link>
    </nav>
  )
}

export default Header