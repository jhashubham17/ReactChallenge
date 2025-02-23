import { useState } from 'react'
import './App.css'

const skills = [

  {
    skill: "JavaScript",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Full-Stack & DevOps",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "Graphic design",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Figma / Adobe XD",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
            for each web dev skill that you have,
            customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="/shubham.JPG" alt="Shubham" />;
}

function Intro() {
  return (
    <div>
      <h1>Shubham Jha</h1>
      <p>
        "Passionate web developer specializing in modern, responsive, and user-friendly websites. Experienced in front-end and back-end technologies, with a keen eye for design and performance optimization. Always exploring new frameworks and tools to create seamless digital experiences."
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}


export default App
