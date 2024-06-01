import { v4 as uuidv4 } from "uuid"
import { banner1, bubleTea } from "assets"
import { DataFooter, MenuItem } from "types"

export const NavItems = [
  {
    id: 1,
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
    id: "payment-methods",
    title: "Payment Methods",
    data: [
      {
        id: 1,
        name: "Visa",
        icon: "visa",
      },
      {
        id: 2,
        name: "Mastercard",
        icon: "mastercard",
      },
      {
        id: 3,
        name: "American Express",
        icon: "amex",
      },
      {
        id: 4,
        name: "Paypal",
        icon: "paypal",
      },
    ],
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
