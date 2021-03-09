//Imports
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

//The map function
function Home(props) {
  const center = [44.4761601, -73.212906];
  //Fetch to get  API data
  fetch("/API/Restaurants")
    .then((res) => res.json())
    .then((giveRestaurants) => {
      giveRestaurants.forEach((Rest) => {
        fetch("/Location/" + Rest)
          .then((res) => res.json())
          .then((restObj) => {
            console.log(restObj);
          });
      });
    });

  return (
    //Links to restaurants and Map set up
    <div id="page">
      <div id = "sidebar">
        <span id="title">Restaurants</span>
        {/* Restaurant links */}
        <div id="rest-nav">
          <Link to="/Restaurants/AmericanFlat" className="nav-link">
            American Flatbread Burlington Hearth
          </Link>
          <br></br>
          <Link to="/Restaurants/Bento" className="nav-link">
            Bento Japanese Delicatessen
          </Link>
          <br></br>
          <Link to="/Restaurants/BGood" className="nav-link">
            B.GOOD
          </Link>
          <br></br>
          <Link to="/Restaurants/Gaku" className="nav-link">
            Gaku Ramen
          </Link>
          <br></br>
          <Link to="/Restaurants/Hen" className="nav-link">
            Hen of the Wood - Burlington
          </Link>
          <br></br>
          <Link to="/Restaurants/Leunigs" className="nav-link">
            Leunig's Bistro
          </Link>
          <br></br>
          <Link to="/Restaurants/Mrmikes" className="nav-link">
            Mr.Mikes Pizza
          </Link>
          <br></br>
          <Link to="/Restaurants/Newmoon" className="nav-link">
            New Moon
          </Link>
          <br></br>
          <Link to="/Restaurants/Pizza44" className="nav-link">
            Pizza 44
          </Link>
          <br></br>
          <Link to="/Restaurants/Shy" className="nav-link">
            Shy Guy Gelato
          </Link>
          <br></br>
          <Link to="/Restaurants/Singlepeb" className="nav-link">
            A Single Pebble
          </Link>
          <br></br>
          <Link to="/Restaurants/Skinny" className="nav-link">
            The Skinny Pancake
          </Link>
          <br></br>
          <Link to="/Restaurants/Spotdock" className="nav-link">
            Spot on the Dock
          </Link>
        </div>
      </div>
      <div>
        {/* Map setup */}
        <MapContainer
          id="map"
          center={center}
          zoom={14}
          scrollWheelZoom={true}
          doubleClickZoom={true}
          zoomControl={true}
          touchZoom={false}
          style={{ height: "600px", width: "600px" }}
        >
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          />
          {/* MAP MARKERS */}
          <Marker position={[44.4766084, -73.2164283]}>
            <Popup>
              <p>American Flatbread Burlington Hearth</p>
            </Popup>
          </Marker>
          <Marker position={[44.4769991, -73.2118512]}>
            <Popup>
              <p>Bento Japanese Delicatessen</p>
            </Popup>
          </Marker>
          <Marker position={[44.477843050000004, -73.21234794894693]}>
            <Popup>
              <p>"B.GOOD</p>
            </Popup>
          </Marker>
          <Marker position={[44.4763371, -73.2123768]}>
            <Popup>
              <p>Gaku Ramen</p>
            </Popup>
          </Marker>
          <Marker position={[44.4790109, -73.217258]}>
            <Popup>
              <p>Hen of the Wood - Burlington</p>
            </Popup>
          </Marker>
          <Marker position={[44.477264500000004, -73.21278867560478]}>
            <Popup>
              <p>Leunig's Bistro</p>
            </Popup>
          </Marker>
          <Marker position={[44.4761539, -73.2111793]}>
            <Popup>
              <p>Mr.Mikes Pizza</p>
            </Popup>
          </Marker>
          <Marker position={[44.479637249999996, -73.21215647517671]}>
            <Popup>
              <p>New Moon</p>
            </Popup>
          </Marker>
          <Marker position={[44.4594977, -73.21483275177943]}>
            <Popup>
              <p>Pizza 44</p>
            </Popup>
          </Marker>
          <Marker position={[44.4673897, -73.210063]}>
            <Popup>
              <p>Shy Guy Gelato</p>
            </Popup>
          </Marker>
          <Marker position={[44.4779574, -73.21464412856254]}>
            <Popup>
              <p>A Single Pebble</p>
            </Popup>
          </Marker>
          <Marker position={[44.4770114, -73.2195093]}>
            <Popup>
              <p>The Skinny Pancake</p>
            </Popup>
          </Marker>
          <Marker position={[44.47439155, -73.22157070797496]}>
            <Popup>
              <p>Spot on the Dock</p>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
export default Home;
