import React from 'react'
import EventCard from '../../Evenements/EventCard'
import Navbar from '../home/Navbar'
import Footer from '../home/Footer'

function MesEvenement() {
  return (
 <><Navbar/>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 my-8">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
        <Footer/>
 </>
 
  )
}

export default MesEvenement
