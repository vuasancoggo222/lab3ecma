import NavAdmin from "../components/NavAdmin";
import NewsData from "../components/NewsData";
const AdminNewsPage ={
    render: ()=>{
        return`
        ${NavAdmin.render()}
        ${NewsData.render()}
        `
    },
}
export default AdminNewsPage;