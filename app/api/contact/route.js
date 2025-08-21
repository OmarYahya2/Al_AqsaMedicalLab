async function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = {
    first_name: formData.get("firstName"),
    last_name: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const res = await fetch(
    "https://al-aqsabackend-uokt.onrender.com/api/contact/",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    console.error("Error sending data to backend:", await res.text());
  } else {
    alert("تم الاستلام! سنرد عليك في أقرب وقت ممكن");
  }
}
