"use client";
import { Fragment, useState,  } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react"; 

import "../../globals.css";
import Head from "next/head";
import Script from "next/script";    //imports

export default function AuthDialogBox({isLog}) {     
  const router = useRouter();          //state functions
  const [signInopen, setSignInOpen] = useState(false);
  const [pwdHidden, setPwdHidden] = useState(true);
  const [signUpopen, setSignUpOpen] = useState(false);
  const [ispwdValid, setisPwdValid] = useState(Array(4).fill(false));
  const handleSignInOpen = () => {
    setSignInOpen(!signInopen);
  };
  const handleSignUpOpen = () => {
    setSignUpOpen(!signUpopen);
  };
  let eye = () => {                                 //eye svg 
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
        className="w-8 h-8 self-right ml-[100px] -mr-[100px] mt-[3px] "
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
        className="w-8 h-8 -mr-[5px] mt-[3px]"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
        />
      </svg>
    );
  };

  const handleSignInSubmit = () => {                      //SignIn POST METHOD API + fetch response 
    const form = document.querySelector("form");
    const Form = form!;
    const submitter = document.getElementById("submit");
    const formData = new FormData(Form, submitter);
    const phone = formData.get("phone");
    const pwd = formData.get("password");
    const phone_str: string = phone?.toString()!;
    const pwd_str: string = pwd?.toString()!;
    console.log(pwd_str, phone_str);

    var raw = JSON.stringify({
      password: pwd_str,
    });
    var requestOptions = {
      method: "POST",
      body: raw,
    };

    fetch(
      "http://127.0.0.1:8000/authentication/" + phone_str + "/",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const handleSignUpSubmit = () => {                       //SignUp POST method API
    const form = document.querySelector("form");
    const Form = form!;
    const submitter = document.getElementById("submit");
    const formData = new FormData(Form, submitter);
    const phone = formData.get("phone");
    const pwd = formData.get("password");
    const cnfrmpwd = formData.get("cnfrmpwd");
    const name = formData.get("name");
    const email = formData.get("email");
    const phone_str: string = phone?.toString()!;
    const pwd_str: string = pwd?.toString()!;
    const cnfrmpwd_str: string = cnfrmpwd?.toString()!;
    const name_str: string = name?.toString()!;
    let email_str: string | undefined = email?.toString();
    if (!email_str) email_str = "";
    console.log(pwd_str, phone_str, cnfrmpwd_str, name_str);
    if (cnfrmpwd_str == pwd_str) {
      var raw = JSON.stringify({
        name: name_str,
        password: pwd_str,
        phone: phone_str,
        email: email_str,
      });

      var requestOptions = {
        method: "PUT",
        body: raw,
      };

      fetch("http://127.0.0.1:8000/authentication/", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          if (result == "Successfully Registered") {
            window.open("https://www.iitr.ac.in");
          } else {
            alert(
              result
                ? "Email ID/ Phone No already registered."
                : "Unexpected Error Occured. Please Try Again."
            );
          }
        })
        
        .catch((error) => console.log("error", error));
    } else {
      alert("Passwords doesn't match");
    }
  };


  var password = document.querySelector<HTMLInputElement>("#password");
  let text, validIcons, invalidIcons;

  function valid(item: string, validIcon: string, invalidIcon: string) {
    text = document.querySelector<HTMLElement>(`#${item}`);
    text!.style.opacity = "1";
    validIcons = document.querySelector<HTMLElement>(`#${item} .${validIcon}`);
    validIcons!.style.opacity = "1";
    invalidIcons = document.querySelector<HTMLElement>(
      `#${item} .${invalidIcon}`
    );
    invalidIcons!.style.opacity = "0";
  }

  function invalid(item: string, validIcon: string, invalidIcon: string) {
    text = document.querySelector<HTMLElement>(`#${item}`);
    text!.style.opacity = "0.5";
    validIcons = document.querySelector<HTMLElement>(`#${item} .${validIcon}`);
    validIcons!.style.opacity = "0";
    invalidIcons = document.querySelector<HTMLElement>(
      `#${item} .${invalidIcon}`
    );
    invalidIcons!.style.opacity = "1";
  }

   function textChange() {
    let pwdvalid = ispwdValid.slice();
    if (password?.value.match(/[A-Z]/) != null) {
      valid("capital", "fa-check", "fa-times");

      pwdvalid[0] = true;
      setisPwdValid(pwdvalid);
    } else {
      invalid("capital", "fa-check", "fa-times");
      pwdvalid[0] = false;
      setisPwdValid(pwdvalid);
    }

    if (password?.value.match(/[0-9]/) != null) {
      valid("number", "fa-check", "fa-times");
      pwdvalid[1] = true;
      setisPwdValid(pwdvalid);
    } else {
      invalid("number", "fa-check", "fa-times");
      pwdvalid[1] = false;
      setisPwdValid(pwdvalid);
    }

    if (password?.value.match(/[!@#$%^&*]/) != null) {
      valid("special-char", "fa-check", "fa-times");
      pwdvalid[2] = true;
      setisPwdValid(pwdvalid);
    } else {
      invalid("special-char", "fa-check", "fa-times");
      pwdvalid[2] = false;
      setisPwdValid(pwdvalid);
    }

    if (password?.value.length! >= 8) {
      valid("more-than-8", "fa-check", "fa-times");
      pwdvalid[3] = true;
      setisPwdValid(pwdvalid);
    } else {
      invalid("more-than-8", "fa-check", "fa-times");
      pwdvalid[3] = false;
      setisPwdValid(pwdvalid);
    }
  }
  const handleLinkClick = (url: string) => {
    router.push(url); }

  return (
    <main>
      <Head>
        <Script src="https://kit.fontawesome.com/754add79b4.js"></Script>
        <link rel="stylesheet" href="./style.css"></link>
      </Head>
      <Fragment>
        
          <div className='p-4' onClick={() => handleLinkClick('/Profile')}>
              Profile
            </div> 
        {isLog ? <Button onClick={handleSignInOpen} variant="gradient">
          Profile 
        </Button>:<Button onClick={handleSignInOpen} variant="gradient">
          Sign In
        </Button>}
        <Dialog
          open={signInopen}
          handler={handleSignInOpen}
          className="bg-jb-blue select-none "
        >
          <DialogHeader>
            <Image
              className="mx-auto"
              src="/logo.svg"
              alt="logo of Tickets.mdg"
              width="236"
              height="68"
            ></Image>
          </DialogHeader>
          <form id="form">
            <DialogBody className="text-space-cadet mx-[50px] ">
              <label className="font-medium text-[24px] mb-1" htmlFor="phone">
                {" "}
                Phone Number
              </label>
              <Input
                type="number"
                id="phone"
                name="phone"
                className=" bg-white rounded-full text-[26px] border-none h-[3.75rem]"
                placeholder="Enter Your Phone Number"
                labelProps={{ className: "hidden" }}
              ></Input>
              <p className="mt-11 h-[60px]">
                <label
                  className=" font-medium  text-[24px] mb-1"
                  htmlFor="#password"
                >
                  {" "}
                  Password
                </label>
              </p>
              <Input
                type={pwdHidden ? "Password" : "text"}
                id="password"
                name="password"
                className=" bg-white  rounded-full  text-[26px] h-[3.75rem] border-none"
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
                  onClick={handleSignUpOpen}
                >
                  Sign Up Here!
                </Button>
              </p>
            </DialogFooter>
          </form>
        </Dialog>
      </Fragment>
      {/* +++++++++++++++++++ */}
      <Fragment>
        {/* <Button onClick={handleSignUpOpen} variant="gradient">      
          Sign Up
        </Button> */}
        <Dialog
          open={signUpopen}
          handler={handleSignUpOpen}
          className="bg-jb-blue select-none font-poppins"
        >
          <DialogHeader>
            <Image
              className="mx-auto"
              src="/logo.svg"
              alt="logo of Tickets.mdg"
              width="236"
              height="68"
            ></Image>
          </DialogHeader>
          <form id="form">
            <DialogBody className="text-space-cadet mx-[50px] ]">
              <label
                className="font-medium  text-[24px] mt-6 mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <Input
                type={"text"}
                id="name"
                name="name"
                className="bg-white rounded-full h-[3.75rem] text-[26px] border-none"
                placeholder="Enter Your Name"
                labelProps={{ className: "hidden" }}
              ></Input>
              <p className="mt-6">
                <label className="font-medium text-[24px] mb-1" htmlFor="phone">
                  Phone Number
                </label>
              </p>
              <Input
                type="number"
                id="phone"
                name="phone"
                className="bg-white rounded-full h-[3.75rem] text-[26px] border-none"
                placeholder="Enter Your Phone Number"
                labelProps={{ className: "hidden" }}
              ></Input>

              <p className="font-medium  text-[24px] mt-6 mb-1">
                <label htmlFor="email">Email</label>
              </p>
              <Input
                type={"text"}
                id="email"
                name="email"
                className="bg-white rounded-full h-[3.75rem] text-[26px] border-none"
                placeholder="Enter Your Email ID"
                labelProps={{ className: "hidden" }}
              ></Input>
              <p className="font-medium  text-[24px] mt-6 mb-1">
                <label htmlFor="password">Password</label>
              </p>
              <Input
                onInput={textChange}
                type={pwdHidden ? "Password" : "text"}
                id="password"
                name="password"
                className="bg-white rounded-full h-[3.75rem] text-[26px] border-none"
                placeholder="Enter The Password"
                labelProps={{ className: "hidden" }}
                icon={eye()}
              ></Input>
              <div className="validator font-bold">
                <p id="capital" className="mt-6">
                  <i className="fas fa-times"></i>
                  <i className="fas fa-check"></i>
                  <span>Upper Case</span>
                </p>
                <p id="special-char">
                  <i className="fas fa-times"></i>
                  <i className="fas fa-check"></i>
                  <span>Special Character</span>
                </p>
                <p id="number">
                  <i className="fas fa-times"></i>
                  <i className="fas fa-check"></i>
                  <span>Number</span>
                </p>
                <p id="more-than-8">
                  <i className="fas fa-times"></i>
                  <i className="fas fa-check"></i>
                  <span>More than 8 characters</span>
                </p>
              </div>
              <p className="font-medium  text-[24px] mt-3 mb-1">
                <label htmlFor="cnfrmpassword">Confirm Password</label>
              </p>
              <Input
                type={pwdHidden ? "Password" : "text"}
                id="cnfrmpwd"
                name="cnfrmpwd"
                className="bg-white rounded-full h-[3.75rem] text-[26px] border-none"
                placeholder="Enter the Password entered above"
                labelProps={{ className: "hidden" }}
                icon={eye()}
              ></Input>
            </DialogBody>
            <DialogFooter className="grid grid-cols-1 mt-2">
              <Button
                type="submit"
                id="signupbutton"
                disabled={ispwdValid.includes(false)}
                className=" mx-[150px] text-[30px] bg-white text-space-cadet normal-case rounded-[20px]"
                onClick={handleSignUpSubmit}
              >
                <span>Sign Up</span>
              </Button>
              <br />
              <p className="text-space-cadet mx-auto font-medium ">
                Already have an Account?&nbsp;
                <Button
                  variant="text"
                  type="submit"
                  className="p-0 text-[16px] normal-case text-space-cadet font-medium mb-[2px] focus-visible: "
                  ripple={false}
                  onClick={handleSignInOpen}
                >
                  Sign In Here!
                </Button>
              </p>
            </DialogFooter>
          </form>
        </Dialog>
      </Fragment>
    </main>
  );
}