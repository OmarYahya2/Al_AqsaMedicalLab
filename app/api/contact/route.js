import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.formData();

  // تحويل الحقول لتطابق الـ Django serializer
  const data = {
    first_name: formData.get("firstName"),
    last_name: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  console.log("Contact form submission:", data);

  // إرسال البيانات إلى Django backend
  const res = await fetch("https://al-aqsabackend-uokt.onrender.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    console.error("Error sending data to backend:", await res.text());
  }

  return NextResponse.redirect(
    new URL(
      "/contact?message=تم الاستلام! سنرد عليك في أقرب وقت ممكن",
      request.url
    )
  );
}
