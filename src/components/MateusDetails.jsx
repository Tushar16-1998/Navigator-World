import React from 'react'
import { Link } from 'react-router-dom'

function MateusDetails() {
  return (
    <div>
        <h1>Mateus Lima</h1>
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png" 
      alt="Brazil Flag" />
      <ul>age: 30</ul>
      <ul>gender: Male</ul>
      <ul>occupation: Junior Full Stack Web Developer</ul>
      <ul>location: Portugal</ul>
      <ul><a href="https://github.com/MateusCTO" >My github</a></ul>
      <ul><a href="https://www.linkedin.com/in/mateusf-lima/">My linkedin</a></ul>
      <ul><a href = "mailto:farias.mateus@gmail.com" target="_blank" >My Email</a></ul>
      <Link to='/about'>
        Back
      </Link>
    </div>
  )
}

export default MateusDetails