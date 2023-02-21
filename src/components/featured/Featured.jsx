import React from 'react'
import './Featured.scss'
import PlayArrow from "@mui/icons-material/PlayArrow";
import InfoOutlined from "@mui/icons-material/InfoOutlined";

const featurepic = require ('../../asset/headshot.jpg')
const infopic = require ('../../asset/toy story.png')
const Featured = ({type}) => {
  return (
    <div className='featured'>
         {type && (
            <div className='category'>
                <span>{type === 'movie' ? 'Movies': 'Shows'}</span>
                <select name='genre' id= 'genre'>
                    <option>Genre</option>
                    <option value='adventure'>Adventure</option>
                    <option value='comedy'>Comedy</option>
                    <option value='crime'>Crime</option>
                    <option value='fantasy'>Fantasy</option>
                    <option value='historical'>Historical</option>
                    <option value='horror'>Horror</option>
                    <option value='romance'>Romance</option>
                    <option value='thriller'>Thriller</option>
                    <option value='western'>Western</option>
                    <option value='animation'>Animation</option>
                </select>
            </div>
         ) }

        <img src={featurepic}  alt='guy'/>
        <div className="info">
            <img src={infopic} alt='movielogo'/>
            <span className='desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corrupti voluptate minima, dicta exercitationem quibusdam molestiae <br/> ab? Qui iste voluptatum nihil. Quidem nemo minima voluptatem quaerat, atque assumenda quasi provident.
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>info</span>
                </button>
                
            </div>
        </div>
        </div>
  )
}

export default Featured


