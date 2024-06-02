import { Label, Radio, Textarea, TextInput } from "flowbite-react"
import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { dataOrder } from "data"

interface IFormInput {
  size: string
  ice_level: string
  sugar_level: string
  extra_topping: string
  quantity: number
  note: string
}

const OrderForm = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      size: "large",
      ice_level: "regular_ice",
      sugar_level: "regular_sugar",
      extra_topping: "no",
      quantity: 1,
      note: "",
    },
  })

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {dataOrder.map((item) => {
        return (
          <div className="order_form_group" key={item.section}>
            <Label className="text-xl">{item.label}</Label>
            {item.data.map((data) => (
              <div key={data.value} className="my-1 flex items-center gap-2 border p-2">
                <Radio id={data.value} value={data.value} {...register(item.section as keyof IFormInput)} />
                <Label htmlFor={data.value}>
                  {data.label}
                  <span>{data.price && ` - ${data.price}`}</span>
                </Label>
              </div>
            ))}
          </div>
        )
      })}
      <div className="order_form_group">
        <Label className="text-xl">Quantity</Label>
        <TextInput type="number" min={1} max={20} step={1} {...register("quantity")} />
      </div>
      <div className="order_form_group">
        <Label className="text-xl">Note</Label>
        <Textarea {...register("note")} />
      </div>
    </form>
  )
}

export default OrderForm
