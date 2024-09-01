'use client'

import { useFileInput } from './root'
import autoAnimate from '@formkit/auto-animate'
import { useEffect, useRef } from 'react'
import { FileItem } from './FileItem'
export function FileList() {
  const { files } = useFileInput()
  const parent = useRef(null)
  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])
  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((files) => {
        return (
          <FileItem
            key={files.name}
            name={files.name}
            size={files.size}
            state="complete"
          />
        )
      })}
    </div>
  )
}
