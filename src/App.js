import './App.css';
import React, { useRef, useState,useEffect } from 'react';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import { postDataService } from './services/apiService'
import { getsampledata } from './data/sampledata'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PaginationComponent } from './components/PaginationComponent';




registerAllModules();


function findErrorSections(hotTableInstance) {

  var t3 = performance.now();

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
      issueList.push({ "range": { "from": { "row": r, "col": 1 }, "to": { "row": r, "col": 3 } }, "top": { "width": 2, "color": "red" }, "left": { "width": 2, "color": "red" }, "bottom": { "width": 2, "color": "red" }, "right": { "width": 2, "color": "red" } });
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
      issueList.push({ "range": { "from": { "row": r, "col": 4 }, "to": { "row": r, "col": 7 } }, "top": { "width": 2, "color": "red" }, "left": { "width": 2, "color": "red" }, "bottom": { "width": 2, "color": "red" }, "right": { "width": 2, "color": "red" } });
      // alert('Erorr in row ' + (r + 1) + ' In Capacity section, Total shuld be equals to 100 ')
    }

  }
  var t4 = performance.now();
  console.log("Find error section function Take " + (t4 - t3) + " milliseconds.");

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

  const [pageno, setpageno] = useState(1);
  const [pagecount, setpagecount] = useState(0);

  useEffect(() => {
    updateNewTableView();
  }, [pageno])

  useEffect(() => {
   paginationFunc();
  }, [pagecount])


  var rowsOnPage = 25;

  // const data = [
  //   ["A", 0.25, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5],
  //   ["B", 0.35, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.2],
  //   ["C", 0.5, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.3]
  // ];

  let data = getsampledata();

  const hotTableComponent = useRef(null);

  function savedata() {

    if (checkValidation()) {
      var data = hotTableComponent.current.hotInstance.getData();
      postDataService(JSON.stringify(data))
      alert('Sucessfuly saved')
    } else {
      alert('Data can not be saved');
    }

  }

  function checkValidation() {

    var t0 = performance.now();

    let hotTableInstance = hotTableComponent.current.hotInstance;
    let list = findErrorSections(hotTableInstance);
    drawSectionBoders(hotTableInstance, list);


    var t1 = performance.now();
    console.log("Validate and draw borders function Take " + (t1 - t0) + " milliseconds.");



    if (list.length !== 0) {

      let skillobject = list.find(skill => skill.range.from.col === 1 && skill.range.to.col === 3);
      let capacityObject = list.find(skill => skill.range.from.col === 4 && skill.range.to.col === 7);

      if (skillobject !== undefined) {
        alert('In the skill section, Total shuld be equals to 1')
      }

      if (capacityObject !== undefined) {
        alert('In Capacity section, Total shuld be equals to 100% ');
      }

      return false;
    }
    else {
      return true;
    }


  }



  const callbackFunction = async (childData) => {
    debugger
    setpageno(childData); //stored in pageno

  }

  function updateNewTableView() {
    let t = hotTableComponent.current.hotInstance.getData();
    hotTableComponent.current.hotInstance.updateSettings({
      hiddenRows: {
        rows: getHiddenDataArray(pageno, t),
        indicators: false
      }
    });
  }


  function paginationFunc() {
    debugger
    let tabledata = hotTableComponent.current.hotInstance.getData();
    setpagecount(Math.ceil(tabledata.length / rowsOnPage));

  }

  function getHiddenDataArray(clicked, tabledata) {
    var HiddenArr = [];

    if (clicked === 1) {
      for (let i = (clicked * rowsOnPage); i < tabledata.length; i++) {
        HiddenArr.push(i);
      }
      return HiddenArr;
    } else {
      for (let j = 0; j < (clicked * rowsOnPage) - rowsOnPage; j++) {
        HiddenArr.push(j);
      }
      for (let i = (clicked * rowsOnPage); i < tabledata.length; i++) {
        HiddenArr.push(i);
      }
      return HiddenArr;
    }
  }

  return (
    <div className="App">
      <Button className="m-2" onClick={savedata}>save</Button>
      <Button className='m-2' onClick={checkValidation}>Validate</Button>
      {/* <Button className='m-2' onClick={paginationFunc}>pagiantion enable</Button> */}
      <PaginationComponent pageCount={pagecount} parentCallback={callbackFunction} />
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

          filters={true}
          dropdownMenu={true}
        />
      </div>



    </div>
  );
}

export default App;
