import TableRow from './TableRow';
import './TableContainer.css'

export default function TableContainer(props) {
    return (
        <div className='table'>
            <div className='table--header'>
                <span>Name</span>
                <span>Created</span>
                <span>Edited</span>
            </div>
            {
                props.tableData.results?.map(item => {
                    return <TableRow {...item} elementData={props.elementData} getElementData={props.getElementData}/>
                })
            }
            <div className='table--footer'>
                {props.tableData.previous !== null && <span onClick={() => props.getTableData(props.tableData.previous)}>Previous</span>}
                {/* <span>Page No. </span> */}
                {props.tableData.next !== null && <span onClick={() => props.getTableData(props.tableData.next)}>Next</span>}
            </div>
        </div>
    );
}