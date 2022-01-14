import data from "../data";
const NewsData = {
    render() {
        return /*html*/ `
        <a href="/admin/news/add"><button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded relative left-[1310px] top-[10px]">
        Add +
      </button></a>
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr class="">
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                       Image
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                     
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">    
                       Description
                      </th>
                      <th scope="col" class="relative px-6 py-3">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    
                    ${data.map((post) => /*html*/ `
                    <tr class="">
                    <td class="px-6  whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-20 w-60">
                      <a href="/news/${post.id}">
                      <img src="${post.img}" alt="" />
                  </a>
                      </div>
                     
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900"><h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">${post.title}</a></h3> </div>
                  
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <a href="/news/${post.id}">
                            <p>${post.desc}</p> 
                            </a> 
                </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <a href="/admin/news/${post.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
            </td>         
            </tr>
            
            `).join("")}
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        `;
    },
};
export default NewsData;