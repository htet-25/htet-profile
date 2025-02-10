import React from "react";
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

  return (
    <div className="container">
      <header className="header">
        <img src={profilePic} alt="Htet Naing" className="profile-pic" />
        <h1>Htet Naing</h1>
        <p>Java Full-Stack Developer</p>
      </header>

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
