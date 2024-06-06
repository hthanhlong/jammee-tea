import { TimePickUp } from "interfaces/common"

export const MAX_QUANTITY_OF_ORDER = 20

export const tips = [
  {
    value: 1.05,
    label: "5%",
  },
  {
    value: 1.1,
    label: "10%",
  },
  {
    value: 1.15,
    label: "15%",
  },
  {
    value: 1.2,
    label: "20%",
  },
  {
    value: 1,
    label: "none",
  },
]

export const availableTimeForPickup: TimePickUp[] = [
  {
    startHour: 10,
    startMinute: 0,
    value: "10:00am_10:30am",
    label: "10:00am - 10:30am",
  },
  {
    startHour: 10,
    startMinute: 30,
    value: "10:30am_11:00am",
    label: "10:30am - 11:00am",
  },
  {
    startHour: 11,
    startMinute: 0,
    value: "11:00am_11:30am",
    label: "11:00am - 11:30am",
  },
  {
    startHour: 11,
    startMinute: 30,
    value: "11:30am_12:00pm",
    label: "11:30am - 12:00pm",
  },
  {
    startHour: 12,
    startMinute: 0,
    value: "12:00pm_12:30pm",
    label: "12:00pm - 12:30pm",
  },
  {
    startHour: 12,
    startMinute: 30,
    value: "12:30pm_1:00pm",
    label: "12:30pm - 1:00pm",
  },
  {
    startHour: 13,
    startMinute: 0,
    value: "1:00pm_1:30pm",
    label: "1:00pm - 1:30pm",
  },
  {
    startHour: 13,
    startMinute: 30,
    value: "1:30pm_2:00pm",
    label: "1:30pm - 2:00pm",
  },
  {
    startHour: 14,
    startMinute: 0,
    value: "2:00pm_2:30pm",
    label: "2:00pm - 2:30pm",
  },
  {
    startHour: 14,
    startMinute: 30,
    value: "2:30pm_3:00pm",
    label: "2:30pm - 3:00pm",
  },
  {
    startHour: 15,
    startMinute: 0,
    value: "3:00pm_3:30pm",
    label: "3:00pm - 3:30pm",
  },
  {
    startHour: 15,
    startMinute: 30,
    value: "3:30pm_4:00pm",
    label: "3:30pm - 4:00pm",
  },
  {
    startHour: 16,
    startMinute: 0,
    value: "4:00pm_4:30pm",
    label: "4:00pm - 4:30pm",
  },
  {
    startHour: 16,
    startMinute: 30,
    value: "4:30pm_5:00pm",
    label: "4:30pm - 5:00pm",
  },
  {
    startHour: 17,
    startMinute: 0,
    value: "5:00pm_5:30pm",
    label: "5:00pm - 5:30pm",
  },
  {
    startHour: 17,
    startMinute: 30,
    value: "5:30pm_6:00pm",
    label: "5:30pm - 6:00pm",
  },
  {
    startHour: 18,
    startMinute: 0,
    value: "6:00pm_6:30pm",
    label: "6:00pm - 6:30pm",
  },
  {
    startHour: 18,
    startMinute: 30,
    value: "6:30pm_7:00pm",
    label: "6:30pm - 7:00pm",
  },
  {
    startHour: 19,
    startMinute: 0,
    value: "7:00pm_7:30pm",
    label: "7:00pm - 7:30pm",
  },
  {
    startHour: 19,
    startMinute: 30,
    value: "7:30pm_8:00pm",
    label: "7:30pm - 8:00pm",
  },
  {
    startHour: 20,
    startMinute: 0,
    value: "8:00pm_8:30pm",
    label: "8:00pm - 8:30pm",
  },
]
