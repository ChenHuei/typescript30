import L from 'leaflet'
import { CustomMap } from './map'

class MapMarkerLayer implements CustomMap.MarkerLayer {
    public readonly layer = L.layerGroup()

    constructor(public readonly map: L.Map) {
        this.layer.addTo(map)
    }

    addMarker(m: CustomMap.Marker) {
        m.marker.addTo(this.layer)
    }

    addMarkerList(mList: CustomMap.Marker[]) {
        mList.forEach(item => {
            this.addMarker(item)
        })
    }

    clear() {
        this.layer.clearLayers()
    }
}

export default MapMarkerLayer