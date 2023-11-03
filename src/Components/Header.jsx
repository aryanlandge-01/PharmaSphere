import { useSelector } from "react-redux";
import { Link } from "react-router-dom"



const Header = () => {

  const user = useSelector(store => store.user);

  // console.log(user);

   
  return (
    <div className="flex justify-between  bg-gradient-to-t from-cyan-500 to-white-500">
        <div>
            <img className="h-20 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFTGdlpSjm2UnzPbe1V3-cUGIxkmZKfEZhIQ&usqp=CAU" alt="Logo" />
        </div>
        <div className="flex gap-16 items-center text-lg text-white font-semibold  ">
           <Link to={"/"}><h3>Home</h3></Link> 
           <Link to={"/medicines"}><h3>Medicines</h3></Link>
           <Link to={"/cart"}>
        
            <svg width="30" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 16L18.5 14.5L20 6" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M6 6H22" stroke="#141B34" stroke-width="1.5"/>
            <circle cx="6" cy="20" r="2" stroke="#141B34" stroke-width="1.5"/>
            <circle cx="17" cy="20" r="2" stroke="#141B34" stroke-width="1.5"/>
            <path d="M8 20L15 20" stroke="#141B34" stroke-width="1.5"/>
            <path d="M2 2H5L8 16L6.63213 18" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
            </svg>
            </Link>
           {
            user ? <img  className="h-12 w-12" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="user-icon"/>  : <Link to={"/login"}><h3>Login/Sign-up</h3></Link>
           }
          
        </div>
    </div>
  )
}

export default Header;
