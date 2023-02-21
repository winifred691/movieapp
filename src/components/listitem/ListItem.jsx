import React, { useState } from 'react'
import './ListItem.scss'
import AddIcon from '@mui/icons-material/Add';
import PlayArrow from "@mui/icons-material/PlayArrow";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

const infopic = require ('../../asset/toy story.png')
const ListItem = ({index}) =>  {
  const [isHovered,setIsHovered]= useState(false);
  const trailer = ""
  return (
    <div className='listItem' style={{left:isHovered && index * 225 - 50 + index * 2.5}} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
      <img src={infopic} alt='wct'/>
      {isHovered && (
      <>
      <video src={trailer} autoPlay={true} loop/>
      <div className="iteminfo">
        <div className="icons">
        <PlayArrow className='icon'/>
        <AddIcon className='icon'/>
        <ThumbUpAltOutlinedIcon className='icon'/>
        <ThumbDownOutlinedIcon  className='icon'/>
        </div>
<div className="itemInfoTop">
  <span>1 hour 14mins</span>
  <span className='limit'>+16</span>
  <span>1999</span>
</div>
<div className="desc">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem temporibus deleniti magni sequi quo amet minima rem iusto ut, beatae velit eaque ex nihil facere fuga ducimus? Expedita, illo possimus!
</div>
<div className="genre">Action</div>
      </div> </>
      )}
    </div>
  )
}

export default ListItem