import React from 'react'
import { Container } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import person_1 from './img/person-nappy-800.jpg'; // Tell webpack this JS file uses this image
import person_2 from './img/person-daniel-800.jpg'; // Tell webpack this JS file uses this image
import person_3 from './img/person-mike-800.jpg'; // Tell webpack this JS file uses this image

function Landing() {
  return (<div>

    <div className="main-container">
      <div className="home-jumbotron">
        <h1>EthniCity</h1>
        <p className="lead">Build your personal brand</p>
        <div><Link to="/signup"><button className="ui fade animated button"><div className="visible content">Upload your resume</div><div className="hidden content">Register</div></button></Link></div>
      </div>
    </div>

    <div className="partners">
      <p>
        Our partners are leading change with their commitment to diversity and inclusion in the workforce.
      </p>
    </div>

    <div className="hiring-process-container callout-banner p-5">
      <h4>Hiring Process</h4>
      <h2>How It <span>Works</span></h2>
      <div className="how-it-works">
        <div>
          <div className="col-icon"><i aria-hidden="true" className="hand point down outline huge icon"></i></div>
          <h3>Register</h3>
          <p className="description">Gravida quis blandit turpis cursus in hac habitasse platea. Ut diam quam nulla porttitor.</p>
        </div>
        <div>
          <div className="col-icon"><i aria-hidden="true" className="save outline huge icon"></i></div>
          <h3>save &amp; apply</h3>
          <p className="description">Gravida quis blandit turpis cursus in hac habitasse platea. Ut diam quam nulla porttitor.</p>
        </div>
        <div>
          <div className="col-icon"><i aria-hidden="true" className="search huge icon"></i></div>
          <h3>Employers Find You</h3>
          <p className="description">Gravida quis blandit turpis cursus in hac habitasse platea. Ut diam quam nulla porttitor.</p>
        </div>
      </div>
    </div>

    <div className="story-highlight callout-banner bg-grey p-5">
      <h4>What Say Our Candidates</h4>
      <h2>Our Success <span>Stories</span></h2>
      <div className="candidates col-grid pt-5">
        <div className="candidates-col">
          <div className="ui card"><div className="image"><img src={person_1} /></div><div className="content"><div className="header">Elliot Baker</div><div className="meta">Software Engineer</div><div className="description">Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.</div></div></div>
        </div>
        <div className="candidates-col">
          <div className="ui card"><div className="image"><img src={person_2} /></div><div className="content"><div className="header">Daniel Xavier</div><div className="meta">Data Scientist</div><div className="description">Daniel is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.</div></div></div>
        </div>
        <div className="candidates-col">
          <div className="ui card"><div className="image"><img src={person_3} /></div><div className="content"><div className="header">Mike Perez</div><div className="meta">Project Manager</div><div className="description">Mike is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.</div></div></div>
        </div>
      </div>
    </div>

  </div>
  );

}

export default Landing;
