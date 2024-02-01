'use client'

import { type PropsWithChildren, type ComponentProps } from 'react'
import { createPortal } from 'react-dom'

export function Portal ({ children }: PropsWithChildren) {
  return createPortal(children, document.body)
}