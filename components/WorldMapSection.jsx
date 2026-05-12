'use client'

import 'leaflet/dist/leaflet.css'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

// Fix Marker Icons
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
})

const locations = [
  {
    name: 'Ajman, UAE',
    position: [25.3940927, 55.4314831]
  },
  {
    name: 'Bengaluru, India',
    position: [12.9920663, 77.7087676]
  },
  {
    name: 'Hawkesbury, Ontario',
    position: [46.2106818, -71.4191122]
  },
  {
    name: 'Norwich, UK',
    position: [52.6409747, 1.2040937]
  },
  {
    name: 'Riyadh, Saudi Arabia',
    position: [24.7231093, 46.1633149]
  }
]

export default function WorldMapSection () {
  return (
    <section className='w-screen overflow-hidden bg-white'>
      <div className='h-100 w-full'>
        <MapContainer
          center={[35, 20]}
          zoom={3}
          scrollWheelZoom={false}
          className='h-full w-full z-0'
        >
          <TileLayer
  attribution='&copy; CARTO'
  url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
/>

          {locations.map((location, index) => (
            <Marker key={index} position={location.position}>
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  )
}
