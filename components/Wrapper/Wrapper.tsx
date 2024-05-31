import React from "react"

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="wrapper h-full overflow-auto rounded-sm bg-blue-100 p-4">{children}</div>
}

export default Wrapper
