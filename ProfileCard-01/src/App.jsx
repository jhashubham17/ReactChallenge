import React from 'react'
import './App.css'

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Graphic Designing & Figma",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        <SkillList />
      </div>
    </div>
  )
}
function Avatar() {
  return (
    <img className='avatar' src='./IMG_0379.JPG' alt='image' />
  )
}

function Intro() {
  return (
    <div>
      <h1>Shubham jha</h1>
      <p>Web Developer & Graphic Designer creating visually stunning, functional, and responsive digital experiences. Expert in React, UI/UX, and modern web technologies. Passionate about innovation and contributing to GitHub projects.</p>
    </div>
  )
}

function SkillList() {
  return (
    <div className='skill-list'>
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  )
}

function Skill({ skill, color, level }) {
  return (
    <div className='skill' style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👌"}
        {level === "intermediate" && "🤘"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  )
}
export default App
