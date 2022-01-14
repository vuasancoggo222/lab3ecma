const Header ={
    render(){
        return /* html */`
        <header>
     <div class="header__top py-4 bg-[#272f54]">
      <div class="logo">
       <a href=""><img src="./img/logo.png" alt="" class="w-48 mx-auto"></a>
      </div>
     </div>
     <div class="header__main  bg-[#c97802]">
      <nav class="">
        <ul class="flex">
          <li><a href="/" class=" block pl-8 mt-8 text-lg hover:underline decoration-1 text-[#ffffff]">Home</a></li>
          <li><a href="/about" class=" block mt-8 pl-8 text-lg hover:underline decoration-1 text-[#ffffff]">About</a></li>
          <li><a href="/product" class=" block mt-8 pl-8 text-lg hover:underline decoration-1 text-[#ffffff]">Product</a></li>
          <li><a href="/contact" class="block pl-8 mt-8 text-lg hover:underline decoration-1 text-[#ffffff]">Contact</a></li>
          <li><a href="/admin/dashboard" class=" block pl-8 mt-8 text-lg hover:underline decoration-1 text-[#ffffff]">Dashboard</a></li>
          <li><a href="/signup" class="block pl-8 mt-8 text-lg hover:underline decoration-1 text-[#ffffff]">Sign Up</a></li>
          <li><a href="/signin" class=" block pl-8 mt-8 text-lg hover:underline decoration-1 text-[#ffffff]">Sign In</a></li>
        </ul>
      </nav>
      <div class=" search  w-auto relative bottom-7 left-[800px] ">
        <input type="text" class="w-80 h-8 rounded pl-4">
        <button class="bg-[#272f54] px-6 relative left-2 text-[#ffffff]">TÌM KIẾM</button>
      </div>
     </div>
     </header>
        `
    },
}
export default Header;