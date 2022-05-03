

export function findErrorSections(hotTableInstance) {

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

        // category section 
        dataset = tableResultdata[r];
        sum = 0;

        for (let c = 4; c < 8; c++) {
            sum = sum + dataset[c];
        }

        if (sum !== 1) {
            issueList.push({ "range": { "from": { "row": r, "col": 4 }, "to": { "row": r, "col": 7 } }, "top": { "width": 2, "color": "red" }, "left": { "width": 2, "color": "red" }, "bottom": { "width": 2, "color": "red" }, "right": { "width": 2, "color": "red" } });
        }

    }

    var t4 = performance.now();
    console.log("Find error section function Take " + (t4 - t3) + " milliseconds.");

    return issueList;
}


export function drawSectionBoders(hotTableInstance, issueList) {

    hotTableInstance.updateSettings({
        customBorders: []
    });
    hotTableInstance.updateSettings({
        customBorders: issueList
    });
}

export function getHiddenDataArray(clicked, hotTableInstanceArray, rowsOnPage) {
    let HiddenArr = []; // store  hidden data indexes 

    if (clicked === 1) {
        for (let i = (clicked * rowsOnPage); i < hotTableInstanceArray.length; i++) {
            HiddenArr.push(i);
        }
        return HiddenArr;
    } else {
        for (let j = 0; j < (clicked * rowsOnPage) - rowsOnPage; j++) {
            HiddenArr.push(j);
        }
        for (let i = (clicked * rowsOnPage); i < hotTableInstanceArray.length; i++) {
            HiddenArr.push(i);
        }

        return HiddenArr;
    }
}

export function getViewDataIssuesList(clicked, issueList,rowsOnPage) {

    let viewDataIssueList = []; // store view data Issue List as a arrays

    let startIndex = (clicked - 1) * rowsOnPage;
    let endIndex = (issueList.length < (startIndex + rowsOnPage)) ? issueList.length : (startIndex + rowsOnPage);

    for (let i = startIndex; i < endIndex; i++) {

        let resultArr = issueList.filter(issue => issue.range.from.row === i);

        if (resultArr.length !== 0) {
            for (let a = 0; a < resultArr.length; a++) {
                viewDataIssueList.push(resultArr[a]);
            }
        }

    }
    return viewDataIssueList;
}

export function checkValidation(issueList) {
  
    if (issueList.length !== 0) {

      let skillobject = issueList.find(skill => skill.range.from.col === 1 && skill.range.to.col === 3);
      let capacityObject = issueList.find(skill => skill.range.from.col === 4 && skill.range.to.col === 7);

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

