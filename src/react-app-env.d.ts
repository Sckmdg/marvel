/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        readonly REACT_APP_PUBLIC_KEY: string;
        readonly REACT_APP_PRIVATE_KEY: string;
        readonly REACT_API_BASE_URL: string;
    }
}
