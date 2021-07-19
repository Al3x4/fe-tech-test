import { Suspense } from 'react'

import { Content } from 'views'
import { Skeleton, Layout } from 'components'

function ContentPage() {
  return (
    <Layout>
      <Suspense fallback={<Skeleton />}>
        <Content />
      </Suspense>
    </Layout>
  )
}

export default ContentPage
