import L, { LatLngExpression } from 'leaflet'
import { CustomMap } from './map'

class MapMarker implements CustomMap.Marker {
    public marker: L.Marker

    private constructor(coord: LatLngExpression) {
        this.marker = L.marker(coord)
    }

    static create(coord: LatLngExpression): MapMarker {
        return new MapMarker(coord)
    }

    public bindTooltip(content: string) {
        this.marker.bindTooltip(content)

        this.marker.on('mouseover', () => {
            this.marker.openTooltip()
        })

        this.marker.on('mouseleave', () => {
            this.marker.closeTooltip()
        })
    }
}

export default MapMarker