import './App.scss';
import { DatePicker, Card } from 'antd';

function App() {
  const test = (date, dateString) => {
    console.log(date, dateString)
  }

  return (
      <div className="app">
        <h1>Web Personal - Client</h1>
        <h2>Proyecto</h2>

        <DatePicker onChange={test}/>
        
        <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
  );
}

export default App;