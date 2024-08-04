import React from 'react'

const Footer = () => {
   return (
      <footer class="bg-[#070707]">
         <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="md:flex md:justify-between">
               <div class="mb-6 md:mb-0">
                  <a href="https://flowbite.com/" class="flex items-center">
                     <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="Goflash Logo" />
                     <span class="self-center text-2xl font-semibold whitespace-nowrap ">Flowbite</span>
                  </a>
               </div>
               <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                  <div>
                     <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                     <ul class="text-white font-medium">
                        <li class="mb-4">
                           <a href="https://flowbite.com/" class="hover:underline">Flowbite</a>
                        </li>
                        <li>
                           <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                     <ul class="text-white font-medium">
                        <li class="mb-4">
                           <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                        </li>
                        <li>
                           <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                     <ul class="text-white font-medium">
                        <li class="mb-4">
                           <a href="#" class="hover:underline">Privacy Policy</a>
                        </li>
                        <li>
                           <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <hr class="my-6 border-white sm:mx-auto lg:my-8" />
            <div class="sm:flex sm:items-center items-center sm:justify-between">



            </div>
         </div>
      </footer>
   )
}

export default Footer