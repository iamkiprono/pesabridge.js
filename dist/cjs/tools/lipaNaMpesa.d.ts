import { details } from "../types/types";
export declare const lipaNaMpesa: (details: details) => Promise<{
    MerchantRequestID: string;
    CheckoutRequestID: string;
    ResponseCode: string;
    ResponseDescription: string;
    CustomerMessage: string;
    error?: undefined;
} | {
    error: Error;
    MerchantRequestID?: undefined;
    CheckoutRequestID?: undefined;
    ResponseCode?: undefined;
    ResponseDescription?: undefined;
    CustomerMessage?: undefined;
} | undefined>;
