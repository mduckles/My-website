<script>
import { page } from '$app/stores';
</script>

<nav class="relative w-full flex flex-wrap items-center justify-between bg-richblack-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light py-0 ">
    <div class="container-fluid w-full flex flex-wrap items-center justify-right px-6 p-0 m-0">
        <button class="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline px-4 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline hover:bg-richblack-500 py-5" class:active={$page.url.pathname === '/'} > 
            <a sveltekit:prefetch href="/" class="text-graylight">
                Home
            </a>
        </button>
        <button class="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline px-4 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline hover:bg-richblack-500 py-5" class:active={$page.url.pathname === '/Projects'}> 
            <a sveltekit:prefetch href="/Projects" class="text-graylight">
                Projects
            </a>
        </button>
    </div>
</nav>