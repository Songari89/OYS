import './App.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Header from "./components/Header";
import { Outlet} from 'react-router-dom';
import AuthPopup from "./components/AuthPopup";

const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthPopup />
      <Header />
      <Outlet />
    </QueryClientProvider>
  );
}

export default App;
