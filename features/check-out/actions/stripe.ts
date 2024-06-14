"use server"
import type { Stripe } from "stripe"
import { stripe } from "libs/stripe/stripe"
import { CURRENCY } from "../data"
import { formatAmountForStripe } from "../utils/stripe-helper"

// export async function createCheckoutSession(
//   data: FormData
// ): Promise<{ client_secret: string | null; url: string | null }> {
//   const ui_mode = data.get("uiMode") as Stripe.Checkout.SessionCreateParams.UiMode

//   // const origin: string = headers().get("origin") as string
//   const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create({
//     mode: "payment",
//     submit_type: "donate",
//     line_items: [
//       {
//         quantity: 1,
//         price_data: {
//           currency: CURRENCY,
//           product_data: {
//             name: "Custom amount donation",
//           },
//           unit_amount: formatAmountForStripe(Number(data.get("amount") as string), CURRENCY),
//         },
//       },
//     ],
//     ui_mode,
//   })

//   return {
//     client_secret: checkoutSession.client_secret,
//     url: checkoutSession.url,
//   }
// }

export async function createPaymentIntent(data: FormData): Promise<{ client_secret: string }> {
  const paymentIntent: Stripe.PaymentIntent = await stripe.paymentIntents.create({
    amount: formatAmountForStripe(Number(data.get("amount") as string), CURRENCY),
    automatic_payment_methods: { enabled: true },
    currency: CURRENCY,
  })

  return { client_secret: paymentIntent.client_secret as string }
}
