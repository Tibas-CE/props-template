import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome = "Tibério" // podemos usar uma variavel pelas props
  const carro = {
    nomeDoCarro: "Fuscar",
    ano: 1970,
    cor: "Azul",
    flex: false
  }
  const carro2 = {
    nomeDoCarro: "Brasilia",
    ano: 1965,
    cor: "Amarela",
    flex: false
  }
  const carro3 = {
    nomeDoCarro: "Opala",
    ano: 1975,
    cor: "Verde",
    flex: false
  }
  const carro4 = {
    nomeDoCarro: "Ferrari",
    ano: 1975,
    cor: "Vermelho",
    flex: false
  }
  const carro5 = {
    nomeDoCarro: "Mercedes",
    ano: 1975,
    cor: "Verde",
    flex: false
  }
  const carro6 = {
    nomeDoCarro: "Jaguar",
    ano: 1975,
    cor: "Verde",
    flex: false
  }
  function apresentacao(nome) {
    alert(`Olá, bem vindo a garagem de ${nome}`)
  }

  return (
    <div>
      <Garagem
      nome={"Tibério"}
      carro={carro}
      carro2={carro2}
      carro3={carro3} 
      funcao={apresentacao}
      />
      <Garagem
      nome={"Tibério sonhando"}
      carro={carro4}
      carro2={carro5}
      carro3={carro6} 
      funcao={apresentacao}
      />
    </div>
  );
}
