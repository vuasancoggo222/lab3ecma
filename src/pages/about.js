import Header from "../components/header";
import Footer from "../components/footer";
const AboutPage = {
    render() {
        return /*html*/ `
        <div class="max-w-screen-xl m-auto">
      <div>
      ${Header.render()}
      </div>
  <div>
     <h1>About Page</h1>
  </div>
  <div>
  ${Footer.render()}
  </div>
      </div>
        `;
    },
};
export default AboutPage;