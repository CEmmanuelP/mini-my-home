import React, { useEffect } from "react";
import { useRef } from "react";

const { kakao } = window;

const MapContainer = () => {
    const containerRef = useRef();

    useEffect(() => {
        // const container = document.getElementById("myMap");

        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };
        const map = new kakao.maps.Map(containerRef.current, options);
    }, []);

    return (
        <div
            id="myMap"
            style={{
                width: "100%",
                height: "500px",
            }}
            ref={containerRef}
        ></div>
    );
};

export default MapContainer;
