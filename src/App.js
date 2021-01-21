import './App.css';
import Hello from './Hello';
function App() {
  return (
    <div className="App">
      <Hello name="Phương" render={(name) => <p>Xin chào: {name}</p>}></Hello>
      <Hello name="Nam" render={(name) => <p>Tạm biệt: {name}</p>}></Hello>
    </div>
  );
}

export default App;
