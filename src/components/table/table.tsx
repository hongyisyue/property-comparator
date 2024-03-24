import { Property } from "../../utils/interface/interface";
import { DataGrid, GridColDef, GridValueGetter, GridActionsCellItem, GridRowId } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
interface props {
    data: Property[];
    onDelete: (r: GridRowId) => void;
}

export default function TestTable({ data, onDelete }: props) {
    const cols: GridColDef[] =
        [
            {
                field: 'location',
                headerName: 'Location',
                minWidth: 130,
                flex: 1
            },
            {
                field: 'type',
                headerName: 'Type',
                width: 100,
                flex: 0.5
            },
            {
                field: 'year',
                headerName: 'Year',
                type: 'number',
                width: 60,
                sortable: true,
            },
            {
                field: 'size',
                headerName: 'sqft',
                type: 'number',
                width: 50,
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
                width: 80,
            },
            {
                field: 'den',
                headerName: 'Den',
                type: 'boolean',
                width: 50,
            },
            {
                field: 'ac',
                headerName: 'AC',
                type: 'boolean',
                width: 50,
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
                width: 60,
            },
            {
                field: 'price',
                headerName: 'Price',
                type: 'number',
                width: 90,
                sortable: true,
                flex: 0.25
            },
            {
                field: 'unitPrice',
                headerName: '$/sqft',
                type: 'number',
                width: 60,
                valueGetter: (value, row) => row.price / row.size,
                sortable: true,
                flex: 0.25
            },
            {
                field: 'actions',
                type: 'actions',
                headerName: 'Actions',
                width: 60,
                cellClassName: 'actions',
                getActions: ({ id }) => {
                    return [
                        <GridActionsCellItem
                            icon={<DeleteIcon />}
                            label="Delete"
                            onClick={() => onDelete(id)}
                            color="inherit"
                        />,
                    ];

                },
            }
        ];
    return (
        <>
            <div className="table-container">
                <DataGrid
                    rows={data}
                    columns={cols}
                    pageSizeOptions={[5, 10, 25]}
                />
            </div>
        </>
    );
}
