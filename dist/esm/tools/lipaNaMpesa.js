var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const lipaNaMpesa = (details) => __awaiter(void 0, void 0, void 0, function* () {
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
        return {
            MerchantRequestID: payMent.MerchantRequestID,
            CheckoutRequestID: payMent.CheckoutRequestID,
            ResponseCode: payMent.ResponseCode,
            ResponseDescription: payMent.ResponseDescription,
            CustomerMessage: payMent.CustomerMessage,
        };
    }
    catch (error) {
        if (error instanceof Error)
            return {
                error,
            };
    }
});
//# sourceMappingURL=lipaNaMpesa.js.map