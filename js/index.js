function openAlertDelete(id) {
  Swal.fire({
    position: "top-end",
    icon: "question",
    title: "Desea eliminar este cliente?",
    showConfirmButton: true,
    confirmButtonText: "Confirmar",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const data = await deleteClient(id);

      showmessage(data);
    }
  });
}

function drawClients(listclients) {
  $("#body-container").html("");

  listclients.forEach((client) => {
    $("#body-container").append(`
            <tr>
                <th scope="row">${client.id}</th>
                <td>${client.ruc}</td>
                <td>${client.compname}</td>
                <td>${client.email}</td>
                <td>${client.direction}</td>
                <td>${client.phone}</td>
                <td><a class="btn btn-primary btn-md" href="http://127.0.0.1:5500/editform.html?id=${client.id}" role="button">Editar</a></td>
                <td><button type="button" class="btn btn-danger btn-md" onclick="openAlertDelete(${client.id})">Eliminar</button></td>
            </tr>
            `);
  });
}

$(document).ready(async function () {
  let listclients = await getClients();
  drawClients(listclients);

  $("#btn-search-compname").click(async function () {
    const compname = $("#compname").val().trim();
    console.log(compname);
    listclients = await getClients(compname);
    drawClients(listclients);
  });
});
