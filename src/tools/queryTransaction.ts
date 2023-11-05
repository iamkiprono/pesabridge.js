import { queryResponse, queryTransactionStatus } from "../types/types";

export const queryTransaction = async (details: queryTransactionStatus) => {
  try {
    const res = await fetch("https://pesabridge.onrender.com/stk/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        passkey: details.passkey,
        shortcode: details.shortcode,
        environment: details.environment,
        CheckoutRequestID: details.CheckoutRequestID,
      }),
    });

    const query: queryResponse = await res.json();
    if (!res.ok) {
      throw Error(query.error);
    }
    return {
      ResponseCode: query.ResponseCode,
      ResponseDescription: query.ResponseDescription,
      MerchantRequestID: query.MerchantRequestID,
      CheckoutRequestID: query.CheckoutRequestID,
      ResultCode: query.ResultCode,
      ResultDesc: query.ResultDesc,
    };
  } catch (error) {
    if (error instanceof Error)
      return {
        error,
      };
  }
};
