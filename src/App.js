import './App.css';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import Handsontable from 'handsontable';

registerAllModules();

const data = [
  ["Unit", "skill 1", "skill 2", "skill 3", "capacity 1", "capacity 2", "capacity 3", "capacity 4", "rate"],
  ["A", 0.25, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2],
  ["B", 0.35, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2],
  ["C", 0.25, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2]
];


const hotData = [
  ['Allow Value', null, null],
  [5, 'Between 0-20', null],
  [5, 'Not between 0-20', null],
  [21, 'Equal to 20', null],
  [21, 'Not equal to 20', null],
  [21, 'Greater than 20', null],
  [21, 'Less than 20', null],
  [21, 'Greater or equal to 20', null],
  ['Allow type', null, null],
  [20, 'Number', null],
  [20, 'Text', null],
  ['George Clooney', 'Text length is less than 20 characters', null],
  ['Mike Tyson', 'Text is only lowercase', 'Ignore blank spaces'],
  ['ANTHONY HOPKINS', 'Text is only uppercase', 'Ignore blank spaces'],
  ['12/02/abc', 'Date', 'Format: MM/DD/YYYY'],
  ['13:abc', 'Time', 'Format: H:mm'],
];

function savedata() {
  alert("Data save sucessfully");
}



function App() {
  return (
    <div className="App">
      <div id="hot-app">
        <HotTable
          data={hotData}
          colHeaders={true}
          rowHeaders={true}
          width="600"
          
          cells={function (row, col) {
            const cellProperties = {};
   
            if (row === 0 || row === 8) {
              cellProperties.className = 'category';
              cellProperties.readOnly = true;
              console.log('row '+row+' column '+col)
            }

            if (col === 0) {
              if (row > 0 && row !== 8 && row < 10) {
                cellProperties.type = 'numeric';

              } else if (row > 10 && row < 14) {
                cellProperties.validator = /./g;

              } else if (row === 14) {
                cellProperties.type = 'date';
                cellProperties.dateFormat = 'MM/DD/YYYY';

              } else if (row === 15) {
                cellProperties.type = 'time';
                cellProperties.timeFormat = 'H:mm';
              }

            } else {
              cellProperties.readOnly = true;
            }

            return cellProperties;
          }}

          afterValidate={function (isValid, value, row, prop, source) {
            //can be used for cells that already have an active validator
            if (this.propToCol(prop) !== 0) {
              return;
            }

            switch (row) {
              case 1:
                return value <= 20 && value >= 0;

              case 2:
                return value > 20 || value < 0;

              case 3:
                return value === 20;

              case 4:
                return value !== 20;

              case 5:
                return value > 20;

              case 6:
                return value < 20;

              case 7:
                return value >= 20;

              case 11:
                return value.length < 20;

              case 12:
                return !(/[A-Z]/g.test(value));

              case 13:
                return !(/[a-z]/g.test(value));

              default:
                break;
            }
          }}

        />
      </div>

      <button onClick={savedata}>save</button>

    </div>
  );
}

export default App;
