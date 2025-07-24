import React, { useState } from "react";
import "./App.css";  // Import CSS file
import { FaLinkedin, FaGithub, FaYoutube, FaEnvelope } from "react-icons/fa";
import profilePic from "./profile.jpeg"; // Import user photo

export default function ProfileWebsite() {
  React.useEffect(() => {
    document.title = "Htet Naing - Portfolio"; // Change tab title
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = "./favicon.ico"; // Change favicon
    document.head.appendChild(favicon);
  }, []);

  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="container">
      <header className="header">
        <img src={profilePic} alt="Htet Naing" className="profile-pic" />
        <h1>Htet Naing</h1>
        <p>Java Full-Stack Developer</p>
      </header>

      <div className="tabs">
      <button className={`tab ${activeTab === "profile" ? "active" : ""}`} onClick={() => setActiveTab("profile")}>Profile</button>
      <button className={`tab ${activeTab === "projects" ? "active" : ""}`} onClick={() => setActiveTab("projects")}>Projects</button>
      </div>

      {activeTab === "profile" && (
        <>
      <section className="card about">
        <h2>About Me</h2>
        <p>
        AWS Certified Developer with 7 years of experience in- Java Programming (OOP), Spring Boot, Angular, MySQL, 
        and Oracle DB. Proficient in CI/CD pipelines and clean code practices. Recognized for troubleshooting abilities, 
        willingness to learn, effective collaboration, 
        and consistently delivering high-quality software on time.
        </p>
      </section>

      <section className="card skills">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>Java, J2EE, Spring, Spring Boot</li>
          <li>Angular, React.js</li>
          <li>JavaScript, TypeScript</li>
          <li>MySQL, Oracle, MS SQL</li>
          <li>AWS, CI/CD Pipelines</li>
          <li>Jenkins, Git, Bitbucket</li>
          <li>Test Automation (JUnit, Selenium, Jest)</li>
        </ul>
      </section>

      <section className="card experience">
        <h2>Experience</h2>
        <div className="job">
          <h3>Java Full-Stack Developer - AGFA</h3>
          <p>(Nov 2022 - June 2024)</p>
          <ul>
            <li>Designed and implemented client and server-side solutions for Enterprise Imaging project, extending 30% of new features and increasing system efficiency by 25% by applying Java 17, Spring Framework, Angular JS, NgRx, RxJs, Redux and Oracle database.</li>
            <li>Spearheaded CI/CD pipeline enhancements with Jenkins, reducing deployment time and fixing test automating failure by 30%</li>
            <li>Actively participated in PI planning, applying agile development methodologies, and daily scrum meetings, improving project timelines by 20%.</li>
            <li>Collaborated closely with QA and cross-functional teams to resolve over 80 defects and develop over 20 new functionalities, enhancing product stability and user experience.</li>
            <li>Managed and resolved customer complaints across multiple sites, achieving a 30% reduction in complaint volume to receive a better customer experience.</li>
            <li>Developed features and managed test plans following SOLID principles and test driven development framework conducted thorough unit, E2E, and integration testing using JUnit, Mockito, Jest, and Playwright, improving code reliability by 70%.</li>
            <li>Conducted 15 code reviews and leveraged expertise in technical specifications and debugging to optimize code performance and improve system reliability as a Full-Stack Java Developer.</li>
          </ul>
        </div>
        <div className="job">
          <h3>Java Full-Stack Developer - Clinton Health Access Initiative</h3>
          <p>(Apr 2019 - Aug 2021)</p>
          <ul>
          <li>Developed a Hepatitis B & C tracking system and Android app for 100 healthcare providers, improving analytics efficiency by 40%.</li>
          <li>Integrated data import/export for migration, streamlining data flows into the dashboard, enhancing analytics efficiency by 40%.</li>
          <li>Engineered graphical data representations with Highcharts and integrated mobile app data, facilitating better patient management.</li>
          <li>Provided on-site user support and authored manuals, improving user onboarding, and reducing initial support tickets by 30%.</li>
          </ul>
        </div>
        <div className="job">
          <h3>Java Full-Stack Developer - Save The Children</h3>
          <p>(Sept 2016 - Mar 2019)</p>
          <ul>
          <li>Created a data driven admin dashboard and Android app for field operations, leveraging Java, Spring Boot restful API services, and MySQL.</li>
          <li>Implemented reporting and data visualization features with Highcharts, allowing real-time decision-making for project managers, increasing operational insights by 50%.</li>
          <li>Deployed systems on Digital Ocean, ensuring high availability and scalability, with optimized cloud infrastructure.</li>
          <li>Integrated Spring Security for robust authorization and authentication, implementing role-based access controls and secure login and logout flows to enhance application security and access management.</li>
          </ul>
        </div>
        <div className="job">
          <h3>Java Developer - Myanmar Information Technology</h3>
          <p>(Dec 2012 - Oct 2015)</p>
          <ul>
          <li>Developed CRM and HRM applications using Windows Server, J2EE, GWT, Eclipse, and Apache Tomcat Server, ensuring high performance and reliability.</li>
          <li>Hands-on experience with SQL/ PL/SQL scripts and good understanding of relational database; creating tables, queries, stored procedures, triggers and functions, optimize performance and legacy data migration.</li>
          <li>Managed Software Development Life Cycle (SDLC) through system integration & user acceptance testing, configuration management and promotion of code to Production.</li>
          <li>Led the migration of the payroll application from MS VB to a Java-based web platform, reducing processing time by 40%.</li>
          <li>Created customized reports with JasperReports, aligning outputs with business requirements, and enhancing reporting accuracy.</li>
          <li>Implemented efficient data structures and algorithms to optimize data processing and improve overall system performance</li>
          </ul>
        </div>
      </section>

      <section className="card education">
      <h2>Education</h2>
      <div className="education">
        <h3>Post-Graduate Certificate in Web Development</h3> 
        <p>Conestoga College, Kitchener, ON (September 2021 – December 2022)</p>
      </div>
      <div className="education">
        <h3>Bachelor of Computer Science (Hons)</h3> 
        <p>University of Computer Studies Yangon (December 2008 – November 2012)</p>
        <a href="https://badges.wes.org/Evidence?i=fabb66be-f994-4498-b924-a69a2881779a&type=ca">Verify Here</a>
      </div>
      <div className="education">
        <h3>AWS Certified Developer - Associate</h3> 
        <a href="https://www.credly.com/badges/b1e265e0-2d30-475f-b9e7-bed14b0f38af/linked_in?t=sl5kce">Verify Here</a>
      </div>
       <div className="education">
        <h3>Kubernetes and Cloud Native Associate(KCNA)</h3> 
        <a href="https://www.credly.com/badges/347d6947-6d9f-4037-b9fb-f35f6ab0f5ad">Verify Here</a>
      </div>
      </section>
      </>
      )}

{activeTab === "projects" && (
      <section className="card projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Enterprise Imaging System</h3>
          <p>The Enterprise Imaging Project was designed to enhance and modernize AGFA’s imaging solutions for healthcare providers. The project aimed to improve efficiency, scalability, and performance by extending the existing system with new functionalities, optimizing workflows, and ensuring seamless data management for medical imaging and patient records.</p>
          <p><span className="tech"><b>Technologies</b></span>: Java 17, Spring Boot, AngularJS, NgRx, RxJs, Redux, Oracle Database, Jenkins, JUnit, Mockito, Jest, Playwright</p>
        </div>
        <div className="project">
          <h3>Hepatitis B & C Patient Data System</h3>
          <p>The Hepatitis B & C Patient Data System was developed to enhance healthcare accessibility, patient tracking, and medical record management for over 100 healthcare providers. The project included a web-based system and an Android mobile application, allowing real-time data entry, monitoring, and reporting to improve disease control and treatment tracking.</p>
          <p><span className="tech"><b>Technologies</b></span>: Java, JSF, MySQL, XHTML, AWS, Microservices Architecture, Highcharts,Spring Boot, Spring Security, Android (Java), REST APIs</p>
          <div className="video-frame">
            <h4>Hepatitis B & C Patient Data Dashboard Demo</h4>
            <iframe title="Hepatitis B & C Patient Data Dashboard" width="100%" height="315" src="https://www.youtube.com/embed/T9yp3FRHfZI" style={{ border: "none" }} allowFullScreen></iframe>
          </div>
          <div className="video-frame">
            <h4>Patient Data Collection Application Demo</h4>
            <iframe title="Patient Data Collection Application" width="100%" height="315" src="https://www.youtube.com/embed/T9yp3FRHfZI" style={{ border: "none" }} allowFullScreen></iframe>
          </div>
        </div>
        <div className="project">
          <h3>Field data collection system for Education Sector</h3>
          <p>Save the Children required a field data collection system to streamline operations for community outreach programs. The project involved developing a real-time web-based admin dashboard and an Android mobile application for field workers to capture, manage, and analyze child welfare data efficiently.</p>
          <p><span className="tech"><b>Technologies</b></span>: Java, Spring Boot, Spring Security, MySQL, RESTful APIs, Android (Java/Kotlin), Highcharts, Digital Ocean</p>
        </div>
        <div className="project">
          <h3>CRM & HRM System</h3>
          <p>Myanmar Information Technology developed customized CRM (Customer Relationship Management) and HRM (Human Resource Management) applications for enterprise clients, including financial institutions and government organizations. The goal was to modernize legacy systems, streamline employee management, and improve client relationship handling through a secure and scalable web-based platform.</p>
          <p><span className="tech"><b>Technologies</b></span>: Java, J2EE, GWT, MS SQL Server, PL/SQL, Hibernate, Apache Tomcat, JasperReports</p>
        </div>
        <div className="project">
          <h3>Node.js Real-Time Chat App</h3>
          <p>Built a responsive, room-based chat application using Node.js, Express, and Socket.IO, with real-time messaging and user management. Deployed on Heroku, showcasing skills in asynchronous programming, REST integration, and cross-device UI design.</p>
          <p><span className="tech"><a href="https://htet-node-v3-chat-app-506353f056a5.herokuapp.com/">Live Demo</a></span></p>
          </div>
      </section>
)}

   

      <section className="card contact">
        <h2>Contact</h2>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/mr-htet-aung-naing-65a9b08a/" className="icon linkedin"><FaLinkedin /></a>
          <a href="https://gitlab.com/Htet_Aung_Naing" className="icon github"><FaGithub /></a>
          <a href="https://www.youtube.com/channel/UC0l02omS3b8c_W-dC62BKFg/featured" className="icon youtube"><FaYoutube /></a>
          <a href="mailto:hanmaple92@gmail.com" className="icon email"><FaEnvelope /></a>
        </div>
      </section>
    </div>
  );
}
