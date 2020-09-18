import { districts } from './districtData';
import { Districts, UBikeInfo } from './data';

import mapConfig from './main.config'
import fetchData from './fetchData'
import UBikeMapFaced from './MapFaced';

const $selectDistrict = <HTMLSelectElement | null>(
    document.querySelector('#select-district')
)

const mapFaced = new UBikeMapFaced(
    mapConfig,
    function(info: UBikeInfo) {
        return `
            <p>${info.regionName} - ${info.stopName}</p>
            <p>總數: ${info.totalBikers}</p>
            <p>可用: ${info.availableBikes}</p>
        `
    }
)

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

    mapFaced.clearStops()

    updateUBikeMap(currentDistrict)
})

function updateUBikeMap(district: Districts): void {
    fetchData().then(data => {
        const selectedData = data.filter(item => item.regionName === district)
        
        mapFaced.pinStops(selectedData)
    })
}

updateUBikeMap(currentDistrict)