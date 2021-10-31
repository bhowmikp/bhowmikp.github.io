import { createContext, Dispatch, SetStateAction } from 'react';

export interface IBlogContextState {
    id: string;
    onScreenStatus: boolean;
}

export interface IBlogContextValue {
    state: IBlogContextState;
    setState: Dispatch<SetStateAction<IBlogContextState>>;
}

export const BlogContext = createContext<IBlogContextValue | undefined>(undefined);
