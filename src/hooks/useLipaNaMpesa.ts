import { useState } from "react";
import { details, payMentRes } from "../types/types";

type DarajaHookResponse<T> = {
  loading: boolean;
  error: Error | null;
  hasError: boolean;
  data: T | null;
  lipaNaMpesa: (x: details) => void;
};

function useLipaNaMpesa<T>(): DarajaHookResponse<payMentRes> {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<payMentRes | null>(null);

  const lipaNaMpesa = async (details: details) => {
    setLoading(true);
    setError(null);
    setData(null)

    try {
      const res = await fetch("https://pesabridge.onrender.com/stk/stkpush", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: details.phoneNumber,
          _shortcode: details.shortcode,
          amount: details.amount,
          environment: details.environment,
          callBackURL: details.callBackURL,
        }),
      });
      const payMent: payMentRes = await res.json();

      if (!res.ok) {
        throw Error(payMent.error);
      }

      setData(payMent);
    } catch (error) {
      if (error instanceof Error) setError(error);
    }

    setLoading(false);
  };

  return {
    lipaNaMpesa,
    loading,
    error,
    hasError: error !== null,
    data,
  };
}

export default useLipaNaMpesa;
