import "./App.css";

function App() {
  return (
    <>
      <p>Relativa Public</p>
      <img src="../public/img/prueba.png" alt="" />

      <p>Relativa src</p>
      <img src="./img/prueba.png" alt="" />

      <p>Absolute Public</p>
      <img src="/public/img/prueba.png" alt="" />

      <p>Absolute src</p>
      <img src="/src/img/prueba.png" alt="" />

      <p>Sin barra public</p>
      <img src="public/img/prueba.png" alt="" />

      <p>Sin barra src</p>
      <img src="src/img/prueba.png" alt="" />
    </>
  );
}

export default App;
