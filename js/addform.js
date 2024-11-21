$(document).ready(function () {
  $("form").submit(async function (event) {
    event.preventDefault();

    const ruc = $("#ruc").val().trim();
    const email = $("#email").val().trim();
    const compname = $("#compname").val().trim();
    const direction = $("#direction").val().trim();
    const phone = $("#phone").val().trim();

    const clientData = {
      ruc: ruc,
      email: email,
      compname: compname,
      direction: direction,
      phone: phone,
    };

    const data = await saveClient(clientData);

    console.log(data);

    showmessage(data);
  });
});
