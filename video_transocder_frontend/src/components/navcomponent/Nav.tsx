
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



export default function Nav() {

    function navdialogue(){
       const nav_dialogue= document.getElementById("nav-dialogue")
       if (nav_dialogue){
        console.log("hello")
        nav_dialogue.classList.toggle("hidden");
        nav_dialogue.classList.toggle("translate-y-60");
    
       }
    }




    return (
        <div className="  overflow-hidden">
            <nav id="navicon" className=" mx-10   text-blue-50 flex justify-between p-4 items-center text-center overflow-hidden  ">

                <div>
                    100Xdevs
                </div>



                <div className="max-md:hidden " >
                    <ul className=" flex gap-[50px] list-none">
                        <li>
                            <Link to="/">Course</Link>

                        </li>

                        <li>
                            <Link to="/testimonials">Testimonials</Link>
                        </li>

                        <li>
                            <Link to="/FAQ">FAQs</Link>
                        </li>

                    </ul>

                </div>




                <div className="max-md:hidden">
                    <li className=" list-none">
                        <Link to="/login">LOGIN</Link>
                    </li>
                </div>



                <FontAwesomeIcon icon={faBars} className=" md:hidden" onClick={()=>{  navdialogue()}} />




             



            </nav>



 
               
   

                <div id="nav-dialogue" className="top-1 mt-20  px-10 py-5 text-white rounded-lg   transition-transform duration-300 absolute right-0 hidden " >
                    <ul className="flex flex-col gap-5">
                        <li className=" border-2 px-4 py-1 rounded-lg">
                            <Link to="/">Course</Link>

                        </li>

                        <li className="border-2 px-4 py-1 rounded-lg">
                            <Link to="/testimonials">Testimonials</Link>
                        </li>

                        <li className="border-2 px-4 py-1 rounded-lg">
                            <Link to="/FAQ">FAQs</Link>
                        </li>

                    </ul>


                </div>






        </div>









    )
}