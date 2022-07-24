import React from 'react'
import './searchResult.css';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function SearchResults({img,location,title,description,star,price,total}) {
  return (
    <div className='searchResult'>
        <img src={img} alt ='baka' />
        <FavoriteBorderIcon className="searchResult_heart" />
        <div className='searchResult_info'>
            <div className='searchResult_infoTop'>
                <p>{location}</p>
                <h3>{title}</h3>
                <p>___</p>
                <p>{description}</p>
            </div>
            <div className='searchResult_infoBottom'>
                <div className="searchResult_stars">
                    <StarIcon className='searchResult_star' />
                    <p><strong>{star}</strong></p>
                </div> 
                <div className='searchResult_price'>
                    <h2>{price}</h2>
                    <p>{total}</p>
                </div>   
            </div>
        </div> 
    </div>
  )
}

export default SearchResults