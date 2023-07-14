"use client";
// import { Fragment, useState } from "react";
// import Image from "next/image";
// import {
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
//   Input,
// } from "@material-tailwind/react";

import "./globals.css";
import AuthDialogBox from "./Components/AuthForm/page";

export default function Home() {
  return (
    <main><AuthDialogBox />
    </main>
  );
}
