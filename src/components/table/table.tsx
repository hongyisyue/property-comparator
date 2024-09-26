import { Property } from "../../utils/interface/interface";
import { DataGrid, GridColDef, GridValueGetter, GridActionsCellItem, GridRowId } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { Link } from "@material-ui/icons";
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
                flex: 0.75
            },
            {
                field: 'link',
                headerName: 'Link',
                width: 120,
                type: 'actions',
                cellClassName: 'actions',
                getActions: ({ row }) => {
                    return [
                        <GridActionsCellItem
                            icon={<Link />}
                            label="Link"
                            title={row.link}
                            onClick={() => {
                                window.open(row.link, '_blank');
                            }}
                            color="inherit"
                        />,
                    ];
                }
            },
            {
                field: 'openHouse',
                headerName: 'Open House',
                minWidth: 130,
                flex: 0.6
            },
            {
                field: 'type',
                headerName: 'Type',
                width: 100,
                flex: 0.15
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
                headerName: 'Sqft',
                type: 'number',
                width: 50,
                sortable: true,
            },
            {
                field: 'room',
                headerName: 'Room',
                type: 'number',
                width: 50,
                sortable: true,
            },
            {
                field: 'bathroom',
                headerName: 'Bath',
                type: 'number',
                width: 50,
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
                headerName: 'Park',
                type: 'number',
                width: 50,
            },
            {
                field: 'moa',
                headerName: 'MOA',
                type: 'number',
                width: 60,
            },
            {
                field: 'price',
                headerName: '$',
                type: 'number',
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
