import { type PropsWithChildren } from "react"

export default function LayoutAuth ({ children }: PropsWithChildren) {
  return (
    <div className="w-[calc(100vw-2rem)] overflow-auto h-[calc(100vh-2rem)] my-2 flex justify-center items-center">
    <div className="h-full w-full flex items-center justify-center">
      {children}
    </div>
  </div>
  )
}