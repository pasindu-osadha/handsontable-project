import './App.css';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';

registerAllModules();

const hotData = [
  ["Unit", "skill 1", "skill 2", "skill 3", "capacity 1","capacity 2","capacity 3","capacity 4","rate"],
  ["A",0.25, 0.25, 0.5, 0.2, 0.2,0.2,0.2],
  ["B",0.35, 0.25, 0.5, 0.2, 0.2,0.2,0.2],
  ["C",0.25, 0.25, 0.5, 0.2, 0.2,0.2,0.2]
];

function App() {
  return (
    <div className="App">
      <div id="hot-app">
        <HotTable
          data={hotData}
          colHeaders={true}
          rowHeaders={true}
          width="600"
          height="300"
        />
      </div>
    </div>
  );
}

export default App;
