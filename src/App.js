import { Route, Routes } from "react-router-dom";
import FavoriteCustomers from "./pages/favorite-customers";
import Header from "./components/header";
import CustomerList from "./pages/customer-list";
import { createStore } from 'redux'
import { customerReducer } from "./redux/reducers/customers.reducer";
import { Provider } from "react-redux";

const customersStore = createStore(customerReducer)

function App() {

  return (
    <div className="App">
      <Provider store={customersStore}>
        <Header />
        <Routes>
          <Route path="/" element={<CustomerList />} />
          <Route path="/favorite-customers" element={<FavoriteCustomers />} />
        </Routes>
      </Provider>

    </div>
  );
}

export default App;
