import React from 'react'
import pic from './th (2).jpg'

function Header() {
  return (
    <div className = "top">
      <img className = "headerpic" src={pic} />
  <header className = "header">Meme Previewer</header>
  <p className = "about">explore your meme ideas</p>
  </div>
  )
}

export default Header;
