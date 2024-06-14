import type { Metadata } from "next"
import Wrapper from "components/Wrapper/Wrapper"
import ElementsForm from "features/check-out/components/ElementsForm"

export const metadata: Metadata = {
  title: "Donate with Elements",
}

export default function PaymentElementPage() {
  return (
    <Wrapper>
      <ElementsForm />
    </Wrapper>
  )
}
