const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const myMap = L.map('mapid').setView([29.024, -110.218], 4.5);
myMap.scrollWheelZoom.disable();

L.tileLayer(tilesProvider, {
    maxZoom: 18,
}).addTo(myMap);

let marker_hmo = L.marker([29.0949, -110.9692]).addTo(myMap);
let marker_mexi = L.marker([32.6249, -115.4486]).addTo(myMap);
let marker_laPaz = L.marker([24.1424, -110.3126]).addTo(myMap);
let marker_chihua = L.marker([28.718, -106.191]).addTo(myMap);
let marker_sina = L.marker([24.657, -107.346]).addTo(myMap);
let marker_dura = L.marker([24.615, -104.841]).addTo(myMap);


marker_laPaz.on('click', e => {
}).bindPopup("<b>Ruta - Baja California Sur</b><br>").openPopup();

marker_chihua.on('click', e => {
}).bindPopup("<b>Ruta - Chihuahua</b><br>").openPopup();

marker_dura.on('click', e => {
}).bindPopup("<b>Ruta - Durango</b><br>").openPopup();

marker_sina.on('click', e => {
}).bindPopup("<b>Ruta - Sinaloa</b><br>").openPopup();

marker_mexi.on('click', e => {
}).bindPopup("<b>SUCURSAL MEXICALI</b><br>Blvd. Lazaro Cardenas Num. 3053 Colonia. Nuevo Mexicali<br><b>TELEFONOS</b><br>686-561-80-98").openPopup();

marker_hmo.on('click', e => {
}).bindPopup("<b>SUCURSAL HERMOSILLO</b><br>Avenida Concord Num. 91, Colonia. La Manga<br><b>TELEFONOS</b><br>662-262-63-84, 662-310-55-11").openPopup();

