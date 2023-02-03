import React from 'react'
import {BsLinkedin, BsTwitter, BsFacebook, BsInstagram} from 'react-icons/bs';

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-8'>

        <a className='hover:opacity-50 transition duration-500'
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer">
<BsLinkedin alt="linkedin-link" size={30}/>
        </a>

        <a className='hover:opacity-50 transition duration-500'
        href="https://www.Twitter.com"
        target="_blank"
        rel="noreferrer">
<BsTwitter alt="Twitter-link" size={30}/>

        </a>

        <a className='hover:opacity-50 transition duration-500'
        href="https://www.Facebook.com"
        target="_blank"
        rel="noreferrer">
<BsFacebook alt="Facebook-link" size={30}/>
        </a>

        <a className='hover:opacity-50 transition duration-500'
        href="https://www.Instagram.com"
        target="_blank"
        rel="noreferrer">
<BsInstagram alt="Instagram-link" size={30}/>
        </a>

        </div>
  )
}

export default SocialMediaIcons