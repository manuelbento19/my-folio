import React, { memo } from 'react'
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full text-sm leading-6 mt-8 py-4 border-t border-slate-200 sm:flex justify-between text-slate-500">
        <p>Copyright © 2024 MyFolio.</p>
        <a href="https://github.com/manuelbento19" className="hover:text-slate-500">
            <FaGithub className='size-5'/>
        </a>
    </footer>
  )
}

export default memo(Footer);