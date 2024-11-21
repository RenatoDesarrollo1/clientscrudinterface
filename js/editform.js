$(document).ready(async function () {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);

  const id = params.get("id");

  if (id != null) {
    let dataclient = await getClientById(id);

    if (dataclient.code == 404) {
      window.location.href = "http://127.0.0.1:5500/index.html";
    } else if (dataclient.code == 404) {
      window.location.href = "http://127.0.0.1:5500/index.html";
    }

    let client = dataclient.data;
    $("#id").val(client.id);
    $("#ruc").val(client.ruc);
    $("#email").val(client.email);
    $("#compname").val(client.compname);
    $("#direction").val(client.direction);
    $("#phone").val(client.phone);

    $("form").submit(async function (event) {
      event.preventDefault();

      const id = $("#id").val().trim();
      const ruc = $("#ruc").val().trim();
      const email = $("#email").val().trim();
      const compname = $("#compname").val().trim();
      const direction = $("#direction").val().trim();
      const phone = $("#phone").val().trim();

      const clientData = {
        id: id,
        ruc: ruc,
        email: email,
        compname: compname,
        direction: direction,
        phone: phone,
      };

      const data = await updateClient(clientData);

      showmessage(data);
    });
  } else {
    window.location.href = "http://127.0.0.1:5500/index.html";
  }
});
