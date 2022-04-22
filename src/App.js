import './App.css';
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import Handsontable from 'handsontable';

registerAllModules();

function App() {

  const data = [
    ["Unit", "skill 1", "skill 2", "skill 3", "capacity 1", "capacity 2", "capacity 3", "capacity 4", "rate"],
    ["A", 0.25, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2,0.5],
    ["B", 0.35, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2,0.2],
    ["C", 0.5, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2,0.3]
  ];


  const hotTableComponent = useRef(null);

  const savedata = () => {
    let totalrow = hotTableComponent.current.hotInstance.getData().length;
    //console.log(totalrow)
    debugger
    var skillSectionResultdata = hotTableComponent.current.hotInstance.getData(1, 1, totalrow - 1, 3);

    for (let r = 0; r < skillSectionResultdata.length; r++) {
      var dataset = skillSectionResultdata[r];
      var sum = 0;
      for (let c = 0; c < dataset.length; c++) {
        sum = sum + dataset[c];

      }
      if (sum != 1) {
        alert('Erorr in row ' + (r+1) + ' In skill section, Total shuld be equals to 1 ')
      }

    }
debugger
    var CapacitySectionResultdata = hotTableComponent.current.hotInstance.getData(1, 4, totalrow - 1, 7);

    for (let r = 0; r < CapacitySectionResultdata.length; r++) {
      var dataset = CapacitySectionResultdata[r];
      var sum = 0;
      for (let c = 0; c < dataset.length; c++) {
        sum = sum + dataset[c];

      }
      if (sum != 1) {
        alert('Erorr in row ' + (r+1) + ' In Capacity section, Total shuld be equals to 100 ')
      }

    }
  }



  return (
    <div className="App">
      <div id="hot-app">
        <HotTable
          ref={hotTableComponent}
          data={data}
          colHeaders={true}
          rowHeaders={true}
          width="600"
          columns={[{
            type: 'text',
          },
          {
            type: 'numeric',
          },
          {
            type: 'numeric',
          },
          {
            type: 'numeric',
          },
          {
            type: 'numeric',
            numericFormat:{
              pattern:'%'
            }
          },
          {
            type: 'numeric',
            numericFormat:{
              pattern:'%'
            }
          },
          {
            type: 'numeric',
            numericFormat:{
              pattern:'%'
            }
          },
          {
            type: 'numeric',
            numericFormat:{
              pattern:'%'
            }
          },
          {
            type: 'numeric',
            numericFormat:{
              pattern:'%'
            }
          }]}
        />
      </div>

      <button onClick={savedata}>save</button>

    </div>
  );
}

export default App;
