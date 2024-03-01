import React from 'react'
import Alerts from '../Alerts/Alerts'
import Filters from '../Filters/Filters'

export default function Layout() {
  return <>
    <div className="row p-0 m-0">
      <div className="col-lg-9">
        <Alerts/>
      </div>
      <div className="col-lg-3">
        <Filters/>
      </div>
    </div>
  </>
}
