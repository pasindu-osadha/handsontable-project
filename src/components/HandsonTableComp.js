import React, { useRef, useEffect, useState } from 'react'
import '../App.css';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import { getAllData } from '../services/apiService'


registerAllModules();

export const HandsonTableComp = ({ dataSource, hotTableforwardRef }) => {

  

    useEffect(() => {
        console.log('handsontable component is mounted')

    }, [])


    function getDataBtnClick() {
        let data = hotTableforwardRef.current.hotInstance.getSourceDataAtRow(4);
        console.log(data);
    }

    return (
        <div>
            <HotTable
                ref={hotTableforwardRef}
                data={dataSource}
                colHeaders={["Unit", "skill 1", "skill 2", "skill 3", "capacity 1", "capacity 2", "capacity 3", "capacity 4", "rate"]}
                rowHeaders={true}
                columns={[{
                    data: 'unit',
                    type: 'text',
                },
                {
                    data: 'skill1',
                    type: 'numeric',
                },
                {
                    data: 'skill2',
                    type: 'numeric',
                },
                {
                    data: 'skill3',
                    type: 'numeric',
                },
                {
                    data: 'capacity1',
                    type: 'numeric',
                    numericFormat: {
                        pattern: '%'
                    }
                },
                {
                    data: 'capacity2',
                    type: 'numeric',
                    numericFormat: {
                        pattern: '%'
                    }
                },
                {
                    data: 'capacity3',
                    type: 'numeric',
                    numericFormat: {
                        pattern: '%'
                    }
                },
                {
                    data: 'capacity4',
                    type: 'numeric',
                    numericFormat: {
                        pattern: '%'
                    }
                },
                {
                    data: 'rate',
                    type: 'numeric',
                    numericFormat: {
                        pattern: '%'
                    }
                }]}
                stretchH='all'
                manualColumnResize={true}
                filters={true}
                dropdownMenu={true}
            /></div>
    )
}
