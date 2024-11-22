<script>
    import Header from './lib/Header.svelte';
</script>

<Header />

<main class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 lg:px-6 py-2.5">
    <div class="md:container md:mx-auto py-2 text-base">
        <p class="py-4">The <strong>Public PLA Ground</strong> is a resource for all NCSU faculty and staff who need to know about the physical network infrastructure on campus. View the building list to see the status of each building and if it is available in the PLA Ground. The system provides connection information from jack to switch port and includes integrated data from EPIC and network monitoring tools along with floor plans with outlet locations.</p>
        <hr>
        <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-2 py-4">
            <div class="p-4">
                <h5 class="text-sm">Building Search <span class="text-slate-400 text-xs">- view building network infrastructure information</span></h5>
                <div class="py-2">
                    <label for="hs-trailing-button-add-on" class="sr-only">Building Search</label>
                    <div class="flex rounded-lg shadow-sm">
                        <input type="text" id="hs-trailing-button-add-on" name="hs-trailing-button-add-on" class="py-3 px-4 block w-9/12 border-gray-300 focus:outline-none focus:ring focus:border-blue-500 border rounded-s-lg text-sm focus:z-10" placeholder="Building Name, Number or Abbreviation">
                        <button type="button" class="p-1 w-3/12 inline-flex justify-center items-center gap-x-2 text-md font-normal rounded-e-md border font-sans text-gray-500 hover:bg-gray-500 hover:text-white focus:outline-none focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none">
                        Find Building
                        </button>
                    </div>
                </div>
            </div>
            <div class="p-4">
                <h5 class="text-sm">Outlet Trace <span class="text-slate-400 text-xs">- find out where outlet jacks go</span></h5>
                <div class="py-2">
                    <label for="hs-trailing-button-add-on" class="sr-only">Outlet Trace</label>
                    <div class="flex rounded-lg shadow-sm">
                        <select class="w-6/12 bg-gray-100 border p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Choose Building</option>
                            <option>111 Lampe Drive</option>
                            <option>1911 BLDG</option>
                            <option>2526 Hillsborough Street</option>
                            <option>2806 Hillsborough St-Bldg A</option>
                            <option>2806 Hillsborough St-Bldg B</option>
                        </select>
                        <input type="text" id="hs-trailing-button-add-on" name="hs-trailing-button-add-on" class="w-4/12 flex-1 p-2 focus:outline-none focus:ring focus:border-blue-500 border" placeholder="Outlet Name">
                        <button type="button" class="p-1 w-2/12 inline-flex justify-center items-center gap-x-2 text-md font-normal rounded-e-md border font-sans text-gray-500 hover:bg-gray-500 hover:text-white focus:outline-none focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none">
                        Trace
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<style>

</style>
