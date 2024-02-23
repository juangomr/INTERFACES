    var fecha = new Date();
    document.getElementById("FechaActual").value = fecha.toJSON().slice(0, 10);

    var fechaSalida = new Date();
    var dias = 2
    fechaSalida.setDate(fecha.getDate() + dias);
    document.getElementById("FechaSalida").value = fechaSalida.toJSON().slice(0, 10);

