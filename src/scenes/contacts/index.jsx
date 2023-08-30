import { Box, useTheme } from "@mui/material"
import Header from "../../components/Header"
import { tokens } from "../../theme"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { mockDataContacts } from "../../data/mockData"

const Contacts = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registrarId", headerName: "Client ID"},
        { 
            field: "name", 
            headerName: "Name", 
            flex: 1, 
            cellClassName: "name-column--cell" 
        },
        { 
            field: "age", 
            headerName: "Age", 
            type: "number",
            headerAlign: "left",
            align: "left"
        },
        { 
            field: "phone", 
            headerName: "Phone Number", 
            flex: 1
        },
        { 
            field: "email", 
            headerName: "Email", 
            flex: 1
        },
        { 
            field: "address", 
            headerName: "Address", 
            flex: 1
        },
        { 
            field: "city", 
            headerName: "City", 
            flex: 1
        },
        { 
            field: "zipCode", 
            headerName: "ZIP Code", 
            flex: 1
        },
    ]

    return (
        <Box m="20px 35px">
            <Header title="Contacts" subtitle="List of contacts" />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.blueAccent[300],
                        fontWeight: "bold"
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[900],
                        color: colors.grey[300],
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: colors.blueAccent[900],
                        borderTop: "none"
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`
                    },
                }}>
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    )
}

export default Contacts