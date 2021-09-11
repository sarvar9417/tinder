import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import { IconButton } from '@material-ui/core'
import tinder_logo from '../img/tinder-logo.svg'
import ForumIcon from '@material-ui/icons/Forum';

export default function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize='large' className='header_icon'/>
            </IconButton>
            <img src={tinder_logo} className='tinder_logo' alt='tinder-logo'/>
            <IconButton>
                <ForumIcon fontSize='large' className='header_icon' />
            </IconButton>
        </div>
    )
}
