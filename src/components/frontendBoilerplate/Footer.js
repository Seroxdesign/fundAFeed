import React from "react";
import "../../styles/frontendBoilerplate/Footer.css"

const links = [
  {
    title: 'Contact',
    link: 'https://linktr.ee/Tellor'
  },  
  {
    title: 'Docs',
    link: 'https://tellor.io/docs/'
  },  
  {
    title: 'Discord',
    link: 'https://discord.com/invite/kaMenz4ZVw'
  },  
]

function Footer() {
  return (
    <div className="Footer">
      <p className="FooterText">&copy; 2023 Tellor, Inc.</p>

      <nav className="FooterNav">
        {links.map((link, i) => 
          {
            return <a href={link.link} target="_blank" rel="noreferrer" key={`link-${link.title}-${i}`}>
              {link.title}
            </a>
          }
        )}
      </nav>
    </div>
  )
}

export default Footer