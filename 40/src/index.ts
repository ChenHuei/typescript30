import { districts } from './districtData';
import { Districts } from './data';

import L, { LayerGroup } from 'leaflet'
import mapConfig from './main.config'
import fetchData from './fetchData'


const { coordinate, zoomLevel, tileLayerURL, containerID } = mapConfig

const map = L.map(containerID)
const $selectDistrict = <HTMLSelectElement | null>(document.querySelector('#select-district'))

let markerLayer: LayerGroup
let currentDistrict = $selectDistrict?.value as Districts

districts.forEach(item => {
    const $optionTag = document.createElement('option')
    
    $optionTag.value = item
    $optionTag.innerText = item

    $selectDistrict?.appendChild($optionTag)
})

$selectDistrict?.addEventListener('change', event => {
    const { value } = event.target as HTMLSelectElement
    currentDistrict = value as unknown as Districts

    markerLayer.remove()

    updateYouBikeMap(currentDistrict)
})


map.setView(coordinate, zoomLevel)

L.tileLayer(tileLayerURL).addTo(map)

updateYouBikeMap(currentDistrict)

function updateYouBikeMap(district: Districts): void {
    fetchData().then(res => {
        
        const data = res.filter(item => item.regionName === district)
    
        const markerList = data.map(element => {
            const { latLng,regionName, stopName, totalBikers, availableBikes} = element
    
            const marker = new L.Marker(latLng)
    
            marker.bindTooltip(`
                <p>${regionName} - ${stopName}</p>
                <p>總數：${totalBikers}</p>
                <p>可用：${availableBikes}</p>
            `)
    
            marker.on('mouseover', () => {
                marker.openTooltip()
            })
            marker.on('mouseleave', () => {
                marker.closeTooltip()
            })

            return marker
        })
    
        markerLayer = L.layerGroup(markerList)
    
        markerLayer.addTo(map)
    })
}