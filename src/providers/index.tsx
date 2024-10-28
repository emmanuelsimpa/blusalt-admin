import { PropsWithChildren, Suspense } from "react";
import { Provider } from "react-redux";
import { Provider as ChakraProvider } from "@/components/ui/provider";
import { persistor, store } from "@/lib/redux/Store";
import { PersistGate } from "redux-persist/lib/integration/react";

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <Suspense fallback={<p>Laoding...</p>}>
      <ChakraProvider>
        <Provider store={store}>
          <PersistGate loading={<p>Laoding...</p>} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
      </ChakraProvider>
    </Suspense>
  );
}
