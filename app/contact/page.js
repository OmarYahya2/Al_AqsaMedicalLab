import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  MessageSquare,
  NavigationIcon,
  Building,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                اتصل بنا
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                نحن هنا لخدمتك والإجابة على جميع استفساراتك. تواصل معنا بأي
                طريقة تناسبك
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    معلومات التواصل
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    يسعدنا تواصلك معنا في أي وقت. فريقنا جاهز لمساعدتك والإجابة
                    على جميع استفساراتك حول خدماتنا الطبية.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Address */}
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-right flex-1">
                        <h3 className="font-semibold text-foreground mb-2">
                          العنوان
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          شارع الجلاء، بجانب مستشفى الشفاء
                          <br />
                          غزة، فلسطين
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-3 bg-transparent"
                        >
                          <NavigationIcon className="w-4 h-4 mr-2" />
                          عرض على الخريطة
                        </Button>
                      </div>
                    </div>
                  </Card>

                  {/* Phone */}
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="text-right flex-1">
                        <h3 className="font-semibold text-foreground mb-2">
                          الهاتف
                        </h3>
                        <p className="text-muted-foreground mb-2">
                          +970 123 456 789
                        </p>
                        <p className="text-muted-foreground mb-2">
                          +970 987 654 321
                        </p>
                        <Button variant="outline" size="sm">
                          <Phone className="w-4 h-4 mr-2" />
                          اتصل الآن
                        </Button>
                      </div>
                    </div>
                  </Card>

                  {/* Email */}
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-right flex-1">
                        <h3 className="font-semibold text-foreground mb-2">
                          البريد الإلكتروني
                        </h3>
                        <p className="text-muted-foreground mb-2">
                          info@alaqsamedical.com
                        </p>
                        <p className="text-muted-foreground mb-2">
                          results@alaqsamedical.com
                        </p>
                        <Button variant="outline" size="sm">
                          <Mail className="w-4 h-4 mr-2" />
                          أرسل رسالة
                        </Button>
                      </div>
                    </div>
                  </Card>

                  {/* Working Hours */}
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-accent" />
                      </div>
                      <div className="text-right flex-1">
                        <h3 className="font-semibold text-foreground mb-2">
                          ساعات العمل
                        </h3>
                        <p className="text-muted-foreground mb-2">
                          الأحد - الخميس: 8:00 ص - 8:00 م
                        </p>
                        <p className="text-muted-foreground mb-2">
                          الجمعة: 8:00 ص - 2:00 م
                        </p>
                        <p className="text-muted-foreground">
                          السبت: 9:00 ص - 6:00 م
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="p-8">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl font-bold text-foreground">
                      أرسل لنا رسالة
                    </CardTitle>
                    <p className="text-muted-foreground">
                      سنرد عليك في أقرب وقت ممكن
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label
                            htmlFor="firstName"
                            className="text-right block mb-2"
                          >
                            الاسم الأول
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder="أدخل اسمك الأول"
                            className="text-right"
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="lastName"
                            className="text-right block mb-2"
                          >
                            اسم العائلة
                          </Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder="أدخل اسم العائلة"
                            className="text-right"
                          />
                        </div>
                      </div>

                      <div>
                        <Label
                          htmlFor="email"
                          className="text-right block mb-2"
                        >
                          البريد الإلكتروني
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="أدخل بريدك الإلكتروني"
                          className="text-right"
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="phone"
                          className="text-right block mb-2"
                        >
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
                        <Label
                          htmlFor="subject"
                          className="text-right block mb-2"
                        >
                          الموضوع
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="أدخل موضوع الرسالة"
                          className="text-right"
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="message"
                          className="text-right block mb-2"
                        >
                          الرسالة
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="اكتب رسالتك هنا..."
                          className="text-right min-h-[120px]"
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
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                موقعنا
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                يمكنك العثور علينا بسهولة في قلب مدينة غزة، بجانب مستشفى الشفاء
              </p>
            </div>

            <div className="bg-muted rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                مختبر الأقصى الطبي
              </h3>
              <p className="text-muted-foreground mb-6">
                شارع الجلاء، بجانب مستشفى الشفاء
                <br />
                غزة، فلسطين
              </p>
              <Button variant="outline" className="bg-transparent">
                <MapPin className="w-4 h-4 mr-2" />
                عرض على الخريطة
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
