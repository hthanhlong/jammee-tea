import React from "react"
import { dataFooter } from "data"

const Footer = () => {
  const renderContent = (data: any) => {
    switch (data.id) {
      case "opening-hours":
        return (
          <div>
            <h2>{data.title}</h2>
            <ul>
              {data.data.map((item: any) => (
                <li key={item.id}>
                  {item.day}: {item.time}
                </li>
              ))}
            </ul>
          </div>
        )
      case "pickup":
        return (
          <div>
            <h2>{data.title}</h2>
            <p>{data.data.info}</p>
          </div>
        )
      case "languages":
        return (
          <div>
            <h2>{data.title}</h2>
          </div>
        )
      case "payment-methods":
        return (
          <div>
            <h2>{data.title}</h2>
            <ul>
              {data.data.map((item: any) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        )

      case "address":
        return (
          <div>
            <h2>{data.title}</h2>
            <p>{data.data.info}</p>
          </div>
        )
      case "phone":
        return (
          <div>
            <h2>{data.title}</h2>
            <p>{data.data.info}</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <footer className="flex gap-24">
      {dataFooter.map((item) => (
        <div key={item.id}>{renderContent(item)}</div>
      ))}
    </footer>
  )
}

export default Footer
