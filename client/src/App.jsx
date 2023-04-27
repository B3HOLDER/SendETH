import { Navbar, Welcome } from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gif-bg">
        <Navbar />
        <Welcome />
      </div>
    </div>
  )
}

export default App
