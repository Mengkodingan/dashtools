import { useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'

import Aside from '../compo/aside'
import Breadcrumbs from '../compo/breadcrumbs'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home(props) {

  return (
    <>
      <Aside>
        <Breadcrumbs>
          <li><a>Dashboard</a></li>
        </Breadcrumbs>
    
        <div className='text-center'>
          <p className='text-4xl font-extrabold'>{props.ip_detail.ip}</p>
          <p className='font-normal'><i className="fa-solid fa-location-dot"></i> {props.ip_detail.city}, {props.ip_detail.region}, {props.ip_detail.country}</p>
        </div>
        </Aside>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://ipinfo.io/json`)
  const ip_detail = await res.json()

  return {
    props: {
      ip_detail,
    },
  }
}
