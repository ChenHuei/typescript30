import { LatLngExpression } from 'leaflet';
import { Districts } from './data';

export const districts: Districts[] = [
    '中正區',
    '大同區',
    '中山區',
    '松山區',
    '大安區',
    '萬華區',
    '信義區',
    '士林區',
    '北投區',
    '內湖區',
    '南港區',
    '文山區'
]

export const districtLatLngMap = new Map<Districts, LatLngExpression>([
    ['中正區', [25.0361013, 121.5169923]],
    ['大同區', [25.0630815, 121.5142474]],
    ['中山區', [25.0685018, 121.5280918]],
    ['松山區', [25.0562420, 121.5573418]],
    ['大安區', [25.0274139, 121.5372087]],
    ['萬華區', [25.0275628, 121.4973410]],
    ['信義區', [25.0327753, 121.5715193]],
    ['士林區', [25.0866494, 121.5198019]],
    ['北投區', [25.1211862, 121.5075251]],
    ['內湖區', [25.0713177, 121.5866103]],
    ['南港區', [25.0557703, 121.6072372]],
    ['文山區', [24.9982971, 121.5544842]]
])