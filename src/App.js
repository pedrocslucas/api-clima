function App() {
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
              <input className="form-control"/>
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
