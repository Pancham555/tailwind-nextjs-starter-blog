'use client'
import React, { MutableRefObject, useEffect, useLayoutEffect, useRef } from 'react'

const MouseCursor = () => {
  //   const cursor1 = useRef() as MutableRefObject<HTMLDivElement | null>
  //   const cursor2 = useRef() as MutableRefObject<HTMLDivElement | null>

  //   document.addEventListener('mousemove', function (e) {
  //     // @ts-ignore
  //     cursor1.current.style.cssText = 'left: ' + e.clientX + 'px; top: ' + e.clientY + 'px;'
  //     // @ts-ignore
  //     cursor2.current.style.cssText = 'left: ' + e.clientX + 'px; top: ' + e.clientY + 'px;'
  //   })

  return (
    <>
      {/* <div
        ref={cursor1}
        className="pointer-events-none fixed left-0 top-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary-500 duration-100"
      ></div>
      <div
        ref={cursor2}
        className="pointer-events-none fixed left-0 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary-500 bg-primary-500 duration-100"
      ></div> */}
    </>
  )
}

export default MouseCursor
