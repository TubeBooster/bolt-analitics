import { Box, Text } from '@chakra-ui/react'
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const locations = [
  { name: 'New York', lat: 40.7128, lng: -74.0060, listeners: 150000 },
  { name: 'London', lat: 51.5074, lng: -0.1278, listeners: 120000 },
  { name: 'Tokyo', lat: 35.6762, lng: 139.6503, listeners: 90000 },
  { name: 'Berlin', lat: 52.5200, lng: 13.4050, listeners: 75000 }
]

export const GeoDistribution = () => {
  return (
    <Box bg="gray.800" p={6} borderRadius="lg" h="500px">
      <Text fontSize="lg" fontWeight="bold" mb={4}>Geographic Distribution</Text>
      <Box h="400px">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
          {locations.map((location) => (
            <CircleMarker
              key={location.name}
              center={[location.lat, location.lng]}
              radius={Math.sqrt(location.listeners) / 100}
              fillColor="#4299E1"
              color="#4299E1"
              weight={1}
              opacity={0.8}
              fillOpacity={0.6}
            >
              <Popup>
                {location.name}: {(location.listeners / 1000).toFixed(1)}K listeners
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </Box>
    </Box>
  )
}
