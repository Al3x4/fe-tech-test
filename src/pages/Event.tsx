import { Event } from 'views'
import { Layout } from 'components'
import { RouteComponentProps } from 'react-router-dom'
import { DatumI } from 'models/types'

function EventPage({ location }: RouteComponentProps) {
  return (
    <Layout>
      <Event data={location.state as DatumI} />
    </Layout>
  )
}

export default EventPage
