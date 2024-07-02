import React from "react";

function Footer() {
  return (
    <div class="text-center p-6 bg-black footer">
      <span class="text-white">&copy; 2022-{(new Date().getFullYear())} Copyright - </span>
      <a class="link-underline text-white font-bold cursor-pointer" >Developer Awais</a>
    </div>
  )
}


export default Footer
