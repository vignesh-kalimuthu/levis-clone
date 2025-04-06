import LandingPage from "./pages/LandingPage";
import { HeartProvider } from "./context/HeartContext";

function App() {
  return (
    <>
      <HeartProvider>
        <LandingPage />
      </HeartProvider>
    </>
  );
}

export default App;
