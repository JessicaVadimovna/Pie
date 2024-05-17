import './App.css';
import { Chart } from "react-google-charts";

function App() {
  const data = [
    ["Задача", "Часов  в день"],
    ["Работа", 8],
    ["Еда", 2],
    ["Сон", 2],
    ["Обучение", 3],
    ["Сон", 7],
    ["Компьютерные игры", 2]
  ];

  const options = {
    title: "Моя дневная активность",
    is3D: true,
  };

  return (
    <div className="App">
      <h1>Pie Chart график</h1>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
        legendToggle
      />
    </div>
  );
}

export default App;

