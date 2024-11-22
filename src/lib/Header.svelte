<script>
    import {fade} from 'svelte/transition';
    import { clickOutside } from '../clickOutside.js';

    let activeMenu = null;
    let isMenuOpen = false;

    function toggleDropdown(dropDownId) {
        activeMenu = activeMenu === dropDownId ? null : dropDownId;
    }
    function toggleHamburger() {
        isMenuOpen = !isMenuOpen;
    }
</script>

    <header class="bg-white" use:clickOutside on:click_outside={() => activeMenu = null}>
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="/" class="flex items-center">
                    <img src="https://brand.ncsu.edu/assets/logos/ncstate-brick-2x1-red-min.png" class="mr-3" alt="Flowbite Logo" />
                    <span class="self-center text-xl whitespace-nowrap dark:text-white">NCSU App</span>
                </a>
            </div>
            <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" on:click={toggleHamburger}>
                <span class="sr-only">Open main menu</span>
                <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-4">
                <a href="/" class="text-sm/6 font-semibold text-gray-900">Home</a>
                <div class="relative">
                    <button type="button" class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900" aria-expanded="false" on:click={()=> toggleDropdown(1)}>
                        Changes
                        <svg class="size-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                        </svg>
                    </button>
            
                    <!--
                        'Product' flyout menu, show/hide based on flyout menu state.
            
                        Entering: "transition ease-out duration-200"
                        From: "opacity-0 translate-y-1"
                        To: "opacity-100 translate-y-0"
                        Leaving: "transition ease-in duration-150"
                        From: "opacity-100 translate-y-0"
                        To: "opacity-0 translate-y-1"
                    -->
                    {#if activeMenu === 1}    
                    <div transition:fade class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                        <div class="p-4">
                            <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                                <div class="flex-auto">
                                    <a href="/" class="block font-semibold text-gray-900">
                                        Change Form
                                        <span class="absolute inset-0"></span>
                                    </a>
                                    <p class="mt-1 text-gray-600">Submit changes to the campus network.</p>
                                </div>
                            </div>
                            <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                                <div class="flex-auto">
                                    <a href="/" class="block font-semibold text-gray-900">
                                        Rack Editor
                                        <span class="absolute inset-0"></span>
                                    </a>
                                    <p class="mt-1 text-gray-600">Interactive way to see and submit changes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}
                </div>
                <div class="relative">
                    <button type="button" class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900" aria-expanded="false" on:click={() => toggleDropdown(2)}>
                        Data Management
                        <svg class="size-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    {#if activeMenu === 2}    
                    <div transition:fade class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                        <div class="p-4">
                            <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                                <div class="flex-auto">
                                    <a href="/" class="block font-semibold text-gray-900">
                                        Change Forms
                                        <span class="absolute inset-0"></span>
                                    </a>
                                    <p class="mt-1 text-gray-600">Submitted changes to be processed.</p>
                                </div>
                            </div>
                            <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                                <div class="flex-auto">
                                    <a href="/" class="block font-semibold text-gray-900">
                                        Floor Plans
                                        <span class="absolute inset-0"></span>
                                    </a>
                                    <p class="mt-1 text-gray-600">Interface for adding floorplans, wifi, wifi6</p>
                                </div>
                            </div>
                            <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                                <div class="flex-auto">
                                    <a href="/" class="block font-semibold text-gray-900">
                                        Buildings
                                        <span class="absolute inset-0"></span>
                                    </a>
                                    <p class="mt-1 text-gray-600">List of buildings with building information.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}
                </div>
                <a href="/" class="text-sm/6 font-semibold text-gray-900">Adopt IDF</a>
                <a href="/" class="text-sm/6 font-semibold text-gray-900">Sandbox</a>
                <div class="relative">
                    <button type="button" class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900" aria-expanded="false" on:click={() => toggleDropdown(3)}>
                        Wiring Standards
                        <svg class="size-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    {#if activeMenu === 3}    
                    <div transition:fade class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                        <div class="p-4">
                            <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                                <div class="flex-auto">
                                    <a href="/" class="block font-semibold text-gray-900">
                                        University Wiring Standard 3.0
                                        <span class="absolute inset-0"></span>
                                    </a>
                                    <p class="mt-1 text-gray-600">Submitted changes to be processed.</p>
                                </div>
                            </div>
                            <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                                <div class="flex-auto">
                                    <a href="/" class="block font-semibold text-gray-900">
                                        UWS 3.0 Detail Drawing and Photo Downloads
                                        <span class="absolute inset-0"></span>
                                    </a>
                                    <p class="mt-1 text-gray-600">Interface for adding floorplans, wifi, wifi6</p>
                                </div>
                            </div>
                            <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                                <div class="flex-auto">
                                    <a href="/" class="block font-semibold text-gray-900">
                                        History of NC State University Wiring Standards
                                        <span class="absolute inset-0"></span>
                                    </a>
                                    <p class="mt-1 text-gray-600">List of buildings with building information.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}
                </div>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="/" class="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
            </div>
        </nav>
        {#if isMenuOpen}
        <!-- Mobile menu, show/hide based on menu open state. -->
        <div class="lg:hidden" role="dialog" aria-modal="true">
            <!-- Background backdrop, show/hide based on slide-over state. -->
            <div class="fixed inset-0 z-10"></div>
            <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <a href="/" class="flex items-center">
                        <img src="https://brand.ncsu.edu/assets/logos/ncstate-brick-2x1-red-min.png" class="mr-3" alt="Flowbite Logo" />
                        <span class="self-center text-xl whitespace-nowrap dark:text-white">NCSU App</span>
                    </a>
                <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" on:click={toggleHamburger}>
                    <span class="sr-only">Close menu</span>
                    <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <div class="-mx-3">
                                <button type="button" class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false" on:click={() => toggleDropdown(1)}>
                                Product
                                <svg class="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                </svg>
                                </button>
                                {#if activeMenu === 1 } 
                                <div class="mt-2 space-y-2" id="disclosure-1">
                                    <a href="/" class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Change Form</a>
                                    <a href="/" class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Rack Editor</a>
                                </div>
                                {/if}
                            </div>
                            <div class="-mx-3">
                                <button type="button" class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false" on:click={() => toggleDropdown(2)}>
                                Data Management
                                <svg class="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                </svg>
                                </button>
                                <!-- 'Product' sub-menu, show/hide based on menu state. -->
                                {#if activeMenu === 2 } 
                                <div class="mt-2 space-y-2" id="disclosure-1">
                                    <a href="/" class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Change Forms</a>
                                    <a href="/" class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Floor Plans</a>
                                    <a href="/" class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Buildings</a>
                                </div>
                                {/if}
                            </div>
                            <a href="/" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Adopt IDF</a>
                            <a href="/" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Sandbox</a>
                            <div class="-mx-3">
                                <button type="button" class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false" on:click={() => toggleDropdown(3)}>
                                Wiring Standards
                                <svg class="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                </svg>
                                </button>
                                <!-- 'Product' sub-menu, show/hide based on menu state. -->
                                {#if activeMenu === 3 } 
                                <div class="mt-2 space-y-2" id="disclosure-1">
                                    <a href="/" class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">University Wiring Standard 3.0</a>
                                    <a href="/" class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">UWS 3.0 Detail Drawing and Photo Downloads</a>
                                    <a href="/" class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">History of NC State University Wiring Standards</a>
                                </div>
                                {/if}
                            </div>
                        </div>
                        <div class="py-6">
                            <a href="/" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/if}
    </header>
    <style>

    </style>