import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { LectureApi } from "../lecture/LectureApi";
import { toast } from "react-toastify";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
function ListLectures() {
    const [selectionModel, setSelectionModel] = useState();
    const [lecture, setLectures] = useState([]);
    const lectureApi = new LectureApi();

    useEffect(() => {
        getLectures().then(r => { });
    }, []);

    async function getLectures() {
        const response = await lectureApi.getLectures();
        setLectures(response.data);
        console.log(response.data)
    }

    async function deleteCell(e) {
        e.preventDefault();
        console.log(e.preventDefault());
        console.log("response");
        const response = (await lectureApi.deleteLectures(selectionModel)).data;
        console.log(response);
        if (response.responseType === "SUCCESS") {
            toast.success(response.message);
            setLectures((r) => r.filter((x) => !x.id === selectionModel));
            await getLectures();
        }
        else {
            toast.error(response.message);
        }
    }

    async function updateCell(params, newValue) {
        const lessonIndex = lecture.findIndex(lecture => {
            return lecture.id === params.id;
        });
        const updateLessons = [...lecture];
        updateLessons[lessonIndex][params.field] = newValue;
        setLectures(updateLessons)
        const id = params.id;
        const response =( await lectureApi.updateLessons(id, updateLessons[lessonIndex])).data;
        toast.success(response);
    }
    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 50,
        },
        {
            field: "name",
            headerName: "Lecture name",
            width: 150,
            editable: true,
        },
        {
            field: "definition",
            headerName: "Lecture definition",
            width: 150,
            editable: true,
        },
        {
            field: "code",
            headerName: "Lecture Code",
            width: 150,
            editable: true,
        },
        {
            field: "time",
            headerName: "Lecture time",
            width: 150,
            editable: true,
        },
        {
            field: "room",
            headerName: "Lecture room",
            width: 150,
            editable: true,
        },
        {
            field: "delete",
            width: 75,
            disableColumnMenu: true,
            renderHeader: () => {
                return (
                    <IconButton onClick={deleteCell} >
                        <DeleteIcon color="primary" />
                    </IconButton>
                );
            }
        }

    ];
    return (
        <div className="list">
            <Box
                sx={{
                    height: "450px",
                    width: "95vh",
                    margin: "auto",
                    padding: "auto",
                }}
            >
                <DataGrid
                    rows={lecture}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                    onCellEditStop={(params, event) => updateCell(params, event.target.value)}
                    selectionModel={selectionModel}
                    hideFooterSelectedRowCount
                    onSelectionModelChange={(selection) => {
                        if (selection.length > 1) {
                            const selectionSet = new Set(selectionModel);
                            const result = selection.filter((s) => !selectionSet.has(s));

                            setSelectionModel(result);
                        } else {
                            setSelectionModel(selection);
                        }
                    }}
                />
            </Box>
        </div>
    );
}
export default ListLectures;