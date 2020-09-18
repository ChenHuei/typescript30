import { LatLngExpression } from 'leaflet';
import { SourceYouBikeInfo, YouBikeInfo } from './data';

const API_URL = 'https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json'

export default function fetchBikeDate(url = API_URL) {
    return fetch(url).then(res => res.json()).then(({ retVal }) => {
        return Object.keys(retVal).map(key => retVal[key] as SourceYouBikeInfo)
    }).then(res => {
        return res.map(item => {
            const { sbi, tot, lat, lng, sarea, sna } = item

            return {
                availableBikes: parseInt(sbi),
                totalBikes: parseInt(tot),
                latLng: <LatLngExpression>[parseInt(lat), parseInt(lng)],
                regionName: sarea,
                stopName: sna
            } as unknown as YouBikeInfo
        })
    })
}