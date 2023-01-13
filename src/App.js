import './App.css';
import Ballance from './components/Ballance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';


function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Ballance />
        <IncomeExpenses />
      </div>
    </div>
  );
}

export default App;
