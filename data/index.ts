import { v4 as uuidv4 } from "uuid"
import { banner1, bubleTea } from "assets"
import { DataFooter, DataOrder, MenuItem } from "types"

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
        describe:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        describe:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        describe:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        describe:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        describe:
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
        describe:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        describe:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        describe:
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
        describe:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        describe:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        describe:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        describe:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        describe:
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
        describe:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        describe:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        describe:
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
        describe:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        describe:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        describe:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        describe:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        describe:
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
        describe:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        describe:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
        thumbnail: bubleTea,
        name: "Milk Foam Green Tea",
        price: 9.04,
      },
      {
        id: uuidv4(),
        type: "item",
        describe:
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
    name: "Size",
    data: [
      {
        value: "large",
        name: "Large",
      },
      {
        value: "medium",
        name: "Medium",
      },
      {
        value: "small",
        name: "Small",
      },
    ],
  },
  {
    section: "ice-level",
    name: "Ice level",
    data: [
      {
        value: "regular-ice",
        name: "Regular",
      },
      {
        value: "less-ice",
        name: "Less ice",
      },
      {
        value: "no-ice",
        name: "No ice",
      },
    ],
  },
  {
    section: "sugar-level",
    name: "Sugar level",
    data: [
      {
        value: "regular-sugar",
        name: "Regular 100%",
      },
      {
        value: "sugar-70",
        name: "70%",
      },
      {
        value: "sugar-50",
        name: "50%",
      },
      {
        value: "sugar-30",
        name: "30%",
      },
      {
        value: "no-sugar",
        name: "No sugar",
      },
    ],
  },
  {
    section: "extra-topping",
    name: "Extra topping",
    data: [
      {
        value: "pearl",
        name: "Pearl",
        price: 0.5,
      },
      {
        value: "pudding",
        name: "Pudding",
        price: 0.5,
      },
      {
        value: "grass-jelly",
        name: "Grass Jelly",
        price: 0.5,
      },
      {
        value: "aloe-vera",
        name: "Aloe Vera",
        price: 0.5,
      },
    ],
  },
]
