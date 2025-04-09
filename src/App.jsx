import Home from './pages/Home'
import Header from './components/layouts/header/Header'
import Footer from './components/layouts/footer/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
