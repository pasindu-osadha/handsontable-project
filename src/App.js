import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import { postDataService, getAllData, getPageData, postPageData } from './services/apiService'
import { getsampledata } from './data/sampledata'
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PaginationComponent } from './components/PaginationComponent';
import { findErrorSections, drawSectionBoders, getHiddenDataArray, getViewDataIssuesList, checkValidation } from './components/FunctionsHandsonTable'
import { HandsonTableComp } from './components/HandsonTableComp';




registerAllModules();

function App() {

  var rowsOnPage = 10;

  const [pageno, setpageno] = useState(1);
  const [pagecount, setpagecount] = useState();
  const [datasource, setdatasource] = useState([])
  const [hotTableDatasource, sethotTableDatasource] = useState([])

  useEffect(() => {

    async function pageNoChange() {
      if (await validateBtnClick()) {
        alert("Erorrs in data set. Please solve them and try again  ")
      } else {
        let data = await collectTableDataToList();
        await postPageData(data);
        await getPageData({ pageNo: pageno, numberOfDataInPage: rowsOnPage }).then((res) => { sethotTableDatasource(res); });
      }
    }
    pageNoChange();
  }, [pageno])



  useEffect(() => {

    async function initialRun() {
      await getAllData().then((res) => { setdatasource(res) });
      await getPageData({ pageNo: 1, numberOfDataInPage: rowsOnPage }).then((res) => { sethotTableDatasource(res); });
    }

    initialRun();
  }, [])



  useEffect(() => {
    setpagecount(Math.ceil(datasource.length / rowsOnPage));
  }, [hotTableDatasource])



  // let data = getsampledata();

  const hotTableComponent = useRef(null);

  async function collectTableDataToList() {
    let tableObjectDataToList = [];
    for (let i = 0; i < rowsOnPage; i++) {
      tableObjectDataToList[i] = hotTableComponent.current.hotInstance.getSourceDataAtRow(i);
    }
    return tableObjectDataToList;
  }

  function updateNewTableView() {
    let t = hotTableComponent.current.hotInstance.getData();
    hotTableComponent.current.hotInstance.updateSettings({
      hiddenRows: {
        rows: getHiddenDataArray(pageno, t, rowsOnPage),
        indicators: false
      }
    });
  }


  // async function paginationFunc() {

  //   // let tabledata = hotTableComponent.current.hotInstance.getData();
  //   // setpagecount(Math.ceil(tabledata.length / rowsOnPage));

  //   setpagecount(Math.ceil(datasource.length / rowsOnPage));

  // }

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
    debugger
    let issueList = findErrorSections(hotTableComponent.current.hotInstance);
    // let result = getViewDataIssuesList(pageno, issueList, rowsOnPage);
    drawSectionBoders(hotTableComponent.current.hotInstance, issueList);
    // checkValidation(result);


    var t2 = performance.now();
    console.log("validateBtnClick function Take " + (t2 - t1) + " milliseconds.");

    if (issueList.length !== 0)
      return true;
    else return false;


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
            <HandsonTableComp dataSource={hotTableDatasource} hotTableforwardRef={hotTableComponent} />
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
