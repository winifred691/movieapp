import ArrowBackOutlined from '@mui/icons-material/ArrowBackIosOutlined'
import React from 'react'
import { Link } from 'react-router-dom'
import "./watch.scss"

const Watch = () => {
  return (
    <div className='watch'>
        <div className='back'>
            <ArrowBackOutlined/>
            <Link to="/"  className='link'>Home</Link>
        </div>
        {/* <video className="video" autoPlay progress controls format="mp4" src="https://youtu.be/ZVPpPBJ3EpM"/> */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/B2_Asqojinc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default Watch