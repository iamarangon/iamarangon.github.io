import React from 'react'
import { whatsappIcon, facebookIcon, githubIcon, linkedinIcon, instagramIcon } from '../../assets'
import './contents.css'

const Contents = () => {
  return (
    <div className='linktree__contents'>

{/*       <div className='linktree__contents-container'>
        <a className='linktree__contents-container__links' href='https://google.com' target='blank'>
          <div className='linktree__contents-container__links-items'>
            <p>Portfolio (em breve)</p>
          </div>
        </a>
      </div>
 */}
      <div className='linktree__contents-container'>
        <a className='linktree__contents-container__links' href='https://github.com/iamarangon' target='blank'>
          <div className='linktree__contents-container__links-items'>
            <img src={githubIcon} />
            <p>GitHub</p>
          </div>
        </a>
      </div>

      <div className='linktree__contents-container'>
        <a className='linktree__contents-container__links' href='https://linkedin.com/in/italomarangon' target='blank'>
          <div className='linktree__contents-container__links-items'>
            <img src={linkedinIcon} />
            <p>LinkedIn</p>
          </div>
        </a>
      </div>

      <div className='linktree__contents-container'>
        <a className='linktree__contents-container__links' href='https://instagram.com/italo_marangon/' target='blank'>
          <div className='linktree__contents-container__links-items'>
            <img src={instagramIcon} />
            <p>Instagram</p>
          </div>
        </a>
      </div>

      <div className='linktree__contents-container'>
        <a className='linktree__contents-container__links' href='https://facebook.com/italo.marangon.3' target='blank'>
          <div className='linktree__contents-container__links-items'>
            <img src={facebookIcon} />
            <p>Facebook</p>
          </div>
        </a>
      </div>

      

      



    </div>
  )
}

export default Contents