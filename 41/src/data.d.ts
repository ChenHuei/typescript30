import { LatLngExpression } from 'leaflet';

// 所有行政區
declare type Districts = '中正區' | '大同區' | '中山區' | '松山區' | '大安區' | '萬華區' | '信義區' | '士林區' | '北投區' | '內湖區' | '南港區' | '文山區';

// open data 架構
declare type SourceUBikeInfo = {
  sno: string         // 站點代號
  sna: string         // 站點名稱
  tot: string         // 站點總停車格
  sbi: string         // 站點目前車輛數量
  sarea: string       // 站點區域
  mday: string        // 更新時間
  lat: string         // 緯度
  lng: string         // 經度
  ar: string          // 地區
  sareaen: string     // 站點區域 (英)
  snaen: string       // 站點名稱 (英)
  aren: string        // 地址 (英)
  bemp: string        // 空位數量
  acr: string         // 全站禁用狀態
}

// 實際(希望處理)架構
declare type UBikeInfo = {
  availableBikes: number      // 目前數量 - sbi
  totalBikes: number         // 所有數量 - tot
  latLng: LatLngExpression    // 經緯度
  regionName: Districts       // 站點區域 - sarea
  stopName: string            // 站點名稱 - sna
}
