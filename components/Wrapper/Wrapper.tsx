import clsx from "clsx"
import React from "react"

const Wrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const _className = clsx("wrapper relative h-full overflow-auto rounded-sm bg-blue-100", className)
  return <div className={_className}>{children}</div>
}

export default Wrapper
