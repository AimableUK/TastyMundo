import React from 'react'
import ReactMarkdown from 'react-markdown'

function ClaudeRecipe(props) {

  return (
    <div className='flex flex-col w-screen h-screen z-0 pl-24'>
      <section className='suggested-recipe-container w-fit -mt-56  flex flex-col mb-32 text-gray-200' aria-live='polite'>
        <h2>Chef Claude Recommends: </h2>
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
      </section>
    </div>
  )
}

export default ClaudeRecipe