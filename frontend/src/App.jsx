import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { ToastContainer } from "react-toastify";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PrivateRoutes from "./components/PrivateRoutes";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AdminRoutes from "./components/AdminRoutes";
import OrderListScreen from "./screens/admin/OrderListScreen";
import ProductListScreen from "./screens/admin/ProductListScreen";
import UserListScreen from "./screens/admin/UserListScreen";
import ProductEditScreen from "./screens/admin/ProductEditScreen";
import UserEditScreen from "./screens/admin/UserEditScreen";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />

            {/* Private Routes */}
            <Route path="" element={<PrivateRoutes />}>
              <Route path="/shipping" element={<ShippingScreen />} />
              <Route path="/payment" element={<PaymentScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/order/:id" element={<OrderScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
            </Route>

            {/* Admin Routes */}
            <Route path="" element={<AdminRoutes />}>
              <Route path="/admin/orderlist" element={<OrderListScreen />} />
              <Route
                path="/admin/productlist"
                element={<ProductListScreen />}
              />
              <Route
                path="/admin/product/:id/edit"
                element={<ProductEditScreen />}
              />
              <Route path="/admin/userlist" element={<UserListScreen />} />
              <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
            </Route>
          </Routes>
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
