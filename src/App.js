import { Route, Routes } from "react-router-dom";
import FavoriteCustomers from "./components/favorite-customers";
import Header from "./components/header";
import CustomerList from "./pages/customer-list";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<CustomerList />} />
        <Route path="/favorite-customers" element={<FavoriteCustomers />} />
      </Routes>
    </div>
  );
}

export default App;
