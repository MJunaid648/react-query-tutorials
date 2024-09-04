import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import SuperHeroesPage from "./components/SuperHeroes.page";
import HomePage from "./components/Home.page";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
import "./App.css";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <div className="route">
            <Routes>
              <Route path="/super-heroes" element={<SuperHeroesPage />}></Route>
              <Route
                path="/rq-super-heroes"
                element={<RQSuperHeroesPage />}
              ></Route>
              <Route path="/" element={<HomePage />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
