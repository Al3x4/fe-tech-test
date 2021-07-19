import { Suspense } from 'react'

import { Overview } from 'views'
import { Skeleton, Layout } from 'components'

function OverviewPage() {
  return (
    <Layout>
      <Suspense fallback={<Skeleton />}>
        <Overview />
      </Suspense>
    </Layout>
  )
}

export default OverviewPage
