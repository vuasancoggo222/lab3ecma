import Banner from "../components/Banner";
import NewsList from "../components/newsList";
import Header from "../components/header";
import Footer from "../components/footer";
const HomePage = {
    render() {
        return /* html */`
      <div class="max-w-screen-xl m-auto">
      <div>
      ${Header.render()}
      </div>
      <div class="banner">
      ${Banner.render()}
  </div>
  <div>
      ${NewsList.render()}
  </div>
  <div>
  ${Footer.render()}
  </div>
      </div>
         
      `;
    },
};
export default HomePage;