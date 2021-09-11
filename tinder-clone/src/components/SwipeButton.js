import React from 'react'
import { IconButton } from '@material-ui/core'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import FavoriteIcon from '@material-ui/icons/Favorite'
import StarIcon from '@material-ui/icons/Star'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import './SwipeButton.css'


export default function SwipeButton() {
    return (
        <div className='swipeButtons' >
            <IconButton className='swipeButton'>
                <ReplayIcon fontSize='large' className='replay' />
            </IconButton>
            <IconButton className='swipeButton'>
                <CloseIcon fontSize='large' className='close'/>
            </IconButton >
            <IconButton className='swipeButton'>
                <StarIcon fontSize='large' className='star'/>
            </IconButton>
            <IconButton className='swipeButton'>
                <FavoriteIcon fontSize='large' className='favorite'/>
            </IconButton>
            <IconButton className='swipeButton'>
                <FlashOnIcon fontSize='large' className='flash'/>
            </IconButton>
        </div>
    )
}
