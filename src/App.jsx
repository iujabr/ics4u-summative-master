//import { StoreProvider } from "path-to-store-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoreProvider } from "../src/context/index";
import HomeView from "../src/views/HomeView";
import RegisterView from "../src/views/RegisterView";
import LoginView from "../src/views/LoginView";
import MoviesView from "../src/views/MoviesView";
import AllMoviesView from "../src/views/AllMoviesView";
import DetailMovieView from "../src/views/DetailMovieView";
import CartView from "../src/views/CartView";
import ErrorView from "./views/ErrorView";
import ProtectedRoutes from "./util/ProtectedRoutes";
//import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserProvider>
      <Router>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route
            path="/login"
            element={<LoginView setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/register" element={<RegisterView />} />
          <Route
            path="/movies"
            element={isLoggedIn ? <MoviesView /> : <LoginView setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/movies/genre/:genre_id" element={<GenreView />} />
          <Route path="/movies/details/:id" element={<DetailView />} />
          <Route path="/cart" element={<CartView />}></Route>
          <Route path="settings" element={<SettingsView />}></Route>
        </Routes>
      </Router>
    </UserProvider>
  );
  
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/cart" element={<CartView />} />
            <Route path="/movies" element={<MoviesView />}>
              <Route path="all" element={<AllMoviesView />} />
              <Route path=":id" element={<DetailMovieView />} />
            </Route>
          </Route>
          <Route path="*" element={<ErrorView />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App