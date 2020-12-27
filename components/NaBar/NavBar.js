import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'


export const NavBar = () => {
const router = useRouter()
  const isActive = (r) =>{
    if(r ===router.pathname){
      return 'active'
    }else {
      return ''
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/">
          <a className="navbar-brand">Navbar</a>
      </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link href="/cart">
          <a className={"nav-link "+isActive('/cart')}><i className="fas fa-shopping-cart"></i>Cart</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/signin">
          <a className={"nav-link "+isActive('/signin')}><i className="fas fa-user"></i>Login</a>
        </Link>
      </li>
      {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link href="/profile">
             <a class="dropdown-item">Profile</a>
          </Link>
          <Link href="/logout">
             <a class="dropdown-item">Logout</a>
          </Link>
        </div>
      </li> */}
     
    </ul>
  </div>
</nav>
  )
}
