import React from 'react'

const About = (props) => {
    // component return
  return (
    <div className={`container form-control bg-${props.mode} text-${props.mode==='dark'?'light':'dark'} my-3`}>
  <div className="card-header my-1">
    <h2> About Word Counter</h2>
  </div>
  <div className="card-body my-2">
    <blockquote className="blockquote mb-0">
      <p>Word Counter is a platfrom where you can do word counter & character counter works,manipulate your text content like lowercase to uppercase,uppercase to lowercase,copy words and use it in real life</p>
      <footer className="blockquote-footer">By the admin of <cite title="Source Title">Word Counter</cite></footer>
    </blockquote>
  </div>
</div>
  )
}

export default About
