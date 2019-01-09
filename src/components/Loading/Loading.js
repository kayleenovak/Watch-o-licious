import React from 'react'
import './Loading.css'

export const Loading = () => {
  return (
    <section className='loading-page'>
      <img src='/cupcake.svg' className='loading-cupcake' />
      <h2 className='loading-message'>Loading, please wait...</h2>
    </section>
  )
}