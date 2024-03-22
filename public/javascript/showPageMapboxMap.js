mapboxgl.accessToken = mapboxToken;
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: campground.geometry.coordinates,
  zoom: 15,
});

map.addControl(new mapboxgl.NavigationControl());

const marker = new mapboxgl.Marker({ color: "#d62d20" })
  .setLngLat(campground.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h3>${campground.title}</h3><p>${campground.location}</p>`
    )
  )
  .addTo(map);
