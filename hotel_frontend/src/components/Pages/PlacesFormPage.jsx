import { useEffect, useState } from "react";
import Perks from "../../Perks";
import PhotosUploader from "../../PhotosUploader";
import AccountNav from "../../AccountNav";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function PlacesFormPage(){
    const {id}=useParams();
    console.log({id});
    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [addedPhotoes, setAddedPhotoes] = useState([]);
    const [description, setDiscription] = useState("");
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [maxGuest, setMaxGuest] = useState(null);
    const [redirect,setRedirect]=useState(false);
    const [price,setPrice]=useState(100);

    useEffect(() => {
        if (id) {
          axios.get(`http://localhost:4000/places/${id}`).then(({ data }) => {
            setTitle(data.title);
            setAddress(data.address);
            setAddedPhotoes(data.photos);
            setDiscription(data.description);
            setPerks(data.perks);
            setExtraInfo(data.extraInfo);
            setCheckIn(data.checkIn);
            setCheckOut(data.checkOut);
            setMaxGuest(data.maxGuest);
            setPrice(data.price);
          });
        }
      }, [id]);

    async function savePlace(e) {
        e.preventDefault();
        const placeData={
            title,
            address,
            addedPhotoes,
            description,
            perks,
            extraInfo,
            checkIn,
            checkOut,
            maxGuest,
            price
        };
        if(id){
            //update
            await axios.put('http://localhost:4000/places',{
                id,...placeData
            });
        }else{
          //new place
          await axios.post("http://localhost:4000/places", {
            placeData
          });
          setRedirect(true);
        }
      }

      function preInput(header, description) {
        return (
          <>
            {inputHeader(header)}
            {inputDescription(description)}
          </>
        );
      }
      
      function inputHeader(text) {
        return (
          <h2 className="text-2xl mt-4">{text}</h2>
        );
      }
    
      function inputDescription(text) {
        return (
          <p className="text-sm text-gray-500">{text}</p>
        );
      }

      if(redirect){
        return <Navigate to={'/account/places'} />
      }

    return(
        <>
            <AccountNav />
            <div>
          <form onSubmit={savePlace}>
            {preInput("Title", "Tile for your place it should be short and catchy as in advertisement.")}
            <input className="bg-gray-200 rounded-full py-1 px-2 w-full border my-1" type="text" placeholder="Title for you apt..." value={title} onChange={e => { setTitle(e.target.value) }} />

            {preInput("Address", "Address to this place ")}
            <input className="bg-gray-200 rounded-full py-1 px-2  w-full border my-1" type="text" placeholder="Address..." value={address} onChange={e => { setAddress(e.target.value) }} />

            {preInput("Photos", "more = better")}
            <PhotosUploader addedPhotoes={addedPhotoes} onChange={setAddedPhotoes} />

            {preInput("Description", "Description about that place")}
            <textarea className="bg-gray-200 rounded-xl py-1 px-2 w-full border my-1" value={description} onChange={e => { setDiscription(e.target.value) }} />

            {preInput("Perks", "Please tick your ammentities")}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
              <Perks selected={perks} onChange={setPerks} />
            </div>

            {preInput("Extra Info", "House Rules, Do's and Don't")}
            <textarea className="bg-gray-200 rounded-xl py-1 px-2 w-full border my-1" value={extraInfo} onChange={e => { setExtraInfo(e.target.value) }} />

            {preInput("CheckIn & CheckOut", "Add check-in and check-out time. Remembe to have some time for cleaining between guests")}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
              <div>
                <h3 className="mt-2 -mb-1">Check in Time</h3>
                <input className="bg-gray-200 rounded-full py-1 px-2  w-full border my-1" type="text" placeholder="12:00" value={checkIn} onChange={e => { setCheckIn(e.target.value) }} />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Check out Time</h3>
                <input className="bg-gray-200 rounded-full py-1 px-2  w-full border my-1" type="text" placeholder="12:00" value={checkOut} onChange={e => { setCheckOut(e.target.value) }} />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Max Guests</h3>
                <input className="bg-gray-200 rounded-full py-1 px-2  w-full border my-1" type="number" placeholder="" value={maxGuest} onChange={e => { setMaxGuest(e.target.value) }} />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Price per Night</h3>
                <input className="bg-gray-200 rounded-full py-1 px-2  w-full border my-1" type="number" placeholder="" value={price} onChange={e => { setPrice(e.target.value) }} />
              </div>
            </div>
            <button className="bg-primary mt-5 rounded-full py-1 px-2  w-full border my-1">Save</button>
          </form>
        </div>
        </>
    )
}