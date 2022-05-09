
export const getsampledata = () => {

    const dataArray = [
        { "id": 1, "unit": "A", "skill1": 0.5, "skill2": 0.2, "skill3": 0.3, "capacity1": 0.2, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 2, "unit": "B", "skill1": 0.5, "skill2": 0.4, "skill3": 0.3, "capacity1": 0.3, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 3, "unit": "C", "skill1": 0.5, "skill2": 0.2, "skill3": 0.4, "capacity1": 0.4, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 4, "unit": "D", "skill1": 0.4, "skill2": 0.2, "skill3": 0.3, "capacity1": 0.2, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 5, "unit": "E", "skill1": 0.5, "skill2": 0.4, "skill3": 0.3, "capacity1": 0.3, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 6, "unit": "F", "skill1": 0.5, "skill2": 0.2, "skill3": 0.4, "capacity1": 0.4, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 7, "unit": "G", "skill1": 0.5, "skill2": 0.2, "skill3": 0.3, "capacity1": 0.2, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 8, "unit": "H", "skill1": 0.4, "skill2": 0.2, "skill3": 0.3, "capacity1": 0.3, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 9, "unit": "I", "skill1": 0.4, "skill2": 0.2, "skill3": 0.4, "capacity1": 0.4, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 10, "unit": "J", "skill1": 0.5, "skill2": 0.2, "skill3": 0.3, "capacity1": 0.2, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 1, "unit": "A", "skill1": 0.5, "skill2": 0.2, "skill3": 0.3, "capacity1": 0.2, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 2, "unit": "B", "skill1": 0.5, "skill2": 0.4, "skill3": 0.3, "capacity1": 0.3, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 3, "unit": "C", "skill1": 0.5, "skill2": 0.2, "skill3": 0.4, "capacity1": 0.4, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 4, "unit": "D", "skill1": 0.4, "skill2": 0.2, "skill3": 0.3, "capacity1": 0.2, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 5, "unit": "E", "skill1": 0.5, "skill2": 0.4, "skill3": 0.3, "capacity1": 0.3, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 6, "unit": "F", "skill1": 0.5, "skill2": 0.2, "skill3": 0.4, "capacity1": 0.4, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 7, "unit": "G", "skill1": 0.5, "skill2": 0.2, "skill3": 0.3, "capacity1": 0.2, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 8, "unit": "H", "skill1": 0.4, "skill2": 0.2, "skill3": 0.3, "capacity1": 0.3, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 9, "unit": "I", "skill1": 0.4, "skill2": 0.2, "skill3": 0.4, "capacity1": 0.4, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 10, "unit": "J", "skill1": 0.5, "skill2": 0.2, "skill3": 0.3, "capacity1": 0.2, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 1, "unit": "A", "skill1": 0.5, "skill2": 0.2, "skill3": 0.3, "capacity1": 0.2, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 2, "unit": "B", "skill1": 0.5, "skill2": 0.4, "skill3": 0.3, "capacity1": 0.3, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 3, "unit": "C", "skill1": 0.5, "skill2": 0.2, "skill3": 0.4, "capacity1": 0.4, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 4, "unit": "D", "skill1": 0.4, "skill2": 0.2, "skill3": 0.3, "capacity1": 0.2, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 5, "unit": "E", "skill1": 0.5, "skill2": 0.4, "skill3": 0.3, "capacity1": 0.3, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 6, "unit": "F", "skill1": 0.5, "skill2": 0.2, "skill3": 0.4, "capacity1": 0.4, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 7, "unit": "G", "skill1": 0.5, "skill2": 0.2, "skill3": 0.3, "capacity1": 0.2, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 8, "unit": "H", "skill1": 0.4, "skill2": 0.2, "skill3": 0.3, "capacity1": 0.3, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 9, "unit": "I", "skill1": 0.4, "skill2": 0.2, "skill3": 0.4, "capacity1": 0.4, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 },
        { "id": 10, "unit": "J", "skill1": 0.5, "skill2": 0.2, "skill3": 0.3, "capacity1": 0.2, "capacity2": 0.2, "capacity3": 0.2, "capacity4": 0.2, "rate": 0.5 }
   
   
    ]

    return dataArray;
    // let dataArray=[];

    // for(let i=0;i<500;i++){
    //     let subArry =[];

    //     subArry[0] =  Math.random().toString(36).substring(2,8);
    //     for(let j =1;j<9;j++){
    //         subArry[j] = Math.random().toFixed(2);
    //     }

    //     dataArray.push(subArry);
    // }

    // return dataArray;

    const data = [
        ["A", 0.25, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5],
        ["B", 0.35, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.2],
        ["C", 0.5, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.3],
        ["A", 0.25, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5],
        ["B", 0.35, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.2],
        ["C", 0.5, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.3],
        ["A", 0.25, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5],
        ["B", 0.35, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.2],
        ["C", 0.5, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.3],
        ["A", 0.25, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5],
        ["B", 0.35, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.2],
        ["C", 0.5, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.3],
        ["A", 0.25, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5],
        ["B", 0.35, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.2],
        ["C", 0.5, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.3],
        ["A", 0.25, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5],
        ["B", 0.35, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.2],
        ["C", 0.5, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.3],
        ["A", 0.25, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5],
        ["B", 0.35, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.2],
        ["C", 0.5, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.3],
        ["A", 0.25, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5],
        ["B", 0.35, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.2],
        ["C", 0.5, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.3],
        ["A", 0.25, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5],
        ["B", 0.35, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.2],
        ["C", 0.5, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.3],
        ["A", 0.25, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5],
        ["B", 0.35, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.2],
        ["C", 0.5, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.3],
        ["A", 0.25, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5],
        ["B", 0.35, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.2],
        ["C", 0.5, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.3],
        ["A", 0.25, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5],
        ["B", 0.35, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.2],
        ["C", 0.5, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.3],
        ["A", 0.25, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5],
        ["B", 0.35, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.2],
        ["C", 0.5, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.3],
        ["A", 0.25, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5],
        ["B", 0.35, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.2],
        ["C", 0.5, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.3],
        ["A", 0.25, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5],
        ["B", 0.35, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.2],
        ["C", 0.5, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.3],
        ["A", 0.25, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5],
        ["B", 0.35, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.2],
        ["C", 0.5, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.3],
        ["A", 0.25, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5],
        ["B", 0.35, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.2],
        ["C", 0.5, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.3],
        ["A", 0.25, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5],
        ["B", 0.35, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.2],
        ["C", 0.5, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.3],
        ["A", 0.25, 0.25, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5],

    ];


}
