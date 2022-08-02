import React from 'react'
import { reactLogo, viteLogo } from '../../assets'
import './header.css'

const Header = () => {
  return (
    <div className='linktree__header'>
        <div className='linktree__header-logos'>
            <a href='https://vitejs.dev' target='blank'>
                <img className='linktree__header-logos__vite' src={viteLogo}/>
            </a>
            <a href='https://reactjs.org' target='blank'>
                <img className='linktree__header-logos__react' src={reactLogo} />
            </a>
        </div>
        <div>
            <h1>LinkTree - Italo Marangon</h1>
        </div>

    </div>
  )
}

export default Header