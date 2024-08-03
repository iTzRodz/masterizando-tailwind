'use client'
import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './root'

export type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)
    onFilesSelected(files)
  }
  return (
    <input
      type="file"
      name="file"
      id={id}
      className="sr-only"
      {...props}
      onChange={handleFilesSelected}
    />
  )
}
