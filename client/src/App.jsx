import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <MainLayout>
      <Home />
      <ScrollToTop />
    </MainLayout>
  );
}

export default App;