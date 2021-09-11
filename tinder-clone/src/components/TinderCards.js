import React, { useEffect, useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import axios from '../axios'

export default function TinderCards() {
    const [people, setPeople] = useState([])

    useEffect(()=>{
        async function fetchData() {
            const req = await axios.get('/api/tinder/card')
            console.log(req.data);
            setPeople(req.data)
        }
        fetchData()
    }, [])
    

    const swiped = (direction, nameToDelete) => {
        console.log('Delete: ' + nameToDelete)
      }
      
    const outOfFrame = (name) => {
        console.log(name + ' left the screen')
      }
    return (
        <div className='tinder_card'>
            <div className='tinder_card_container' >
                {
                    people.map((person)=>{
                        return <TinderCard
                            className='swipe'
                            key={person.name}
                            preventSwipe = {["up", "down"]}
                            onSwipe = { dir => swiped(dir, person.name)}
                            onCardLeftScreen = {() => outOfFrame(person.name)}
                        >
                            <div style={{backgroundImage: `url(${person.imgUrl})`}} className='card' >
                                <h1>{person.name}</h1>
                                {console.log('Salom')}
                            </div>
                        </TinderCard>
                    })
                }
            </div>
            
        </div>
    )
}
