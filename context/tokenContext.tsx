"use client";

import { createContext, useContext } from "react";
import { fetcher } from "../lib/fetcher";
import useSWR from "swr";

type TokenContextType = {
  token: any;
  error: any;
  isLoading: any;
  mutate: any;
} | null;

const TokenContext = createContext<TokenContextType>(null);

import { ReactNode } from "react";

export function TokenProvider({ children }: { children: ReactNode }) {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/auth/token",
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 0,
    }
  );

  return (
    <TokenContext.Provider
      value={{
        token: data || null,
        error,
        isLoading,
        mutate,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
}

export function useToken() {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useUser must be used inside UserProvider");
  }
  return context;
}