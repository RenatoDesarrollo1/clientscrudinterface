function showmessage(data) {
  if (data.code == 200) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: data.message,
      showConfirmButton: true,
      confirmButtonText: "Listo",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "http://127.0.0.1:5500/index.html";
      }
    });
  } else if (data.code == 422) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: data.message,
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Ha ocurrido un error",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
