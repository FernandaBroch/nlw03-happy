import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import '../styles/pages/landing.css'
import logoImg from '../images/logo.svg'

function Landing(){
  return(
    <div id="page-landing">
    <div className="content-wrapper">
      <img src={logoImg} alt="Happy Logo" />

      <main>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
      </main>

      <div className="location">
        <strong>Canoas</strong>
        <span>Rio Grande do Sul</span>
      </div>

      <Link to="/app" className="enter-app">
        <FaArrowRight size={26} color="rgba(0,0,0,0.6)" />
      </Link>
    </div>
  </div>
  )
}

export default Landing