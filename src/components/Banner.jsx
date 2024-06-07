import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[80vh] bg-cover bg-center flex items-end ' style={{backgroundImage : `url(https://www.koimoi.com/wp-content/new-galleries/2022/04/fast-furious-10-could-reportedly-lose-up-to-1-million-per-day-due-to-the-shutdown-001.jpg)`}}>
        <div className='text-white text-xl bg-blue-900/60 text-center w-full p-3  '>FastX</div>
    </div>
  )
}

export default Banner