import type { Stripe } from "stripe"
import Wrapper from "components/Wrapper/Wrapper"
import PrintObject from "features/check-out/components/PrintObject"
import { stripe } from "libs/stripe/stripe"

export default async function ResultPage({
  searchParams,
}: {
  searchParams: { payment_intent: string }
}): Promise<JSX.Element> {
  if (!searchParams.payment_intent) throw new Error("Please provide a valid payment_intent (`pi_...`)")

  const paymentIntent: Stripe.PaymentIntent = await stripe.paymentIntents.retrieve(searchParams.payment_intent)

  return (
    <Wrapper>
      <h2>Status: {paymentIntent.status}</h2>
      <h3>Payment Intent response:</h3>
      <PrintObject content={paymentIntent} />
    </Wrapper>
  )
}
