import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import { postDataService, getAllData } from './services/apiService'
import { getsampledata } from './data/sampledata'
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PaginationComponent } from './components/PaginationComponent';
import { findErrorSections, drawSectionBoders, getHiddenDataArray, getViewDataIssuesList, checkValidation } from './components/FunctionsHandsonTable'
import { HandsonTableComp } from './components/HandsonTableComp';




registerAllModules();

function App() {

  const [pageno, setpageno] = useState(1);
  const [pagecount, setpagecount] = useState();
  const [datasource, setdatasource] = useState([])

  useEffect(() => {
    //updateNewTableView();
  }, [pageno])

  useEffect(() => {
    
    getAllData().then((res) => { console.log(res); setdatasource(res); paginationFunc(); });

  }, [])

  var rowsOnPage = 5;

  // let data = getsampledata();

  const hotTableComponent = useRef(null);



  function updateNewTableView() {
    let t = hotTableComponent.current.hotInstance.getData();
    hotTableComponent.current.hotInstance.updateSettings({
      hiddenRows: {
        rows: getHiddenDataArray(pageno, t, rowsOnPage),
        indicators: false
      }
    });
  }


  function paginationFunc() {

    let tabledata = hotTableComponent.current.hotInstance.getData();
    setpagecount(Math.ceil(tabledata.length / rowsOnPage));

  }

  function saveBtnClick() {
    let issueList = findErrorSections(hotTableComponent.current.hotInstance);

    if (checkValidation(issueList)) {
      var data = hotTableComponent.current.hotInstance.getData();
      postDataService(JSON.stringify(data))
      alert('Sucessfuly saved')
    } else {
      alert('Data can not be saved');
    }

  }

  function validateBtnClick() {

    var t1 = performance.now();

    let issueList = findErrorSections(hotTableComponent.current.hotInstance);
    let result = getViewDataIssuesList(pageno, issueList, rowsOnPage);
    drawSectionBoders(hotTableComponent.current.hotInstance, result);
    // checkValidation(result);

    var t2 = performance.now();
    console.log("validateBtnClick function Take " + (t2 - t1) + " milliseconds.");
  }

  const callbackFunction = async (childData) => {
    setpageno(childData); //stored in pageno
  }


  return (
    <div className="App">
      <Container >

        <Row >
          <Col> <h1 className="justify-content-center">Handson Table </h1> </Col>
        </Row>
        <Row>
          <Col>
            <Button className="m-2" onClick={saveBtnClick}>Save</Button>
            <Button className='m-2' onClick={validateBtnClick}>Page Validate</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <HandsonTableComp dataSource={datasource} hotTableforwardRef={hotTableComponent}/>           
          </Col>
        </Row>
        <Row>
          <Col>
            <PaginationComponent pageCount={pagecount} parentCallback={callbackFunction} />
          </Col>
        </Row>
      </Container>





    </div>
  );
}

export default App;
