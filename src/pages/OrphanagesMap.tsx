import React from 'react'
import { Link } from 'react-router-dom'
import { Map, TileLayer } from 'react-leaflet'
import { FiPlus } from 'react-icons/fi'

import '../styles/pages/orphanagesmap.css'
import 'leaflet/dist/leaflet.css'

import MapMarker from '../images/mapmarker.svg'


function OrphanagesMap (){
  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={ MapMarker } alt="Happy Logo"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Canoas</strong>
          <span>Rio Grande do Sul</span>
        </footer>
      </aside>
      <Map
        center={[-29.9152737,-51.2478346]}
        zoom={15}
        style={{ width: '100%', height:'100%' }}
      >
        {/* <TileLayer url="http://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF"/>
      </Link>
    </div>
  )}

export default OrphanagesMap