import { Property } from "../../utils/interface/interface";
import "./table.css";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

interface props {
    data: Property[]
}
const cols: GridColDef[] =
    [
        { field: 'location', headerName: 'Location', width: 130 },
        { field: 'type', headerName: 'Type', width: 130 },
        {
            field: 'year',
            headerName: 'Year',
            type: 'number',
            width: 90,
            sortable: true,
        },
        {
            field: 'size',
            headerName: 'sqft',
            type: 'number',
            width: 90,
            sortable: true,
        },
        {
            field: 'room',
            headerName: 'room',
            type: 'number',
            width: 60,
            sortable: true,
        },
        {
            field: 'bathroom',
            headerName: 'bathroom',
            type: 'number',
            width: 60,
        },
        {
            field: 'den',
            headerName: 'Den',
            type: 'boolean',
            width: 60,
        },
        {
            field: 'ac',
            headerName: 'AC',
            type: 'boolean',
            width: 60,
        },
        {
            field: 'parking',
            headerName: 'Parking',
            type: 'number',
            width: 60,
        },
        {
            field: 'moa',
            headerName: 'MOA',
            type: 'number',
            width: 90,
        },
        {
            field: 'price',
            headerName: 'Price',
            type: 'number',
            width: 120,
            sortable: true,
        },
        {
            field: 'unitPrice',
            headerName: 'Price per sqft',
            type: 'number',
            width: 90,
            valueGetter: (v: GridValueGetterParams) => v.row.price / v.row.size,
            sortable: true,
        }
    ];

function TestTable( {data} : props ) {
    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid
                rows={data}
                columns={cols}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}

export default TestTable;