import "@/styles/globals.css";

import { BudgetProvider } from "@/contexts/BudgetContext";

export default function App({ Component, pageProps }) {
  return (
    <BudgetProvider>
      <Component {...pageProps} />
    </BudgetProvider>
  );

}
