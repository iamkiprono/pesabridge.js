// import { details, payMentRes } from "../types/types";

// const lipaNaMpesa = async (details: details) => {
//   try {
//     const res = await fetch("https://pesabridge.onrender.com/stk/stkpush", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         phone: details.phoneNumber,
//         _shortcode: details.shortcode,
//         amount: details.amount,
//         environment: details.environment,
//         callBackURL: details.callBackURL,
//       }),
//     });

//     const payMent: payMentRes = await res.json();

//     if (!res.ok) {
//       throw Error(payMent.error);
//     }
//     return {
//       MerchantRequestID: payMent.MerchantRequestID,
//       CheckoutRequestID: payMent.CheckoutRequestID,
//       ResponseCode: payMent.ResponseCode,
//       ResponseDescription: payMent.ResponseDescription,
//       CustomerMessage: payMent.CustomerMessage,
//     };
//   } catch (error) {
//     if (error instanceof Error)
//       return {
//         error,
//       };
//   }
// };
