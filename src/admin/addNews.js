import NavAdmin from "../components/NavAdmin";
import FormAddNews from "../components/FormAddNews";
const addNewsPage ={
render :()=>{
    return`
    ${NavAdmin.render()}
    ${FormAddNews.render()}
    `
}
}
export default addNewsPage;