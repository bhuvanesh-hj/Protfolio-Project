import React from 'react'

const SkillsCard = ({text, val}) => {
  return (
    <div className='flex justify-between gap-4 items-center mt-5 backdrop-blur-xl shadow-xl border-2 p-3 rounded-lg border-gray-400 mr-2 skill-card'>
        <h3 className='font-bold text-xl text-white'>{text}</h3>
        <progress max={100} value={val} className='progress-bar'/>
    </div>
  )
}

export default SkillsCard