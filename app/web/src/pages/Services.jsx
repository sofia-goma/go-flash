import React from 'react'
import ServiceText from '../components/ServiceText'
import servicesBackground from '../assets/ServicesBackground.png';
import Button from '../components/Button'
const Sercices = () => {
  return (
    <div className='' style={{
      backgroundImage: `url(${servicesBackground})`,
      backgroundPosition: '10% 3%',
      backgroundSize: 'cover',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
      padding: '100px 0',
      overflow: 'hidden'
 
    }}>
      <ServiceText/>
      {/* <Button /> */}
    </div>
  )
}

export default Sercices
