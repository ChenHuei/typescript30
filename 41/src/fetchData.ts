import { LatLngExpression } from 'leaflet';
import { SourceUBikeInfo, UBikeInfo } from './data';

const API_URL = 'https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json'

export default function fetchBikeDate(url = API_URL) {
    return fetch(url).then(res => res.json()).then(({ retVal }) => {
        return Object.keys(retVal).map(key => retVal[key] as SourceUBikeInfo)
    }).then(res => {
        return res.map(item => {
            const { sbi, tot, lat, lng, sarea, sna } = item

            return {
                availableBikes: parseInt(sbi),
                totalBikes: parseInt(tot),
                latLng: <LatLngExpression>[parseFloat(lat), parseInt(lng)],
                regionName: sarea,
                stopName: sna
            } as unknown as UBikeInfo
        })
    })
}