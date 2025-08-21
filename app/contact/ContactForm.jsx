// app/contact/ContactForm.jsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";

export default function ContactForm() {
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
      console.error("Error sending data:", await res.text());
    } else {
      alert("تم الاستلام! سنرد عليك في أقرب وقت ممكن");
      e.target.reset(); // تفريغ الحقول بعد الإرسال
    }
  }

  return (
    <Card className="p-8">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold text-foreground">
          أرسل لنا رسالة
        </CardTitle>
        <p className="text-muted-foreground">سنرد عليك في أقرب وقت ممكن</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="text-right block mb-2">
                الاسم الأول
              </Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="أدخل اسمك الأول"
                className="text-right"
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-right block mb-2">
                اسم العائلة
              </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="أدخل اسم العائلة"
                className="text-right"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="text-right block mb-2">
              البريد الإلكتروني
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="text-right"
              required
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-right block mb-2">
              رقم الهاتف
            </Label>
            <Input
              id="phone"
              name="phone"
              placeholder="أدخل رقم هاتفك"
              className="text-right"
            />
          </div>

          <div>
            <Label htmlFor="subject" className="text-right block mb-2">
              الموضوع
            </Label>
            <Input
              id="subject"
              name="subject"
              placeholder="أدخل موضوع الرسالة"
              className="text-right"
              required
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-right block mb-2">
              الرسالة
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="اكتب رسالتك هنا..."
              className="text-right min-h-[120px]"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            إرسال الرسالة
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
