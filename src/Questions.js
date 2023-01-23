import React, { useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa"

const Questions = ({ id, title, info }) => {
  const [questionIsOpen, setQuiestionIsOpen] = useState(false)

  return (
    <div className='card'>
      <section className='question'>
        <h3 className='title'>{title}</h3>
        <div
          className='icon'
          onClick={() => setQuiestionIsOpen(!questionIsOpen)}
        >
          {questionIsOpen ? <FaMinus /> : <FaPlus />}
        </div>
      </section>
      {questionIsOpen && <section className='info'>{info}</section>}
    </div>
  )
}

export default Questions
