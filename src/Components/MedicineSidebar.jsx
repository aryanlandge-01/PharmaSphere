

const MedicineSidebar = () => {
  return (
    <div className='rounded-l-xl p-10 bg-white shadow-xl h-screen w-full '>
        <h1 className="mb-10 font-semibold text-2xl text-gray-700">Filter</h1>
        <h2 className="mb-4 font-semibold text-lg">Category</h2>
        <h3 className="mb-4 font-medium text-blue-700">Top Products</h3>
        <div className="flex flex-col gap-2 my-10"> 
           <h2 className="mb-4 font-semibold text-lg">Sub-Category</h2>
           <ul className="text-sm no-underline ">
           <li className="mb-2">Diabeties</li>
           <li className="mb-2">Vitamins</li>
           <li className="mb-2">Skin Care</li>
           <li className="mb-2">Feet Problem</li>
           </ul>
        </div>
        <div>
           <h2 className="mb-4 font-semibold text-lg">Brands</h2>
           <input type="text" placeholder="Search" className="mr-1 mb-3 bg-transparent p-2 rounded-lg border-2 border-gray-500"  />
           <ul className="text-sm no-underline ">
           <li className="mb-2">Everhub</li>
           <li className="mb-2">Liveeasy</li>
           <li className="mb-2">Cipla</li>
           </ul>
        </div>
       
    </div>
  )
}

export default MedicineSidebar;