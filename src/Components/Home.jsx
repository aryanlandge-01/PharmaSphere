import Sliders from "./Sliders"




const Home = () => {
  return (
    <div>
        <div className="mt-12 ml-10 p-10 flex justify-between items-center">
          <div className="w-80 flex  flex-col gap-5">
            <h1 className="font-bold  text-4xl">Health is the most important thing</h1>
            <p className="font-light text-white">
              A fit Body,a calm mind,a house full of love.
              These things can not be bought.They must be earned. 
              Health will change life to be a happy.
            </p>
            <div className="flex">
              <input className="w-full p-2 rounded-l-lg" type="text" placeholder="Find your medicines here"/>
              <img className="h-10 rounded-r-lg" src="https://png.pngtree.com/element_our/20190529/ourmid/pngtree-cartoon-blue-magnifying-glass-illustration-image_1214215.jpg" alt="search-icon" />
            </div>
          </div>
          <div className="">
            <img className="h-72 w-full rounded-lg " src="https://media.istockphoto.com/id/1300036753/photo/falling-antibiotics-healthcare-background.jpg?s=612x612&w=0&k=20&c=oquxJiLqE33ePw2qML9UtKJgyYUqjkLFwxT84Pr-WPk=" alt="heros_img" />
          </div>
        </div>
         <Sliders />
         <Sliders />
         <Sliders />
       
     
    </div>
  )
}

export default Home