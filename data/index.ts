import { v4 as uuidv4 } from "uuid"
import { banner1, bubleTea } from "assets"
import { DataFooter, DataOrder, MenuItem } from "interfaces/common"

export const NavItems = [
  {
    section: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Order Online",
    path: "/online-ordering",
  },
  {
    id: 3,
    name: "Cart",
    path: "/cart",
  },
  {
    id: 4,
    name: "Sign In",
    path: "/sign-in",
  },
]

export const MenuItems: MenuItem[] = [
  {
    id: 1,
    title: "Milk Foam Jammee Ahihihi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
    itemsRight: [
      {
        id: uuidv4(),
        type: "item",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
    ],
    itemsLeft: [
      {
        id: uuidv4(),
        type: "banner",
        alt: "burger",
        url: banner1,
        name: "burger",
      },
      {
        id: uuidv4(),
        type: "item",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
    ],
  },
  {
    id: 2,
    title: "Milk Tea",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
    itemsRight: [
      {
        id: uuidv4(),
        type: "item",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
    ],
    itemsLeft: [
      {
        id: uuidv4(),
        type: "banner",
        alt: "burger",
        url: banner1,
        name: "burger",
      },
      {
        id: uuidv4(),
        type: "item",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
    ],
  },
  {
    id: 3,
    title: "Milk Tea 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
    itemsRight: [
      {
        id: uuidv4(),
        type: "item",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
    ],
    itemsLeft: [
      {
        id: uuidv4(),
        type: "banner",
        alt: "burger",
        url: banner1,
        name: "burger",
      },
      {
        id: uuidv4(),
        type: "item",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
    ],
  },
]

export const dataFooter: DataFooter[] = [
  {
    id: "opening-hours",
    title: "Opening Hours",
    data: [
      {
        id: 1,
        day: "Monday - Sunday",
        time: "9:00 AM - 10:00 PM",
      },
    ],
  },
  {
    id: "pickup",
    title: "Pickup",
    data: {
      info: "Same as opening hours",
    },
  },
  {
    id: "address",
    title: "Address",
    data: {
      info: "1234 Jammee St. Jammee, CA 90210",
    },
  },
  {
    id: "phone",
    title: "Phone",
    data: {
      info: "123-456-7890",
    },
  },
]

export const dataOrder: DataOrder[] = [
  {
    section: "size",
    label: "Size",
    data: [
      {
        value: "large",
        label: "Large",
      },
      {
        value: "medium",
        label: "Medium",
      },
      {
        value: "small",
        label: "Small",
      },
    ],
  },
  {
    section: "ice_level",
    label: "Ice level",
    data: [
      {
        value: "regular_ice",
        label: "Regular",
      },
      {
        value: "less_ice",
        label: "Less ice",
      },
      {
        value: "no_ice",
        label: "No ice",
      },
    ],
  },
  {
    section: "sugar_level",
    label: "Sugar level",
    data: [
      {
        value: "regular_sugar",
        label: "Regular 100%",
      },
      {
        value: "sugar_70",
        label: "70%",
      },
      {
        value: "sugar_50",
        label: "50%",
      },
      {
        value: "sugar_30",
        label: "30%",
      },
      {
        value: "no_sugar",
        label: "No sugar",
      },
    ],
  },
  {
    section: "extra_topping",
    label: "Extra topping",
    data: [
      {
        value: "no",
        label: "No topping",
      },
      {
        value: "pearl",
        label: "Pearl",
        price: 0.54,
      },
      {
        value: "pudding",
        label: "Pudding",
        price: 0.52,
      },
      {
        value: "grass-jelly",
        label: "Grass Jelly",
        price: 0.56,
      },
      {
        value: "aloe-vera",
        label: "Aloe Vera",
        price: 0.58,
      },
    ],
  },
]
