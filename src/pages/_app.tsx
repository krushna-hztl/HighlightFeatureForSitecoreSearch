import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Environment, WidgetsProvider } from "@sitecore-search/react";
import { PageController } from "@sitecore-search/react";
import "../styles/styles.css";

const context = PageController.getContext();

context.setLocaleLanguage("en");
context.setLocaleCountry("us");
export default function App({ Component, pageProps }: AppProps) {
  return (
    <WidgetsProvider
      env={process.env.NEXT_PUBLIC_ENV as Environment}
      customerKey={process.env.NEXT_PUBLIC_CUSTOMER_ID}
      apiKey={process.env.NEXT_PUBLIC_API_KEY}
    >
      <Component {...pageProps} />;
    </WidgetsProvider>
  );
}
