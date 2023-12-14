let inicio = () => {
  function inicializarMapa() {
    var ubicacion = { lat: 37.09949, lng: -6.72599 }; // Reemplaza con las coordenadas de tu ubicación
    var mapa = new google.maps.Map(document.getElementById("mapa"), {
      center: ubicacion,
      zoom: 15, // Ajusta el nivel de zoom según tus preferencias
    });

    var marcador = new google.maps.Marker({
      position: ubicacion,
      map: mapa,
      title: "Tu Empresa",
    });
  }
  inicializarMapa();
};
window.addEventListener("DOMContentLoaded", inicio);
