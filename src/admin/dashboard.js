import NavAdmin  from "../components/NavAdmin";
import DashboardData from "../components/dashboardData";
const DashboardPage ={
    render(){
        return /* html */`
        ${NavAdmin.render()}
        ${DashboardData.render()}
        `
    },
}
export default DashboardPage;