import { Building, EnvelopeSimple, Phone } from '@phosphor-icons/react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-container">
        <h1 className="footer-title">Get In Touch</h1>
        <div className="footer">
            <div className="footer-section left">
                <Building size={52} color="#bf9f48" weight="duotone"/>
                <p>Lower Ground Floor Sudhi Villa. Block No. A-698/1395. Behind Netaji High School. Ulhasnagar - 421 005. Dist. Thane. Maharashtra.</p>
            </div>
            <div className="footer-section right">     
                <p> <Phone size={32} color="#bf9f48" weight="duotone" /> +91 9890362318</p>
                <p> <EnvelopeSimple size={32} color="#bf9f48" weight="duotone" />elevatorsneo@gmail.com</p> 
            </div>
        </div>
    </footer>
  )
}

export default Footer
