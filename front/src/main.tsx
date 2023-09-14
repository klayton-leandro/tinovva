import ReactDOM from "react-dom/client";
import Routes from "routes";
import GlobalStyles from "styles/global";

import { QueryClientProvider } from "react-query";

import { queryClient } from "libs";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyles />
    <Routes />
  </QueryClientProvider>
);
