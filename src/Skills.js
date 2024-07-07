import React from 'react'


const Skills = () => {
  return (
    <>
    <div className='skillbars'>

      <div className='skillnames'>
        <ul>
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
            <li>Reactjs</li>
            <li>Nodejs</li>
            <li>Express.js</li>
            <li>Postgree sql</li>
            <li>Python</li>
            
        </ul>
      </div>
      <div className='skillbars_progress'>
          <div className="htmlprogress">
            <div id="htmlBar"></div>
          </div>
       
          <div className="htmlprogress">
            <div id="cssbar"></div>
          </div>
          <div className="htmlprogress">
            <div id="javascriptBar"></div>
          </div>
          <div className="htmlprogress">
            <div id="reactbar"></div>
          </div>
          <div className="htmlprogress">
            <div id="nodejsBar"></div>
          </div>
          <div className="htmlprogress">
            <div id="ExpressBar"></div>
          </div>
          <div className="htmlprogress">
            <div id="postgreeBar"></div>
          </div>
          <div className="htmlprogress">
            <div id="pythonBar"></div>
          </div>
      </div>
      <div className='percentage'>
          <div className='per'>90%</div>
          <div className='per'>80%</div>
          <div className='per'>79%</div>
          <div className='per'>70%</div>
          <div className='per'>79%</div>
          <div className='per'>88%</div>
          <div className='per'>92%</div>
          <div className='per'>66%</div>

      </div>
      
      
    </div>
   
    </>
  )
}

export default Skills
