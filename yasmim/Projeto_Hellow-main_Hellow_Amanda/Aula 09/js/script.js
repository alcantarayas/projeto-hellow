function initMap() {
    // Coordenadas de Blumenau
    var blumenau = { lat: -26.9194, lng: -49.0661 };
    // Locais dos eventos
    var locaisEventos = [
        { lat: -26.915114033607495, lng: -49.08480159227031, titulo: 'Oktoberfest', descricao: 'Venha se divertir na maior festa alemã' },
        { lat: -26.86348417192027, lng: -49.09253483190667, titulo: 'Circo aquático', descricao: 'Prepare-se para uma experiência única!' },
        { lat: -26.915294543930305, lng: -49.08475833375538, titulo: 'Magia de natal', descricao: 'O Natal em Blumenau já começou, são diversas atrações e atividades para você criar um natal especial e inesquecível para sua família!.' }
    ];
    // Criação do mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: blumenau
    });
    // Adicionando marcadores no mapa
    locaisEventos.forEach(function (evento) {
        var marker = new google.maps.Marker({
            position: { lat: evento.lat, lng: evento.lng },
            map: map,
            title: evento.titulo
        });
        var infowindow = new google.maps.InfoWindow({
            content: '<h5>' + evento.titulo + '</h5><p>' + evento.descricao + '</p>'
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    });
}