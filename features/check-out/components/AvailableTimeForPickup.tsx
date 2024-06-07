import { Select } from "flowbite-react"
import { useEffect } from "react"
import { TimePickUp } from "interfaces/common"
import { useOrderStore } from "stores/order-store"
import { availableTimeForPickup } from "../data"

const AvailableTimeForPickup = () => {
  const { updateTimePickUp, timePickUp } = useOrderStore()

  const filterAvailableTimeForPickup = (): TimePickUp[] => {
    const date = new Date()
    const filteredAvailableTimeForPickup = availableTimeForPickup.filter((time) => {
      if (
        date.getHours() > time.startHour ||
        (date.getHours() === time.startHour && date.getMinutes() >= time.startMinute)
      ) {
        return false
      }
      return true
    })
    return filteredAvailableTimeForPickup || []
  }

  useEffect(() => {
    const filteredAvailableTimeForPickup = filterAvailableTimeForPickup()
    if (filteredAvailableTimeForPickup.length > 0) {
      // @ts-ignore
      updateTimePickUp(filteredAvailableTimeForPickup[0].value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="available_time_pickup mb-4 w-full">
      <div className="title mb-1 text-sm font-bold">Available time for pickup</div>
      <Select defaultValue={timePickUp} onChange={(e) => updateTimePickUp(e.target.value)} id="time_pick_up" required>
        {filterAvailableTimeForPickup().length > 0 ? (
          filterAvailableTimeForPickup().map((time) => (
            <option key={time.value} value={time.value}>
              {time.label}
            </option>
          ))
        ) : (
          <option value="no_time">No available time</option>
        )}
      </Select>
    </div>
  )
}

export default AvailableTimeForPickup
