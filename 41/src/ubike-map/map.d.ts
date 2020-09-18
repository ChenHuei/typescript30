import L from 'leaflet'
import{ MapConfig } from '../main.config'

declare namespace CustomMap {
    export interface Initializer {
        readonly map: L.Map
        readonly config: MapConfig
        initialize(): void
    }

    export interface MarkerLayer {
        readonly map: L.Map
        readonly layer: L.LayerGroup
        addMarker(marker: Marker): void
        addMarkerList(markerList: Marker[]): void
        clear(): void
    }

    export interface Marker {
        marker: L.Marker
        bindTooltip(content: string): void
    }
}