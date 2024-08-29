import { eventNames } from "process";
import React, { useState } from "react";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [login, setLogin] = useState(true)
    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [response, setResponse] = useState<string>("")
    const [cookies, setCookie, removeCookie] = useCookies<string>(['authcookie']);
    const navigate = useNavigate()


    function loginUser() {

        if (login) {
            console.log(login)

        }

        else {
            console.log("login is set to the false ")
            setLogin(false)
        }


    }

    // async operation for the signup form submit 
    async function signupformsubmit(event: any) {
        event.preventDefault()

        if (!email || !username || !password) {
            return console.log("all fields required")

        }
        console.log("Try to connect with the server")

        fetch("http://172.22.47.37:8001/signup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(
                    {
                        username: username,
                        email: email,
                        password: password,
                    }

                )
            }


        ).then((data) => data.json())
            .catch((err) => console.log(err))
            .then((data) => {

                if (data) {
                    console.log(data)
                    setCookie("authcookie", data)
                    navigate("/")
                }
                else {
                    setResponse("unable to login")


                }


            }

            )

    }



    async function formSubmit(event: any) {

        event.preventDefault()

        if (email && password) {

            try {
                console.log(email)
                console.log(password)
                const res = await fetch("http://172.22.47.37:8001/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"  // Ensure the content type is set to JSON
                    },
                    body: JSON.stringify({  // Convert the JavaScript object to a JSON string
                        email: email,
                        password: password
                    })
                });

                const responsedata = await res.json()
                if (!responsedata) {
                    return setResponse("unable to login")
                }
                setCookie("authcookie", responsedata)
                navigate("/")

            }

            catch (e) {
                console.log(e)
            }







            console.log(email, password)
        }


    }



    return (
        <div>
            {login &&

                <div className="loginpage  flex flex-col justify-center items-center gap-5 p-10 ">
                    <form action="" className=" border-[2px] rounded-3xl flex flex-col justify-center items-center gap-5 p-20" onSubmit={(event) => formSubmit(event)} >
                        <div className=" flex  justify-between w-[100%] text-white ">
                            <span className=" text-white">Email</span>
                            <input type="email" placeholder="email" className=" bg-transparent" onChange={(event) => { setEmail(event.target.value) }} value={email} />
                        </div>

                        <div className="flex  justify-between text-white   " >
                            <span className=" text-white mr-5">password</span>
                            <input type="password" placeholder="password" className=" bg-transparent" value={password} onChange={(event) => { setPassword(event.target.value) }} />
                        </div>


                        <div className="options flex  justify-between  w-[100%] mt-10 text-white" >
                            <button className=" text-white px-8 border-2  rounded-3xl" onClick={() => {
                                loginUser()

                            }} type="submit"

                            >login</button>
                            <button className="  text-white px-8 border-2 rounded-3xl" onClick={() => {
                                setEmail("")
                                setResponse("")
                                setPassword("")
                                setLogin(false)
                            }} type="submit"  >signup</button>
                        </div>



                    </form>
                </div>






            }

            {
                !login &&
                <div className="signupage  flex flex-col justify-center items-center gap-5 p-10" onSubmit={(event) => signupformsubmit(event)} >

                    <form action="" className=" border-[2px] rounded-3xl flex flex-col justify-center items-center gap-5 p-20">

                        <div className=" flex  justify-between w-[100%] ">
                            <span className=" text-white">username</span>
                            <input
                                type="text"
                                placeholder="username"
                                value={username} className=" 
                            bg-transparent text-white"
                                onChange={(event) => { setUsername(event.target.value) }}
                            />
                        </div>



                        <div className=" flex  justify-between w-[100%] ">
                            <span className=" text-white">Email</span>
                            <input
                                type="email"
                                placeholder="email"
                                value={email}
                                className=" bg-transparent text-white"
                                onChange={(event) => { setEmail(event.target.value) }}


                            />
                        </div>

                        <div className="flex  justify-between   " >
                            <span className=" text-white mr-5">password</span>
                            <input type="password" placeholder="password" value={password} className=" bg-transparent text-white"
                                onChange={(event) => { setPassword(event.target.value) }}
                            />
                        </div>


                        <div className="options flex  justify-between  w-[100%] mt-10">
                            <button className=" text-white px-8 border-2  rounded-3xl" onClick={() => {
                                setLogin(true)
                                setEmail("")
                                setResponse("")
                                setPassword("")
                            }} type="submit">login</button>
                            <button className="  text-white px-8 border-2 rounded-3xl" onClick={() => {

                            }} type="submit">signup</button>
                        </div>





                    </form>


                </div>
            }

            <p className=" text-white flex items-center justify-center" >{response}</p>

        </div>



    )
}