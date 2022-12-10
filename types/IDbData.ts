export interface IDBData {
    redirects: IRedirectData[]
    keys: string[]
}

export interface IRedirectData {
    name: string;
    url: string;
}