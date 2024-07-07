import React from 'react';
import library from './Assests/library.png';
import movie from './Assests/movie.jpg';
import quiz from './Assests/quiz.png';
import vote from './Assests/vote.jpg';
import Button from 'react-bootstrap/Button';


const Projects = () => {
  return (
    <>
      <div className='prj_heading'>
        <h1>Projects</h1>
      </div>
      <div className='firstprjline'>
          <div className='vote'>
                <div><img src={vote} alt="Voting Management System" className="project_image"/></div>
                <div className='votepara'><h3>Voting Management System</h3>
                      <p className='projectpara'>This project is based on ReactFull stack  and it usually has two users which are user and admin user will get register  after that login to that  account using authentication and after that voting process will be held and user will exit .in order to know the counting of voting admin will login to his account and check the percentage based on the users voting. which includes technoilogies like html,css,ajavascript and bootstrap and react backend node with framework expressjs with database postgreesql</p>
                </div>
                    
              
          </div>
          <div className='quiz'>
          <div><img src={quiz} alt="quiz application" className="project_image"/></div>
                <div className='quizpara'><h3>Quiz application System</h3>
                      <p className='projectpara'>Basically it is an user friendly application which helps students to know about their ability on the Html language .It has been created using reactfull stack </p>
                </div>
          </div>
      </div>
     
          
         
          
           
            
         
          
           
         
          
    </>
  );
}

export default Projects;


