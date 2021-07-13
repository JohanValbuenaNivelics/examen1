import { Result } from "./result.model";


export interface ResultadoAPI {
    status:   string;
    code:     number;
    messages: any[];
    result:   Result;
}

