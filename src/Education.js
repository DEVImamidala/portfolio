import React from 'react'
import educationhat from './Assests/educationhat.png'

const Education = () => {
  return (
    <div className='education'>
          <div className='education_hat'>
            <div className='hatimage'> <img  src={educationhat} /></div>
            <div className='hat1'><h2>Education</h2></div>
          
          </div>
      
      <div className='firstschool'>
            <div className='firstschool1'>
                <h2>3rd B.N APSP High School</h2>
                <h4 id='year'>2015-2016</h4>
                <p className='paraaboutedu'> I have completed the high school with good academics score</p>
            </div>
            <div className='firstschool2'>
                  <h2>ADITYA JUNIOUR COLLEGE</h2> 
                  <h4 id='year'>2016-2018</h4>
                  <p className='paraaboutedu'>I pursued mathemathics and physcics and chemistry in this particular year with good knowledge</p>
            </div>
        </div>
        <div id='kiet'>
              <h2>KIET INSTITUE OF ENGINEERING AND TECHNOLOGY</h2>
              <h4 id='year'>2018-2022</h4>
              <p className='paraaboutedu'>I have completed my B.Tech in computer science and engineering with good academics and good knowledge</p>
        </div>
      
    </div>
  )
}

export default Education
