import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
  top:'50px'
};

const center = {
  lat: 35.1803,
  lng: 128.5821,
};

const KEFA = {
  lat: 35.1803, 
  lng: 128.5821,
};
const Directions = () => {
  return (
    <div className=''>
            <div className="company-hero">
        <h3 className="text-4xl font-bold text-white">COMPANY</h3>
      </div>
        <h2 className="mt-16 text-center text-4xl">오시는길 </h2>
          <div className="container">
          <LoadScript googleMapsApiKey="https://maps.app.goo.gl/Zh5pWnk7Pb2ot1ka6">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={KEFA} label={{ text: "KEFA", color: "white", fontWeight: "bold" }} />
      </GoogleMap>
    </LoadScript>

    <h2 className="mt-[80px] text-sm md:text-xl ">경남 창원시 진해구 두동 1296-15 청안프리존 빌딩 502호( 웅동로 166 )</h2>
    <p className="mt-2">대표전화  |  070-4287-9555</p>
          </div>
    </div>
  )
}

export default Directions
