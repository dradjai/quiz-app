import Footer from './components/Footer';
import Header from './components/Header';
import Quiz from './components/Quiz';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Quiz />
      <Footer />
    </div>
  );
}

export default App;
