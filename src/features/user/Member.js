import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../user/userSlice";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { update } from "./userSlice";

function Member() {
    const dispatch = useDispatch();

    const information = useSelector(selectUser);

    const [selectionModel, setSelectionModel] = React.useState([]);

    const columns = [
        {
            field: "Firstname",
            headerName: "NAME",
            width: 200,
            editable: true,
            valueGetter: (params) =>
                `${params.row.Firstname || ""} ${params.row.Lastname || ""}`,
        },
        {
            field: "gender",
            headerName: "GENDER",
            width: 130,
            editable: true,
        },
        {
            field: "MobliePhone",
            headerName: "MOBLIE PHONE",
            type: "number",
            width: 180,
            editable: true,
        },
        {
            field: "Nationality",
            headerName: "NATIONALITY",
            width: 180,
            editable: true,
        },
        {
            field: "Birthday",
            headerName: "BIRTHDAY",
            width: 180,
            editable: true,
        },
        {
            field: "CityzenID",
            headerName: "CITYZEN ID",
            width: 180,
            editable: true,
        },
        {
            field: "Passport No",
            headerName: "PASSPORT NO",
            width: 180,
            editable: true,
        },
        {
            field: "Expected Salary",
            headerName: "EXPECTED SALARY",
            width: 180,
            editable: true,
        },
    ];

    const handleDeleteRow = () => {
        let temp = [...information];
        let deleteList = [];
        temp.forEach((item, index) => {
            selectionModel.forEach((itemSelect, indexSelect) => {
                if (itemSelect === item.id) {
                    deleteList.push(index);
                }
            });
        });
        for (var i = deleteList.length - 1; i >= 0; i--) {
            temp.splice(deleteList[i], 1);
        }
        dispatch(update(temp));
        setSelectionModel([]);
    };

    const processRowUpdate = (newRow) => {
        let info = [...information];
        info.forEach((item, idx) => {
            if (newRow.id === item.id) {
                item = newRow;
                console.log(item);
                info[idx] = item;
            }
        });
        dispatch(update(info));
        console.log(info);
        return newRow;
    };

    return (
        <Box sx={{ height: 400, width: "100%" }}>
            <Button onClick={handleDeleteRow}>
                Delete
            </Button>
            <DataGrid
                getRowId={(row) => row.id}
                rows={information}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                // onCellEditStop={handleCellEditStop}
                processRowUpdate={processRowUpdate}
                experimentalFeatures={{ newEditingApi: true }}
                checkboxSelection
                onSelectionModelChange={(newSelectionModel) => {
                    setSelectionModel(newSelectionModel);
                }}
                disableSelectionOnClick
            />
        </Box>
    );
}

export default Member;
