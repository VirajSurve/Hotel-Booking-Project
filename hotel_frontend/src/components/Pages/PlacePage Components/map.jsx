
export default function Map(){
    const [places,setPlaces]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/places").then(response=>{
            setPlaces([...response.data]);
        });
    },[]);
        const map=L.map('map');
        map.setView([18.5488,73.9109],7);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map)
        const data={
            pict:{
    coords:[18.45754,73.85079],
    title:"Pict pune",
    address:`<b>Pict pune</b><br>
            123<br>
            PUNE<br>`,
            website:'https://google.com',
            phone:123,
            },
            vimannagar: {
              coords:[18.57955,73.90905],
    
            },
            punestation: {
                coords:[18.52974,73.87261],
            }
        }
       const customIcon=L.icon(
            {
              iconUrl:'./pin-location-4355.svg',
              iconSize:[60,60],
            }
        )
    
        for (let key in data){
            const location=data[key];
    
            L.marker(location.coords,{
                title:location.title,
                icon:customIcon,
            })
            .bindPopup(`<span class="popup">
                ${location.address}
                <a href="${location.website}"target="_blank">Website</a><br>
                Call:<a href="tel:${location.phone}">${location.phone}</a>
            </span>
                    `)
            .addTo(map)
        }
    
}
