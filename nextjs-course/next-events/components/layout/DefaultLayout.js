import { Fragment } from 'react'

import MainHeader from './MainHeader'

function DefaultLayout({ children }) {
  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  )
}

export default DefaultLayout
