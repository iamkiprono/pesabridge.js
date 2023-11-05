export type details = {
    phoneNumber: string;
    shortcode?: string;
    amount: string;
    environment?: "development" | "production";
    passkey?: string;
    callBackURL?: string;
};
export type payMentRes = {
    MerchantRequestID: string;
    CheckoutRequestID: string;
    ResponseCode: string;
    ResponseDescription: string;
    CustomerMessage: string;
    error: string;
};
export type queryTransactionStatus = {
    CheckoutRequestID: string;
    passkey?: string;
    environment?: "development" | "production";
    shortcode?: string;
};
export type queryResponse = {
    ResponseCode: string;
    ResponseDescription: string;
    MerchantRequestID: string;
    CheckoutRequestID: string;
    ResultCode: string;
    ResultDesc: string;
    error: string;
};
