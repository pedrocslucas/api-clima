import { useState } from "react"

function App() {

  const [city, setCity] = useState("")
  const [weatherForecast, setWeatherForecast] = useState(null)

  const handleChange = (event) => {
    setCity(event.target.value)
  }

  const handleSearch = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=7a757c4b8a4e43afb1f111827220409&q=${city}&lang=pt`)
    .then((response) => {
      if(response.status === 200){
        return response.json()
      }else{
        return null
      }
    })
    .then((data) => {
      setWeatherForecast(data)
    });
  }

  return (
    <div>
      <header className="bg-dark mb-4 p-3">
        <h2 className="text-white text-center" href="#stop">
          Api de Clima
        </h2>
      </header>
      <main className="container">
        <div className="jumbotron">
          <h1>
            Verifique agora a previsão do tempo na sua cidade!
          </h1>
          <p className="lead">
            Digite o nome da sua cidade no campo abaixo e em seguida clique em pesquisar.
          </p>

          <div className="row mb-4">
            <div className="col-md-6">
              <input
                onChange={handleChange}
                className="form-control"
                value={city} />
            </div>
          </div>

          <button onClick={handleSearch} className="btn btn-primary btn-lg" id="btnSearch">
            Pesquisar
          </button>

          {
            weatherForecast ? (
              <div className="mt-4 d-flex">
                <div>
                  <img src={weatherForecast.current.condition.icon}/>
                </div>

                <div className="text-dark">
                  <h3>Hoje o dia está {weatherForecast.current.condition.text} em {weatherForecast.location.name} no {weatherForecast.location.country}</h3>
                  <p>
                    Temperatura: {weatherForecast.current.temp_c}°C
                  </p>
                  <p>
                    Sensação Térmica: {weatherForecast.current.feelslike_c}°C
                  </p>
                  <p>
                    Umidade do Ar: {weatherForecast.current.humidity}%
                  </p>
                </div>

              </div>
            ) : 
              <div className="mt-4">
                <h3 className="text-danger">
                  Não consegui encontrar sua cidade =(
                </h3>
              </div>
          }

        </div>
      </main>

      <footer className="footer bg-dark p-3">
        <p className="text-white text-center mt-2">Desenvolvido com ReactJS e Bootstrap por <span className="text-warning">Pedro Lucas</span>.</p>
      </footer>
    </div>
  );
}

export default App;
