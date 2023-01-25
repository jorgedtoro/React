
import "./App.css";
import BotonEstiloso from "./components/ui/botonEstiloso";
import flexDiv from "./components/ui/divFlex";



function App() {
  return <div className="App">
    <flexDiv>
      
    </flexDiv>
    <button>Enviar</button>
    <BotonEstiloso colorTexto="dark" primary>Enviar</BotonEstiloso>
    <BotonEstiloso colorTexto="light">Reset</BotonEstiloso>


    
    
  </div>;
}

export default App;
