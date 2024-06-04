import { Select } from "flowbite-react"
import React from "react"

const AvailableTimeForPickup = () => {
  return (
    <div className="available_time_pickup mb-4 w-full">
      <div className="title mb-1 text-sm font-bold">Available time for pickup</div>
      <Select id="countries" required>
        <option>As soon as possible</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
      </Select>
    </div>
  )
}

export default AvailableTimeForPickup
