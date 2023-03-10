import { Endpoints } from './api.types';
export declare type APIError = {
    id: string;
    code: string;
    message: string;
    kind: 'client' | 'server';
    info: Record<string, any>;
};
export declare function isAPIError(reason: any): reason is APIError;
export declare type FetchLike = (input: string, init?: {
    method?: string;
    body?: string;
    credentials?: RequestCredentials;
    cache?: RequestCache;
    headers: {
        [key in string]: string;
    };
}) => Promise<{
    status: number;
    json(): Promise<any>;
}>;
declare type IsNeverType<T> = [T] extends [never] ? true : false;
declare type StrictExtract<Union, Cond> = Cond extends Union ? Union : never;
declare type IsCaseMatched<E extends keyof Endpoints, P extends Endpoints[E]['req'], C extends number> = IsNeverType<StrictExtract<Endpoints[E]['res']['$switch']['$cases'][C], [P, any]>> extends false ? true : false;
declare type GetCaseResult<E extends keyof Endpoints, P extends Endpoints[E]['req'], C extends number> = StrictExtract<Endpoints[E]['res']['$switch']['$cases'][C], [P, any]>[1];
export declare class APIClient {
    origin: string;
    credential: string | null | undefined;
    fetch: FetchLike;
    constructor(opts: {
        origin: APIClient['origin'];
        credential?: APIClient['credential'];
        fetch?: APIClient['fetch'] | null | undefined;
    });
    request<E extends keyof Endpoints, P extends Endpoints[E]['req']>(endpoint: E, params?: P, credential?: string | null | undefined): Promise<Endpoints[E]['res'] extends {
        $switch: {
            $cases: [any, any][];
            $default: any;
        };
    } ? IsCaseMatched<E, P, 0> extends true ? GetCaseResult<E, P, 0> : IsCaseMatched<E, P, 1> extends true ? GetCaseResult<E, P, 1> : IsCaseMatched<E, P, 2> extends true ? GetCaseResult<E, P, 2> : IsCaseMatched<E, P, 3> extends true ? GetCaseResult<E, P, 3> : IsCaseMatched<E, P, 4> extends true ? GetCaseResult<E, P, 4> : IsCaseMatched<E, P, 5> extends true ? GetCaseResult<E, P, 5> : IsCaseMatched<E, P, 6> extends true ? GetCaseResult<E, P, 6> : IsCaseMatched<E, P, 7> extends true ? GetCaseResult<E, P, 7> : IsCaseMatched<E, P, 8> extends true ? GetCaseResult<E, P, 8> : IsCaseMatched<E, P, 9> extends true ? GetCaseResult<E, P, 9> : Endpoints[E]['res']['$switch']['$default'] : Endpoints[E]['res']>;
}
export {};
//# sourceMappingURL=api.d.ts.map