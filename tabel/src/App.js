import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";

function App() {

  const [res, setRes] = useState([]);
  const [resOriginal, setResOriginal] = useState([]);
  const [direction, setDirection] = useState(true);
  const [search, setSearch] = useState('');
  const [column, setColumn] = useState('date');
  const [condition, setCondition] = useState('name');
  const [pagination, setPagination] = useState(1)

  //запрос к БД
  const url = axios.create({
    baseURL: "http://localhost:3000",
    responseType: "json"
  });

  useEffect(() => {
    url.get('/tabel').then((response) => {
      setRes(response.data);
      setResOriginal(response.data)
    });
  }, []);

  //собор данных для фильтрации
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleColumn = (e) => {
    setColumn(e.target.value)
  }

  const handleCondition = (e) => {
    setCondition(e.target.value)
  }

  const handlePagination = (e) => {
    setPagination(e.target.value)
  }

  const sortClean = () => {
    setRes(resOriginal)
  }

  //сортировка
  const sortData = (field, e) => {
    if (direction) {
      document.getElementById(e.currentTarget.id).classList.remove("decreasing")
      document.getElementById(e.currentTarget.id).classList.add("increasing")
    } else {
      document.getElementById(e.currentTarget.id).classList.remove("increasing")
      document.getElementById(e.currentTarget.id).classList.add("decreasing")
    }
    setRes(res.concat().sort((a, b) => {
      return direction ? a[field] > b[field] ? 1 : -1 : a[field] < b[field] ? 1 : -1
    }));
    setDirection(!direction);
  }

  //фильтация
  const sortSearch = (field) => {
    setRes(res.concat().filter(el => {
      if (condition === 'contains') {
        return String(el[field]).toLocaleLowerCase().includes(search.toLocaleLowerCase())
      } else if (condition === 'equally') {
        return String(el[field]).toLocaleLowerCase() === search.toLocaleLowerCase()
      } else if (condition === 'more') {
        return el[field] > search
      } else {
        return el[field] < search
      }
    }));
  }

  return (
    <>
      <div className="flex sortHead">
        <input className="greenActive" onChange={handleSearch} placeholder="Поиск"/>
        <select className="greenActive" onChange={handleColumn}>
          <option value="name">Название</option>
          <option value="quantity">Количество</option>
          <option value="distance">Расстояние</option>
        </select>
        <select className="greenActive" onChange={handleCondition}>
          <option value="equally">Равно</option>
          <option value="contains">Содержит</option>
          <option value="more">Больше</option>
          <option value="less">Меньше</option>
        </select>
        <button className="greenActive" onClick={() => {sortSearch(column)}}><p>Поиск</p></button>
        <button className="greenActive" onClick={sortClean}><p>Очистить фильтры и сортировку</p></button>
      </div>
      <table>
        <thead>
        <tr className="greenActive">
          <th>
            <p>Дата</p>
          </th>
          <th>
            <button id="1" className="sort greenActive" onClick={(e) => sortData('name', e)}><p>Название</p></button>
          </th>
          <th>
            <button id="2" className="sort greenActive" onClick={(e) => sortData('quantity', e)}><p>Количество</p></button>
          </th>
          <th>
            <button id="3" className="sort greenActive" onClick={(e) => sortData('distance', e)}><p>Расстояние</p></button>
          </th>
        </tr>
        </thead>
        <tbody>
        {
          res.map((item, index) => {
            if ((index <= pagination * 10 && index > pagination * 10 - 10) || res.length <= 10) {
              return (
                <tr key={index}>
                  <td>{item.date.substring(0, item.date.indexOf('T')).replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.distance}</td>
                </tr>
              )
            }
          })
        }
        </tbody>
        <tfoot />
      </table>
      {
        res.map((item, index) => {
          if (index % 10 === 0 && index > 0) {
            return <button className="pagination greenActive" key={index} onClick={handlePagination} value={index / 10}>{index / 10}</button>
          }
          if (res.length % 10 !== 0 && res.length - 1 === index) {
            return <button className="pagination greenActive" key={index} onClick={handlePagination} value={Math.ceil(res.length / 10)}>{Math.ceil(res.length / 10)}</button>
          }
        })
      }
    </>
  );
}

export default App;