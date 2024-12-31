import React from 'react'
import Hero from '../assets/3d-rendering-modern-steel-elevator-lift-lobby-in-business-hotel-with-luxury-design-2AHN75X-transformed (2).png'
import propertyImg from '../assets/property.jpg'
import hospitalImg from '../assets/hospital.webp'
import industrialImg from '../assets/industrial-building.avif'

import Service from '../components/Service'
import { Link } from 'react-router'
const Homepage = () => {
  return (
    <div className='homepage mt-[6rem]'>
        <img src={Hero} alt="hero-img" />
        <div className="imgCard">
            <h1 className='text-primary mt-10'>Neo Elevators</h1>
            <p className='mt-10 ml-10 mr-10 text-left'>Neo Elevators is a pioneer in modern elevator solutions, dedicated to delivering innovative and  reliable  vertical transportation systems.</p>
            <p className='mt-10 ml-10 mr-10 text-left'>
                <Link to="/contactus" className='contact-us'>
                    Contact us
                </Link>
                →
            </p>
            
        </div>
        <h1 className='service-h1'>Who we service</h1>
        <div className="service mt-10">
            
            <Service img={propertyImg} title={"Residential Property Owners"} subTitle={"At Neo Elevators, we specialize in providing tailored elevator solutions for residential property owners, enhancing convenience and accessibility within homes. Whether it's a luxury apartment, multi-story house, or a villa, our elevators are designed to seamlessly integrate into any home style"} isLeft={true}/>
            <Service img={hospitalImg} title={"Hospital Facilities"} subTitle={"We understand the unique needs of hospital facilities and offer elevator solutions that prioritize safety, reliability, and efficiency. Our elevators are designed to handle high traffic, including patients, medical staff, and equipment, ensuring smooth and quick transportation throughout the hospital"} isLeft={false}/>
            <Service img={industrialImg} title={"Industrial Buildings"} subTitle={"We offer robust and efficient elevator solutions specifically designed for industrial buildings. Our systems are engineered to handle heavy loads, high traffic, and the demanding environments of factories, warehouses, and distribution centers."} isLeft={true}/>
        </div>
        
    </div>
  )
}

export default Homepage