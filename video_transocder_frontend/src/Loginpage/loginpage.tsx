import { eventNames } from "process";
import React, { useState } from "react";

export default function Login() {
    const [login, setLogin] = useState(true)
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")

    function loginUser(){
        
        if(login){
               console.log(login)

        }

        else
        {
            setLogin(false)
        }
        

    }

    function formSubmit(event:any){
        
        event.preventDefault()

        if (email && password){
            console.log(email,password)
        }


    }



    return (
        <div>
            {login &&

                <div className="loginpage  flex flex-col justify-center items-center gap-5 p-10 ">
                    <form action="" className=" border-[2px] rounded-3xl flex flex-col justify-center items-center gap-5 p-20" onSubmit={(event)=>formSubmit(event)} >
                        <div className=" flex  justify-between w-[100%] text-white ">
                            <span className=" text-white">Email</span>
                            <input type="email" placeholder="email" className=" bg-transparent" onChange={(event)=>{setEmail(event.target.value)}}  value={email} />
                        </div>

                        <div className="flex  justify-between text-white   " >
                            <span className=" text-white mr-5">password</span>
                            <input type="password" placeholder="password" className=" bg-transparent"  value={password}  onChange={(event)=>{setPassword(event.target.value)}} />
                        </div>


                        <div className="options flex  justify-between  w-[100%] mt-10 text-white" >
                            <button className=" text-white px-8 border-2  rounded-3xl" onClick={() => loginUser()} type="submit" >login</button>
                            <button className="  text-white px-8 border-2 rounded-3xl" onClick={() => { setLogin(false) }} type="submit"  >signup</button>
                        </div>



                    </form>
                </div>






            }

            {
                !login &&
                <div className="signupage  flex flex-col justify-center items-center gap-5 p-10" >

                    <form action="" className=" border-[2px] rounded-3xl flex flex-col justify-center items-center gap-5 p-20">

                        <div className=" flex  justify-between w-[100%] ">
                            <span className=" text-white">username</span>
                            <input type="text" placeholder="username" className=" bg-transparent text-white" />
                        </div>
                        <div className=" flex  justify-between w-[100%] ">
                            <span className=" text-white">Email</span>
                            <input type="email" placeholder="email" className=" bg-transparent text-white" />
                        </div>

                        <div className="flex  justify-between   " >
                            <span className=" text-white mr-5">password</span>
                            <input type="password" placeholder="password" className=" bg-transparent text-white" />
                        </div>


                        <div className="options flex  justify-between  w-[100%] mt-10">
                            <button className=" text-white px-8 border-2  rounded-3xl" onClick={() => { setLogin(true) }} type="submit">login</button>
                            <button className="  text-white px-8 border-2 rounded-3xl" onClick={() => { setLogin(false) }} type="submit">signup</button>
                        </div>



                    </form>


                </div>
            }

        </div>



    )
}