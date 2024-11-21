const apiBaseUrl = "http://localhost:8000/api/clients";

function handleError(error) {
  return { ...error.responseJSON, code: error.status };
}

async function getClients(compname = "") {
  try {
    let url = apiBaseUrl;

    if (compname != "") {
      url = `${apiBaseUrl}/?compname=${compname}`;
    }

    console.log(url);

    const response = await $.ajax({
      url: url,
      type: "GET",
    });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
}

async function getClientById(id) {
  try {
    const response = await $.ajax({
      url: `${apiBaseUrl}/${id}`,
      type: "GET",
    });
    return response;
  } catch (error) {
    return handleError(error);
  }
}

async function saveClient(clientData) {
  try {
    const response = await $.ajax({
      url: apiBaseUrl,
      type: "POST",
      data: clientData,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    });
    console.log("Cliente guardado:", response);
    return response;
  } catch (error) {
    return handleError(error);
  }
}

async function updateClient(clientData) {
  try {
    const response = await $.ajax({
      url: apiBaseUrl,
      type: "PUT",
      data: clientData,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    });
    console.log("Cliente actualizado:", response);
    return response;
  } catch (error) {
    return handleError(error);
  }
}

async function deleteClient(id) {
  try {
    const response = await $.ajax({
      url: `${apiBaseUrl}/${id}`,
      type: "DELETE",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    });
    console.log(`Cliente con ID ${id} eliminado:`, response);
    return response;
  } catch (error) {
    return handleError(error);
  }
}
