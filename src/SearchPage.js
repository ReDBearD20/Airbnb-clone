import { Button } from '@mui/material'
import React from 'react'
import './SearchPage.css'
import SearchResults from './SearchResults'
function SearchPage() {
  return (
    <div className="SearchPage">
        <div className='searchPage_info'>
          <p>62 stays . 26 august to 30 august .2 guest</p>
          <h1>Stays nearby</h1>
          <Button
          variant='outlined'>Cancellation Flexibility</Button>
          <Button
          variant='outlined'>Type of place</Button>
          <Button
          variant='outlined'>Price</Button>
          <Button
          variant='outlined'>Rooms and beds</Button>
          <Button
          variant='outlined'>More filters</Button>

        </div>
        <SearchResults
        img='https://a0.muscache.com/im/pictures/c0ca05a9-d226-440a-90e6-46f86ccbedd7.jpg?im_w=720'
        location='Private room in center of London'
        title='Stay at this spacious Edwardian House'
        description='1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . wifi . Kitchen . Washing Machine'
        star={4.73}
        price='$30 / night'
        total='$119 total' />
        <SearchResults
        img='https://a0.muscache.com/im/pictures/6c77fd63-ea25-4eb5-ae1d-71bae29a2ee2.jpg?im_w=720'
        location='Private room in center of London'
        title='Stay at this spacious Edwardian House'
        description='1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . wifi . Kitchen . Washing Machine'
        star={4.73}
        price='$30 / night'
        total='$119 total' />
    </div>
  )
}

export default SearchPage