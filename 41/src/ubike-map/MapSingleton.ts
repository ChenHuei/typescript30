import L from 'leaflet'
import MapConfig from '../main.config'

export default class MapSingleton {
    public readonly map = L.map(MapConfig.containerID)

    private constructor() {
        if (this.map === null) {
            console.warn("Map isn't initialized correctly!!");
        }
    }

    private static Instance: L.Map | null = new MapSingleton().map

    static getInstance(): L.Map | null {
        return this.Instance
    }
}