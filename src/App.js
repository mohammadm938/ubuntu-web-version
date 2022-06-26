import { createContext, useState } from "react";
import MainPage from "./components/MainPage/MainPage";

export const SetPageContext = createContext();
export const PageContext = createContext();

function App() {
  const [page, setPage] = useState("Main");

  return (
    <SetPageContext.Provider value={setPage}>
      <PageContext.Provider value={page}>
        <MainPage />
      </PageContext.Provider>
    </SetPageContext.Provider>
  );
}

export default App;
