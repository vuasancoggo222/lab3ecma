import '../style.css'
import Navigo from "navigo"
import HomePage from "./pages/home"
import AboutPage from "./pages/about"
import DetailsNewsPage from "./pages/detail"
import SigninPage from "./authentication/signin"
import SignupPage from "./authentication/signup"
import DashboardPage from "./admin/dashboard"
import AdminNewsPage from './admin/news'
import addNewsPage from './admin/addNews'
import EditNewsPage from './admin/editNews'
const router = new Navigo("/",{linksSelector:"a"})
const print = (content) => {
    document.getElementById('app').innerHTML = content
}
router.on({
    "/": ()=>{
       print(HomePage.render())
    },
    "/about": () => {
        print(AboutPage.render())
    },
    "/news/:id":(value)=>{
     print(DetailsNewsPage.render(value.data.id))
    },
    "/signin":()=>{
    print(SigninPage.render())
    },
    "/signup":()=>{
        print(SignupPage.render())
        },
    "admin/dashboard":()=>{
        print(DashboardPage.render())
    },
    "admin/news":()=>{
        print(AdminNewsPage.render())
    },
    "admin/news/add":()=>{
        print(addNewsPage.render())
    },
    "admin/news/edit/:id":()=>{
        print(EditNewsPage.render())
    }   
});

router.resolve()
