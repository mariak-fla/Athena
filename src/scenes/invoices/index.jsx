import { Box, useTheme, Typography } from "@mui/material"
import Header from "../../components/Header"
import { tokens } from "../../theme"
import { DataGrid } from "@mui/x-data-grid"
import { mockDataInvoices } from "../../data/mockData"

const Invoices = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const columns = [
        { field: "id", headerName: "ID" },
        { 
            field: "name", 
            headerName: "Name", 
            flex: 1, 
            cellClassName: "name-column--cell" 
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
            field: "cost", 
            headerName: "Cost", 
            flex: 1,
            renderCell: (params) => (
                <Typography color={colors.blueAccent[300]}>
                    ${params.row.cost}
                </Typography>
            )
        },
        { 
            field: "date", 
            headerName: "Date", 
            flex: 1
        },
    ]

    return (
        <Box m="20px 35px">
            <Header title="Invoices" subtitle="List of invoice balances" />
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
                    "& .MuiCheckbox-root": {
                        color: `${colors.blueAccent[200]} !important`
                    },
                }}>
                <DataGrid
                    checkboxSelection
                    rows={mockDataInvoices}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Invoices