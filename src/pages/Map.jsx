import React, { useEffect, useRef } from "react";

export default function Map() {
  const { kakao } = window;
  const container = useRef(null);
  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(37.55674841136329, 126.99583231859899),
      level: 3,
    };
    const map = new kakao.maps.Map(container.current, options);
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
      onClick={(e) => e.stopPropagation()}
      ref={container}
      style={{ width: "60vw", height: "30vh", margin: "0 auto" }}
    ></div>
  );
}
