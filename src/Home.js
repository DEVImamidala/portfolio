import React from 'react';
import About from './About';
import Contact from './Contact'
import github from './Assests/github.png'
import mail from './Assests/mail (2).png'
import whatsapp from './Assests/whatsapp.png'
import linkedln from './Assests/linkedln.png'



import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';


const Home = () => {
  return (
    <>
    <div className='homepage'>
      <div className='homepageleft'>
          <h1 id='name'>Hii,I'm Devi Mamidala</h1>
          <div className="typing">
                {/* <div class="and-txt">and</div> */}
                  <div class="animy">
                    <div class="static-txt">I'm a</div>
                        <div class="dynamic-txt">
                            <li><span>Full Stack web Developer</span></li>
                            <li><span>Python Developer</span></li>
                        </div>
                  </div>
            </div>
        
       

        <p id="description">I am Passionate about the website development , eager to apply my knowledge and skills in a professional work.I had learnt more in this field through professional experts and I have built more ui/ux designs and written more API's go through the website to know more about me. </p>
        




          <div className='hirebutton'>
                <div className='hirebutton1'><button >Hire me</button></div>
                <div className='lettalk'><button onClick={() => window.location.href='https://wa.me/6304188699'}>Let's talk</button></div>
          </div>
          
          <div className='homeicons'>
                  <div id='icon'><a href="https://github.com/devimamidala" target="_blank" rel="noopener noreferrer"><img src={github}/></a></div> 
                  <div id='icon'><a href="mailto:devimamidala385@gmail.com"><img src={mail}/></a></div>
                  <div id='icon'><a href="https://wa.me/6304188699"><img src={whatsapp}/></a></div>
                  <div id='icon'><a href='https://www.linkedin.com/in/devi-mamidala-9524a6225/'><img src={linkedln}/></a></div>

          </div>
    
      </div>
      {/* <div id='imageside'><img src={girl} className='girlimage'/></div> */}
    </div>
   
     
      
      <About />
      <Education />
      <Skills/>
      <Projects />
      <Contact />
      
      </>

  );
 
}


export default Home;
