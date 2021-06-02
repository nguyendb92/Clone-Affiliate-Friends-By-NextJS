import MaterialTable from "material-table";
import {forwardRef} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import './data-table.module.css'

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref}/>),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref}/>),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref}/>),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref}/>),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)
};



const useStyles = makeStyles({
    caption: {
        color: "green",
        padding: 8,
        border: "1px dashed grey",
        fontSize: 20
    },
    toolbar: {
        "& > p:nth-of-type(2)": {
            fontSize: 20,
            color: "red",
            fontWeight: 600
        }
    }
});

const array = require("../../public/admin/static/data.json");
let label = ["ASP名", "案件ID", "案件名"]


function DataTable(props) {
    const data = [
        {name: "John", email: "john@gmail.com", age: 12, gender: "Male"},
        {name: "Bren", email: "bren@gmail.com", age: 24, gender: "Male"},
        {name: "Marry", email: "marry@gmail.com", age: 18, gender: "Female"},
        {name: "Shohail", email: "shohail@gmail.com", age: 25, gender: "Male"},
        {name: "Aseka", email: "aseka@gmail.com", age: 19, gender: "Female"},
        {name: "Meuko", email: "meuko@gmail.com", age: 12, gender: "Female"},
    ];
    console.log("DataTable", props.data.length, props.data[0])

    const classes = useStyles();
    return (
        <>
            <div>
                <MaterialTable
                    title="表示期間 ダウンロード"
                    data={props.data}
                    columns={props.columns}
                    options={{
                        paging: false,
                        search: false,
                        exportButton: true,
                        headerStyle: {
                            fontSize: 20,
                            backgroundColor: "rgba(102,102,102,1)",
                            color: "white",
                            textAlign: "center",
                        },

                    }}
                    icons={tableIcons}
                    classes={{
                        toolbar: classes.toolbar,
                        caption: classes.caption
                    }}
                />
            </div>
        </>
    )
}

export default DataTable;