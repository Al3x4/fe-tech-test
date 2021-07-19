export type RouteI = {
  path: string
  component: React.FC<any>
  exact?: boolean
}

export interface DatumI {
  name: string
  totalViews: {
    total: number
    'sky-go': number
    'now-tv': number
    peacock: number
  }
  prevTotalViews: {
    total: number
    'sky-go': number
    'now-tv': number
    peacock: number
  }
  description: string
  duration: number
  assetImage: string
  videoImage: string
  provider: string
  genre: string[]
}

export interface TimeseriesDatumI {
  timestamp: number
  value: number
}
