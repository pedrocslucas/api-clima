import { useState } from "react"

function App() {

  const [city, setCity] = useState("")

  const handleChange = (event) => {
    setCity(event.target.value)
  }

  const handleSearch = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=7a757c4b8a4e43afb1f111827220409&q=${city}&lang=pt`)
  }

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a className="navbar-brand text-white" href="#stop">
          Api de Clima
        </a>
      </nav>
      <main className="container">
        <div className="jumbotron">
          <h1>
            Verifique agora a previsão do tempo da sua cidade!
          </h1>
          <p className="lead">
            Digite o nome da sua cidade no campo abaixo e em seguida clique em pesquisar.
          </p>

          <div className="row mb-4">
            <div className="col-md-6">
              <input 
              onChange={handleChange} 
              className="form-control" 
              value={city}/>
            </div>
          </div>

          <button className="btn btn-primary btn-lg">
            Pesquisar
          </button>
        
        </div>
      </main>

      <footer className="footer bg-dark">
        <p className="text-white p-3 text-center">Desenvolvido com ReactJS e Bootstrap por <span className="text-warning">Pedro Lucas</span>.</p>
      </footer>
    </div>
  );
}

export default App;
