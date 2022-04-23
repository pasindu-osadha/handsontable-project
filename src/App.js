import './App.css';
import React, { useRef } from 'react';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import { postDataService } from './services/apiService'


registerAllModules();


function findErrorSections(hotTableInstance) {
 
  var issueList = []; // This list has information about selected errors  
  var totalrow = hotTableInstance.getData().length;
  var tableResultdata = hotTableInstance.getData(0, 0, totalrow, 7);

  var dataset = [];
  var sum = 0;

  //skills section 
  for (let r = 0; r < tableResultdata.length; r++) {

    dataset = tableResultdata[r];
    sum = 0;

    for (let c = 1; c < 4; c++) {
      sum = sum + dataset[c];
    }

    if (sum !== 1) {
      issueList.push({ "range": { "from": { "row": r, "col": 1 }, "to": { "row": r, "col": 3 } }, "top": { "width": 2, "color": "#5292F7" }, "left": { "width": 2, "color": "orange" }, "bottom": { "width": 2, "color": "red" }, "right": { "width": 2, "color": "magenta" } });
      //issueList.push({ "startRow": r, "startColumn": 1, "endRow": r, "endColumn": 3 });
      //  alert('Erorr in row ' + (r + 1) + ' In skill section, Total shuld be equals to 1 ')
    }

  }

  // category section 
  for (let r = 0; r < tableResultdata.length; r++) {

    dataset = tableResultdata[r];
    sum = 0;

    for (let c = 4; c < 8; c++) {
      sum = sum + dataset[c];
    }

    if (sum !== 1) {
      issueList.push({ "range": { "from": { "row": r, "col": 4 }, "to": { "row": r, "col": 7 } }, "top": { "width": 2, "color": "#5292F7" }, "left": { "width": 2, "color": "orange" }, "bottom": { "width": 2, "color": "red" }, "right": { "width": 2, "color": "magenta" } });
      // alert('Erorr in row ' + (r + 1) + ' In Capacity section, Total shuld be equals to 100 ')
    }

  }

  return issueList;
}

function drawSectionBoders(hotTableInstance, issueList) {
  
  hotTableInstance.updateSettings({
    customBorders: []
  });
  hotTableInstance.updateSettings({
    customBorders: issueList
  });
}



function App() {

  const data = [
    ["A", 0.25, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5],
    ["B", 0.35, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.2],
    ["C", 0.5, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.3]
  ];


  const hotTableComponent = useRef(null);

  function savedata  () {

    if (checkValidation()) {
      var data = hotTableComponent.current.hotInstance.getData();
      postDataService(JSON.stringify(data))
      alert('Sucessfuly saved')
    } else {
      alert('Data can not be saved');
    }

  }

  function checkValidation() {
    let hotTableInstance = hotTableComponent.current.hotInstance;
    let list = findErrorSections(hotTableInstance);
    drawSectionBoders(hotTableInstance, list);
    if (list.length !== 0) {
      alert('In the skill section Total shuld be equals to 1 and In Capacity section, Total shuld be equals to 100% ')
      return false;
    }
    else {
      return true;
    }
  }


  return (
    <div className="App">
      <div id="hot-app">
        <HotTable
          ref={hotTableComponent}
          data={data}
          colHeaders={["Unit", "skill 1", "skill 2", "skill 3", "capacity 1", "capacity 2", "capacity 3", "capacity 4", "rate"]}
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
            numericFormat: {
              pattern: '%'
            }
          },
          {
            type: 'numeric',
            numericFormat: {
              pattern: '%'
            }
          },
          {
            type: 'numeric',
            numericFormat: {
              pattern: '%'
            }
          },
          {
            type: 'numeric',
            numericFormat: {
              pattern: '%'
            }
          },
          {
            type: 'numeric',
            numericFormat: {
              pattern: '%'
            }
          }]}
        />
      </div>

      <button onClick={savedata}>save</button>
      <button onClick={checkValidation}>Validate</button>

    </div>
  );
}

export default App;
