import React from 'react'

const ProjectCardExpanded = ({ children, show, setShow }) => {
  const content = show && (
    <div className="projectDetails">
        <div className="ProjectPage">
            <button
                className="closeModal"
                type="button"
                onClick={() => setShow(false)}
            >
            </button>
            <div className="ProjectDetailsCont">{children}</div>
        </div>
    </div>
  )
  return content
}

export default ProjectCardExpanded
