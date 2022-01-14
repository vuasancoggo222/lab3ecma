import Header from "../components/header";
import Footer from "../components/footer";
import data from "../data"
const DetailsNewsPage = {
    render(id) {
        const result = data.find((post)=> post.id === id)
        return /*html*/ `
        <div class="max-w-screen-xl m-auto">
      <div>
      ${Header.render()}
      </div>
      <div id="detail">
      <h1>${result.title}</h1>
        <img src="${result.img}" />    
              <p>${result.desc}</p>
      </div>
  <div>
  ${Footer.render()}
  </div>
      </div>
        `;
    },
};
export default DetailsNewsPage;
