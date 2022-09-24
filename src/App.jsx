
import './App.css';

function App() {
  return (
    <div className="app">
        
        <div className='header'>

          <div className='sub--header'>
          <h2> <u>APOLLOS EBI-EREFA </u></h2>
          <h3 className='front-end'>Front end Developer</h3>
          </div>

        </div>

        <div className='main--section'>

          <aside className='aside--left'>

            <section className='summary--section'>
              <p>
              I am an enthusiastic and detail-oriented Frontend Software Engineer<br /> 
              seeking an entry-level position with Company to use my skills in <br /> 
              coding, troubleshooting complex problems, and assisting in the <br /> 
              timely completion of projects.
              </p>

            </section>

            <div className='experience'>
              <h2>EXPERIENCE</h2>
              <p><strong>Front-End Software Developer<br/> Stutern </strong></p>
              <p>September 2019 - Present</p>
              
              <ul className='ul-1'>
                <li>Implements responsive websites and landing pages from conception through deployment</li>
                <li>Access figma designs for technical feasibility</li>
                <li>Collaborate with product team members to implement new feature developments</li>
                <li>Standardize all output with a new responsive, mobile first approach and strategy</li>
              </ul>

            </div>

            <div className='academic-project'>

              
                <h2>ACADEMIC PROJECTS</h2>
              
              <div className='academic-div'>
                <h4>Online African bookshop</h4>
                <p>https://afribook.netlify.app/</p>
                <p>May 2022 - June 2022</p>
                <p>Implemented the Online African bookshop with React, Redux for<br/> 
                    state management, JavaScript, HTML, CSS, Bootstrap, Figma<br/> 
                    Design, Git. Integrated the user authentication with redux.
                </p>
              </div>

              <div className='specialist-app'>
                <h4>Specialists’ website</h4>
                <p>https://savis-app.netlify.app/</p>
                <p>March 2022 - April 2022</p>
                <p>Implemented the Online app where specialists and clients meet with<br/> 
                    React, Redux for state management, JavaScript, HTML, CSS,<br/> Bootstrap, Git. 
                </p>

              </div>
            </div>

            <div className='education'>

              <div className='education-1'>
                <h2>EDUCATION</h2>
                <h4>Front-End Software Development</h4>
                <p>Stutern Graduate Accelerator</p>
                <p>Sep 2019 - July 2022</p>
              </div>

            </div>
            <div className='vet--med'>
              <h4>Veterinary Medicine</h4>
              <p>University of Maiduguri</p>
              <p>April 2014</p>

            </div>

          </aside>

          <aside className='aside--right'>
            <div className='personal--info'>
              <h2>PERSONAL INFORMATION</h2>
              <div className='personal--info-2'>
                
                <p><strong> Address </strong><br/> No 5, Keffi Street,<br/> Off Awolowo, Ikoyi,<br/>Lagos, Nigeria </p>
                
                <div className='phone'><p><strong>Phone</strong><br/>+2348038376835</p></div>
                
                <div className='email'><p><strong>Email</strong><br/> doyinapollos@gmail.com</p></div>
                
                <div className='linked-in'><p><strong>LinkedIn</strong> <br/> linkedin.com/in/dr-apollos-ebi-erefa-69a8899b/</p></div>
                
                <div className='git-hub'><p><strong>GitHub</strong><br/> github.com/doyinapollos/</p></div>
                
                <div className='port-folio'><p><strong>Portfolio</strong><br/> https://my-potfoleo.netlify.app/ </p></div>
               
                <div className='skills'>
                <p><strong>Skills</strong><br/> 
                
                <ul className='ul-2'>
                  <li>Hypertext Markup Language(HTML)</li>
                  <li>Cascading Style Sheet (CSS)</li>
                  <li>JavaScript (JS)</li>
                  <li>Version Control (Git)</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Bootstrap</li>
                </ul>
                
                </p>
                </div>

                <div className='language'> <p><strong>Languages</strong><br/> English (Fluent)<br/> Ijaw</p> </div>
              </div>

              <div className='certificate'>
                <p><strong>CERTIFICATES</strong></p><br/>
                <p>Front-end web developer<br/> certification by Stutern </p>
              </div>

            </div>

            <div className='membership'>
              <h4>PROFESSIONAL MEMBERSHIP</h4>
              <p>National Veterinary Medical Association (NVMA)</p>

            </div>

          </aside>


        </div>

        <footer className='footer'>

        </footer>


    </div>
  );
}

export default App;
