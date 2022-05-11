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
import { usePrevious } from './hooks/usePrevious';




registerAllModules();

function App() {

  var rowsOnPage = 10;

  const [pageno, setpageno] = useState(1);
  const [pagecount, setpagecount] = useState();
  const previousPageNo = usePrevious(pageno);
  const [datasource, setdatasource] = useState([])
  const [hotTableDatasource, sethotTableDatasource] = useState([])

  // This for page number changed 
  useEffect(() => {
    console.log('Previous ' + previousPageNo);
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
    debugger
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

  function addNewSheetBtnClick() {
    let hottableInstance = hotTableComponent.current.hotInstance;

    hottableInstance.updateSettings({
      minRows: rowsOnPage,
      data: [[]]
    });

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
            <Button className='m-2' onClick={addNewSheetBtnClick}>Add new sheet</Button>
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
