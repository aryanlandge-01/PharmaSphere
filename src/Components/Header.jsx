import { useSelector } from "react-redux";
import { Link } from "react-router-dom"



const Header = () => {

  const user = useSelector(store => store.user);

  // console.log(user);

   
  return (
    <div className="flex justify-between  bg-gradient-to-t from-cyan-500 to-white-500">
        <div>
            <img className="h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFTGdlpSjm2UnzPbe1V3-cUGIxkmZKfEZhIQ&usqp=CAU" alt="Logo" />
        </div>
        <div className="flex gap-16 items-center text-lg text-white font-semibold  ">
           <Link to={"/"}><h3>Home</h3></Link> 
           <Link to={"/medicines"}><h3>Medicines</h3></Link>  
           <Link to={"/contact"}><h3>Cart</h3></Link>
           {
            user ? <img  className="h-12 w-12" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="user-icon"/>  : <Link to={"/login"}><h3>Login/Sign-up</h3></Link>
           }
          
        </div>
    </div>
  )
}

export default Header;
