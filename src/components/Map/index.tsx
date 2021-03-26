import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => (
  <MapContainer
    center={[-15.504991, -45.396898]}
    zoom={4.5}
    style={{ height: '100%', width: '100%' }}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[-15.504991, -45.396898]}>
      <Popup>Serra das Araras - MG</Popup>
    </Marker>
  </MapContainer>
)

export default Map
