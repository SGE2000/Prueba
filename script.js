<script>
  document.getElementById("affiliateForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
    };

    fetch("https://script.google.com/macros/s/AKfycbzP2gvlBSPNf80iIqcxKdW-PC97AvSQvX_Ng7yRzjYEc0BCbwxgQb_X1TuKM-uK2L5d/exec", { // Sustituye con la URL publicada
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === "success") {
          alert("Datos enviados correctamente");
        } else {
          alert("Error al enviar los datos");
        }
      })
      .catch(error => console.error("Error:", error));
  });
</script>