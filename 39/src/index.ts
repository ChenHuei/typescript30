import L from 'leaflet'
import mapConfig from './main.config'

const { coordinate, zoomLevel, tileLayerURL, containerID } = mapConfig

const map = L.map(containerID)

map.setView(coordinate, zoomLevel)

L.tileLayer(tileLayerURL).addTo(map)