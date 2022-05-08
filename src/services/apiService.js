import axios from "axios";

var baseUrl ="https://localhost:7246/";

// interface PageDataRequestDto{
//     pageNo : Number,
//     numberOfDataInPage: Number
// }


export const postDataService = (data) => {
    debugger
    return axios({
        method: "POST",
        url: "",
        data: data
    });
}

export const getAllData = async () => {
    let result = [];
    await axios.get(baseUrl+'api/Data/getAllData')
        .then(function (response) {
            // handle success
           // console.log(response.data);
            result = response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

    return result;
}

export const getPageData = async (data) => {
    let result = [];
    await axios.post(baseUrl+'api/Data/getdataAtPage',data)
        .then(function (response) {
            // handle success
           // console.log(response.data);
            result = response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

    return result;
}