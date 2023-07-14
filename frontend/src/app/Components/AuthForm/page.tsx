"use client";
import { Fragment, useState } from "react";
import Image from "next/image";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";

import "../../globals.css";
export default function AuthDialogBox() {
  const [signInopen, setSignInOpen] = useState(false);
  const [pwdHidden, setPwdHidden] = useState(true);
  const [signUpopen, setSignUpOpen] = useState(false);

  // const email = document.querySelector('#email').value
  const handleSignInOpen = () => {
    setSignInOpen(!signInopen);
  };
  const handleSignUpOpen = () => {
    setSignUpOpen(!signUpopen);
  };
  let eye = () => {
    return pwdHidden ? (
      <svg
        onClick={() => {
          setPwdHidden(!pwdHidden);
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 -ml-[15px] mt-[3px] "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => {
          setPwdHidden(!pwdHidden);
        }}
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-8 h-8 -ml-[15px] mt-[3px]"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
        />
      </svg>
    );
  };
  const handleSignInSubmit=()=>{
    const form = document.querySelector("form");
    const Form = form!
    const submitter = document.getElementById("submit");
    const formData = new FormData(Form, submitter);
    const phone = formData.get('phone')
    const pwd = formData.get('password')
    const phone_str :string = phone?.toString()!
    const pwd_str :string = pwd?.toString()!
    console.log(pwd_str, phone_str)
    // const axios = require('axios');
    // let data = JSON.stringify({
    //   "password": pwd
    // });
    
    // let config = {
    //   method: 'get',
    //   maxBodyLength: Infinity,
    //   url: 'http://127.0.0.1:8000/authentication/'+phone_str+'/',
    //   headers: { 
    //     'Content-Type': 'application/json', 
    //     'Cookie': 'csrftoken=JjVMxeIgzwIiryaBGreG57tg2YD8Cfwn9KZZgkLU3yPKhg3roWtXNz1we5DErV17'
    //   },
    //   data : {"password":pwd_str}
    // };
    
    // axios.request(config)
    // .then((response:any) => {
    //   console.log(JSON.stringify(response.data));
    //   window.open("https://www.iitr.ac.in")
    // })
    // .catch((error:any) => {
    //   console.log(error);
    // });
    var raw = JSON.stringify({
      "password": pwd_str
    });
    var requestOptions = {
      method: 'POST',
      body: raw
    };
    
    fetch("http://127.0.0.1:8000/authentication/"+phone_str+"/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
//     let request = require('request');
//     let data= JSON.stringify({
//       "password": pwd_str
//     })
// let options = {
//   'method': 'GET',
//   'url': 'http://127.0.0.1:8000/authentication/'+phone_str+'/',
//   'headers': {
//     'Content-Type': 'application/json',
//     'Cookie': 'csrftoken=JjVMxeIgzwIiryaBGreG57tg2YD8Cfwn9KZZgkLU3yPKhg3roWtXNz1we5DErV17'
//   },
//   body: data

// };
// request(options, function (error:any, response:any) {
//   if (error) throw new Error(error);
//   console.log(response.body);
// });
  }
  return (
    <main>
      <Fragment>
        <Button onClick={handleSignInOpen} variant="gradient">
          Sign In
        </Button>
        <Dialog open={signInopen} handler={handleSignInOpen} className="bg-jb-blue select-none ">
          <DialogHeader>
            <Image
              className="mx-auto"
              src="/logo.svg"
              alt="logo of Tickets.mdg"
              width="236"
              height="68"
            ></Image>
          </DialogHeader><form id='form'>
          <DialogBody className="text-space-cadet mx-[50px] ">
            
            <label className="font-medium text-[24px] mb-1" htmlFor="phone"> Name</label>
            <Input
              type="number" id="phone" name="phone"
              className=" bg-white rounded-full text-[26px] border-none"
              placeholder="Enter Your Phone Number"
              labelProps={{ className: "hidden" }}
              containerProps={{className:"h-[60px"}}
            ></Input>
            <p className="mt-11 h-[60px]"><label className=" font-medium  text-[24px] mb-1" htmlFor="#password"> Password</label></p>
            <Input
              type={pwdHidden?"Password":"text"}
              id="password" name="password"
              className=" bg-white  rounded-full  text-[26px] h-[60px] border-none"
              placeholder="Enter The Password"
              labelProps={{ className: "hidden" }}
              icon={eye()}
            ></Input>
          </DialogBody>
          <DialogFooter className="grid grid-cols-1 mt-[80px]">
         
            <Button
            type="submit"
              id="submit"
              className=" mx-[182px] text-[30px] bg-white text-space-cadet normal-case rounded-[20px]"
              onClick={handleSignInSubmit}
            >
              <span>Sign In</span>
            </Button>
            <br />
            <p className="text-space-cadet mx-auto font-medium ">
              Don&apos;t have an Account?
              <Button
                variant="text"
                className="p-0 text-[16px] normal-case text-space-cadet font-medium mb-[2px] focus-visible: "
                ripple={false}
              >
                Sign Up Here!
              </Button>
            </p>
          </DialogFooter></form>
        </Dialog>
      </Fragment>
{/* +++++++++++++++++++ */}
      <Fragment>
        <Button onClick={handleSignUpOpen} variant="gradient">
          Sign Up
        </Button>
        <Dialog open={signUpopen} handler={handleSignUpOpen} className="bg-jb-blue select-none font-poppins">
          <DialogHeader>
            <Image
              className="mx-auto"
              src="/logo.svg"
              alt="logo of Tickets.mdg"
              width="236"
              height="68"
            ></Image>
          </DialogHeader>
          <DialogBody className="text-space-cadet mx-[50px] ]">
            <p className="font-medium text-[24px] mb-1">Email</p>
            <Input
              type="Email"
              className="bg-white rounded-full h-14 text-[26px] border-none"
              placeholder="Enter Your Email"
              labelProps={{ className: "hidden" }}
            ></Input>
            <p className="font-medium  text-[24px] mt-6 mb-1">Password</p>
            <Input
              type={pwdHidden?"Password":"text"}
              className="bg-white rounded-full h-14 text-[26px] border-none"
              placeholder="Enter The Password"
              labelProps={{ className: "hidden" }}
              icon={eye()}
            ></Input>
          </DialogBody>
          <DialogFooter className="grid grid-cols-1">
         
            <Button
              className=" mx-[182px] text-[30px] bg-white text-space-cadet normal-case rounded-[20px]"
              onClick={handleSignInOpen}
            >
              <span>Sign In</span>
            </Button>
            <br />
            <p className="text-space-cadet mx-auto font-medium ">
              Don&apos;t have an Account?
              <Button
                variant="text"
                className="p-0 text-[16px] normal-case text-space-cadet font-medium mb-[2px] focus-visible: "
                ripple={false}
              >
                Sign Up Here!
              </Button>
            </p>
          </DialogFooter>
        </Dialog>
      </Fragment>
    </main>
  );
}
