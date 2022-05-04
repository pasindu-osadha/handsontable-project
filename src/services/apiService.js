import axios from "axios";
import React from 'react'

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
    await axios.get('https://localhost:7246/api/Data/getAllData')
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