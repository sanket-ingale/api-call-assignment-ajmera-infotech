import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import TableContainer from './components/TableContainer';
import ThemeToggle from './components/ThemeToggle';

function App() {

  const [tableData, setTableData] = useState([]);
  const [elementData, setElementData] = useState([]);
  const [tableName, setTableName] = useState('');
  const [isLightOn, setIsLightOn] = useState(true);

  const getTableData = async (url = 'https://swapi.dev/api/films') => {
      axios.get(url).then(res => setTableData(res.data));
      setTableName(url.slice(22));
  }

  const getElementData = async (url) => {
    axios.get(url).then(res => setElementData(res.data));
    console.log(elementData);
  }

  useEffect(() => {
    // axios.get('https://swapi.dev/api/').then(res => setDropDownData(res.data));
    getTableData();
  }, []);

  console.log(elementData);

  return (
    <div className={isLightOn ? 'App light' : 'App dark'}>
      {/* <div style={{display: `${tableData === [] || elementData ===[] ? 'block' : 'none'}`}}className='loading'>
        Loading...
      </div> */}
      <ThemeToggle 
        isLightOn={isLightOn} 
        setIsLightOn={setIsLightOn}
      />
      <Header 
        setTableData={setTableData} 
        getTableData={getTableData} 
        tableName={tableName}
      />
      <TableContainer 
        tableData={tableData} 
        elementData={elementData}
        getElementData={getElementData}
        getTableData={getTableData}
      />
    </div>
  );
}

export default App;
