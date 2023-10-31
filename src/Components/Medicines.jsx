import MedicineSidebar from './MedicineSidebar';
import MedicineContainer from './MedicineContainer';
// import api from "../api/product";

const Medicines = () => {


  return (
    <div className='mt-12 mb-4 mx-28 grid grid-cols-4  '>
     <div className='col-span-1 '>
       <MedicineSidebar />
     </div>
     <div className='col-span-3 '>
        <MedicineContainer />
     </div>
    </div>
  )
}

export default Medicines;