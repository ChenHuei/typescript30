import L from 'leaflet'
import mapConfig from './main.config'
import fetchData from './fetchData'

const { coordinate, zoomLevel, tileLayerURL, containerID } = mapConfig

const map = L.map(containerID)

map.setView(coordinate, zoomLevel)

L.tileLayer(tileLayerURL).addTo(map)

fetchData().then(data => {
    console.log(data);
})