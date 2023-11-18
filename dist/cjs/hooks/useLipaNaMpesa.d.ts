import { details, payMentRes } from "../types/types";
type DarajaHookResponse<T> = {
    loading: boolean;
    error: Error | null;
    hasError: boolean;
    data: T | null;
    lipaNaMpesa: (x: details) => void;
};
declare function useLipaNaMpesa<T>(): DarajaHookResponse<payMentRes>;
export default useLipaNaMpesa;
