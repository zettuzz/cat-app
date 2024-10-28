import './App.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Cat } from "./components/cat";
import ParticleEffects from './components/ParticleEffects';

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  });
  
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <ParticleEffects />
        <div className="main-container">
          <header className="header">
            <h1>Puss'y facts</h1>
            <p className="subtitle">Discover amazing facts about our feline friends</p>
          </header>
          <Cat />
          <footer className="footer">
            <p>Made with 🐱 love</p>
          </footer>
        </div>
      </QueryClientProvider>
    </div>
  );
}

export default App;