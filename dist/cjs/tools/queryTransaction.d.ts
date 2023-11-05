import { queryTransactionStatus } from "../types/types";
export declare const queryTransaction: (details: queryTransactionStatus) => Promise<{
    ResponseCode: string;
    ResponseDescription: string;
    MerchantRequestID: string;
    CheckoutRequestID: string;
    ResultCode: string;
    ResultDesc: string;
    error?: undefined;
} | {
    error: Error;
    ResponseCode?: undefined;
    ResponseDescription?: undefined;
    MerchantRequestID?: undefined;
    CheckoutRequestID?: undefined;
    ResultCode?: undefined;
    ResultDesc?: undefined;
} | undefined>;
