import React, { useEffect } from "react";

const { kakao } = window;

export default function Map({}) {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(37.55674841136329, 126.99583231859899),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(
      37.55674841136329,
      126.99583231859899
    );
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
    kakao.maps.event.addListener(marker, "click", function () {
      // 마커 위에 인포윈도우를 표시합니다
      window.location.href =
        "https://map.kakao.com/link/map/37.55674841136329,126.99583231859899";
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      id="myMap"
      style={{ width: "60%", height: "30%", margin: "0 auto" }}
    ></div>
  );
}
