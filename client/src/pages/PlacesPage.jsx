import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perks from "../Perks";

const PlacesPage = () => {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);

  function addPhotoByLink() {}

  if (action !== "new") {
    return (
      <div className="">
        <div className="text-center ">
          <Link
            className="bg-primary text-white py-2 px-6 rounded-full inline-flex gap-2"
            to={"/account/places/new"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add new place
          </Link>
        </div>
        <div>my place</div>
      </div>
    );
  }
  if (action === "new") {
    return (
      <div className="p-3 border border-gray-200 rounded-md">
        <form>
          <h2 className="text-xl mt-5">Title</h2>
          <p className="text-sm mt-1 text-gray-500">
            Fill a relatable and good title.
          </p>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <h2 className="text-xl mt-5">Adderss</h2>
          <p className="text-sm mt-1 text-gray-500">
            Fill a most accurate/closest address to your accomodation.
          </p>
          <input
            type="text"
            placeholder="Enter address."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <h2 className="text-xl mt-5">Photos</h2>
          <p className="text-sm mt-1 text-gray-500">
            Upload real pictures.Minimal editing as possible
          </p>
          <div className=" flex gap-2 items-center ">
            <input
              type="text"
              placeholder="ulpoad by link ...jpg , png"
              value={photoLink}
              onChange={(e) => setPhotoLink(e.target.value)}
            />
            <div>
              <button className=" p-2  bg-gray-300 rounded-full">
                Grab&nbsp;Photo
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-4 ">
            <button className="flex items-center justify-center gap-2 p-5 border border-gray-400 bg-transparent  m-1 rounded-xl px-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                />
              </svg>
              Upload
            </button>
          </div>
          <div className="mt-3">
            <h2 className="text-xl">Description</h2>
            <p className="text-sm text-gray-400">Description of place</p>
            <textarea
              className=" border border-gray-400 bg-transparent  mt-2 rounded-xl  w-full"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <h2 className="text-xl mt-2 mb-2">Perks</h2>
            <p className="text-sm mt-1 text-gray-500">Select all your perks</p>
            <div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3">
                <Perks selected={perks} onChange={setPerks} />
              </div>
            </div>
          </div>
          <h2 className="text-xl mt-2">Extra info</h2>
          <p className="text-sm text-gray-500">house rules , etc</p>
          <textarea
            className=" border border-gray-400 bg-transparent  mt-2 rounded-xl  w-full"
            value={extraInfo}
            onChange={(e) => setExtraInfo(e.target.value)}
          />
          <h2 className="text-xl mt-2">Check In/Out times</h2>
          <p className="text-sm text-gray-500">
            Check in and check out times.Cleaning included{" "}
          </p>
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3 gap-2">
            <div>
              <h3>Check-In</h3>
              <input
                type="text"
                placeholder="14"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div>
              <h3>Check-Out</h3>
              <input
                type="text"
                placeholder="11"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
            <div>
              <h3>Max-guests</h3>
              <input
                type="number"
                placeholder="1"
                value={maxGuests}
                onChange={(e) => setMaxGuests(e.target.value)}
              />
            </div>
          </div>
          <div className="text-center bg-primary rounded-full p-2 cursor-pointer">
            <button className="w-full bg-transparent text-white ">Save</button>
          </div>
        </form>
      </div>
    );
  }
};

export default PlacesPage;
