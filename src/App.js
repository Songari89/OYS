import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import Footer from "./components/footer/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Header />
        <div className="outlet">
          <Outlet />
        </div>
        <Footer />
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
