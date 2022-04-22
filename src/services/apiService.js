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
