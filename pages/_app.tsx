import { checkWindow } from "@/lib/functions/_helpers.lib";
import "@/styles/globals.css";
import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
  QueryKey
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import type { AppProps } from "next/app";
import React from "react";
import { toast, Toaster } from "sonner";
import { GeistSans } from "geist/font/sans";
import "../styles/App.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

interface ErrorData {
  response: {
    data: {
      message: string;
    };
  };
}

/**
 * It suppresses the useLayoutEffect warning when running in SSR mode
 */
function fixSSRLayout() {
  // suppress useLayoutEffect (and its warnings) when not running in a browser
  // hence when running in SSR mode
  if (!checkWindow()) {
    React.useLayoutEffect = () => {
      // console.log("layout effect")
    };
  }
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 0
    }
  },
  mutationCache: new MutationCache({
    onSuccess: (data, _variables, _context, mutation) => {
      const message = (data as AxiosResponse).headers["x-message"];
      const showToast = mutation.meta?.showToast !== false;
      if (showToast && message) {
        toast.success(message);
      }
    },
    onError: (res) => {
      const result = res as unknown as ErrorData;
      if (result?.response?.data?.message) {
        toast.error(result?.response?.data?.message);
      } else {
        toast.error("An error occurred while processing your request.");
      }
    },
    onSettled: (_data, _error, _variables, _context, mutation) => {
      if (mutation?.meta?.invalidateQueries) {
        queryClient.invalidateQueries({
          queryKey: mutation?.meta?.invalidateQueries as QueryKey,
          refetchType: "all"
        });
      }
    }
  })
});
export default function CustomApp({ Component, pageProps }: AppProps) {
  fixSSRLayout();

  return (
    <div className={GeistSans.className}>
      {/* Titles, descriptions and share tags are set per page by components/Seo. */}
      <Head>
        <link rel="icon" href="/favicon2.ico" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <Toaster richColors position="bottom-left" />
        <Component {...pageProps} />
        <Analytics />
      </QueryClientProvider>
    </div>
  );
}
