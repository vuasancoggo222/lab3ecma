import NavAdmin from "../components/NavAdmin";
import FormEditNews from "../components/FormEditNews";
const EditNewsPage ={
render :()=>{
    return`
    ${NavAdmin.render()}
    ${FormEditNews.render()}
    `
}
}
export default EditNewsPage;