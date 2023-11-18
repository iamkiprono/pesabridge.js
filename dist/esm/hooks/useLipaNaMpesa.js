var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useState } from "react";
function useLipaNaMpesa() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const lipaNaMpesa = (details) => __awaiter(this, void 0, void 0, function* () {
        setLoading(true);
        setError(null);
        setData(null);
        try {
            const res = yield fetch("https://pesabridge.onrender.com/stk/stkpush", {
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
            const payMent = yield res.json();
            if (!res.ok) {
                throw Error(payMent.error);
            }
            setData(payMent);
        }
        catch (error) {
            if (error instanceof Error)
                setError(error);
        }
        setLoading(false);
    });
    return {
        lipaNaMpesa,
        loading,
        error,
        hasError: error !== null,
        data,
    };
}
export default useLipaNaMpesa;
//# sourceMappingURL=useLipaNaMpesa.js.map