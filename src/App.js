import './App.css';
import AddTransaction from './components/AddTransaction';
import Ballance from './components/Ballance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';


function App() {
  return (
    <div className='app'>
      <Header />
      <div className="container">
        <Ballance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
