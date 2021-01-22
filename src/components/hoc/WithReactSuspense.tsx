import React from 'react'
import Loader from "../Loader/Loader";


export default function withReactSuspense<WCP>(Component: React.ComponentType<WCP>) {
  return (props: WCP) => {
    return (
      <React.Suspense fallback={<Loader/>}>
        <Component {...props} />
      </React.Suspense>
    )
  }
}