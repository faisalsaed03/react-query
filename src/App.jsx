import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./Navbar";
import Profile from "./pages/Profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient({defaultOptions:{
    queries : {
    }

  }});

  return (
    <div>
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
          <Route path="/home" element={<Home />} />
<Route path="/profile" element={<Profile />} />
<Route path="/contact" element={<Contact />} />

          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}


export default App;
