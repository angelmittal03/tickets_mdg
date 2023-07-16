"use client";

import { Card, CardBody, CardFooter, Button } from "@material-tailwind/react";
import { propTypesSeparator } from "@material-tailwind/react/types/components/breadcrumbs";

import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Payment() {
  // const rows = 8, cols=9 , amount= 370.98;
  const [data, setData] = useState({
    name: "",
    date: "",
    time: "",
    price: 0,
    desc: "",
    location: "",
    availibility: "",
    rows: 0,
    cols: 9,
  });

  let [noofticket, setNoofTicket] = useState(0);
  let [selectedSeats, setSelectedSeats] = useState(['']);
  let seats_matrix
  useEffect(() => {
    selectedSeats.pop();
    seats_matrix =()=>{return <div> Loading </div>}
    var requestOptions = {
      method: "GET",
    };

    fetch("http://127.0.0.1:8000/movies/2/", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setData(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
  }, []);
  let amount = data.price * noofticket;
  const [isSelected, setIsSelected] = useState(
    Array(data.cols)
      .fill(false)
      .map(() => Array(data.rows).fill(false))
  );
  const unavailable = data.availibility.split(",")
  console.log(unavailable)
  const axios = require("axios");
  seats_matrix = () => {
    // if(data.rows!=0)
    {return [...Array(data.rows).keys()]
      .map((i) => i + 1)
      .map((row_no) => {
        return (
          <div className="m-2">
            {[...Array(data.cols).keys()]
              .map((i) => i + 1)
              .map((col_no) => {
                // console.log(((row_no-1)*data.cols+col_no).toString(),unavailable.includes(((row_no-1)*data.cols+col_no).toString()))
                return (
                  <Button
                    className="w-5 rounded-none m-2 pr-10"
                    variant={isSelected[row_no][col_no] ? "filled" : "outlined"}
                    disabled={unavailable.includes(((row_no-1)*data.cols+col_no).toString())}
                    onClick={() => handleSeatSelection(row_no, col_no)}
                  >
                    {row_no},{col_no}
                  </Button>
                );
              })}
          </div>
        );
      });}
  };
  const handleSeatSelection = (row: number, col: number) => {
    let matrix = isSelected.slice().slice();
    matrix[row][col] = !matrix[row][col];
    if (matrix[row][col]) {
      selectedSeats.push(`${(row-1)*data.cols+col}`);
      setSelectedSeats(selectedSeats);
    } else {
      for (let i = 0; i < selectedSeats.length; i++) {
        if (selectedSeats[i] == `${(row-1)*data.cols+col}`) {
          console.log(selectedSeats.splice(i, 1));
        }
      }
      setSelectedSeats(selectedSeats);
    }
    console.log(selectedSeats);
    setIsSelected(matrix);
  };

  const handlePayment = () => {
    let seats = selectedSeats.join( ',')
    let body = JSON.stringify({
      email: null,
      name: "casper",
      amount: amount,
      phone: 8789686148,
      seats : seats
    });

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:8000/payment/",
      headers: {
        "Content-Type": "text/plain",
      },
      data: body,
    };

    axios
      .request(config)
      .then((response: any) => {
        let link = response.data["transaction_url"];
        console.log(link);
        window.open(link, "_self");
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <>
      {/* <Head>Hi </Head> */}
      <main className="text-dark w-full min-h-screen mt-[10rem] text-[26px]">
        <div className="flex justify-between items-center bg-[#1D3557]/75 py-[1.5rem] ">
          <div>
            <p>Movie Name:</p>
            <p>Location:</p>
          </div>
          <div className="flex border py-2 rounded-[10px] px-2">
            <Button
              className="bg-transparent border"
              onClick={() => {
                setNoofTicket(++noofticket);
              }}
            >
              +
            </Button>
            <p> &nbsp; {noofticket} Ticket &nbsp; </p>
            <Button
              className="bg-transparent border"
              onClick={() => {
                setNoofTicket(--noofticket);
              }}
            >
              -
            </Button>
          </div>
        </div>
        <div>
          <Card className="bg-[#F1FAEE]">
            <CardBody className="grid justify-around">
              {seats_matrix()}
            </CardBody>
            <CardFooter className="pt-0 self-center">
              <Image
                src="/screenthisway.svg"
                alt={
                  "Screen is this way, in case you don't have internet connection"
                }
                width="397"
                height="38"
              ></Image>
            </CardFooter>
          </Card>
          <div className="flex justify-center mt-6">
            <Button
              className="items-center bg-[#E63946] normal-case"
              disabled={
                !(selectedSeats.length == noofticket) || noofticket == 0
              }
              onClick={handlePayment}
            >
              PAY Rs. {amount}
            </Button>
          </div>
        </div>{" "}
      </main>
    </>
  );
}
