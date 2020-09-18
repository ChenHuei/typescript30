import L from 'leaflet'
import MapInitializer from './ubike-map/MapInitializer'
import MapMarkerLayer from './ubike-map/MapMarkerLayer'
import MapSingleton from './ubike-map/MapSingleton'
import MapMarker from './ubike-map/MapMarker'
import { MapConfig } from './main.config'
import { UBikeInfo } from './data'

export default class UBikeMapFaced {
    private map: L.Map | null = MapSingleton.getInstance()
    private mapInitializer: MapInitializer
    private mapMarkerLayer: MapMarkerLayer
    
    constructor(config: MapConfig, public tooltipTemplate: (data: UBikeInfo) => string) {
        if (this.map === null) {
            throw new Error("Map isn't correctly initialized")
        }

        this.mapInitializer = new MapInitializer(this.map, config)
        this.mapMarkerLayer = new MapMarkerLayer(this.map)

        this.mapInitializer.initialize()
    }

    pinStops(data: UBikeInfo[]) {
        const markerList = data.map(item => {
            const marker = MapMarker.create(item.latLng)
            marker.bindTooltip(this.tooltipTemplate(item))

            return marker
        })

        this.mapMarkerLayer.addMarkerList(markerList)
    }

    clearStops() {
        this.mapMarkerLayer.clear()
    }
}