"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Enkripsi Data",
    description:
      "Semua data dienkripsi dengan standar industri untuk melindungi privasi Anda.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Eye,
    title: "Privasi Terjamin",
    description:
      "Kami tidak menjual atau membagikan data pribadi Anda kepada pihak ketiga.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: FileText,
    title: "Filter Konten",
    description:
      "Sistem otomatis memfilter konten yang melanggar aturan atau tidak etis.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: AlertTriangle,
    title: "Deteksi Ancaman",
    description:
      "Monitor aktif 24/7 untuk mendeteksi dan mencegah aktivitas mencurigakan.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
];

const tips = [
  {
    title: "Gunakan Password Kuat",
    description:
      "Gunakan kombinasi huruf besar, kecil, angka, dan simbol. Hindari password yang mudah ditebak.",
    icon: "🔐",
  },
  {
    title: "Aktifkan 2FA",
    description:
      "Verifikasi dua langkah memberikan lapisan keamanan tambahan untuk akun Anda.",
    icon: "📱",
  },
  {
    title: "Hati-hati dengan Phishing",
    description:
      "Jangan klik link mencurigakan atau berikan informasi sensitif melalui email yang tidak dikenal.",
    icon: "🎣",
  },
  {
    title: "Perbarui Perangkat",
    description:
      "Selalu update sistem operasi dan aplikasi untuk mendapatkan patch keamanan terbaru.",
    icon: "🔄",
  },
];

export function SecuritySection() {
  return (
    <section id="security" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Keamanan & Etika
          </h2>
          <p className="text-lg text-muted-foreground">
            Keamanan pengguna dan privasi data adalah prioritas utama kami
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {securityFeatures.map((feature) => (
            <Card
              key={feature.title}
              className="border-0 bg-muted/50 hover:bg-muted transition-colors"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex p-3 rounded-xl ${feature.bgColor} mb-4`}
                >
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Commitment Statement */}
        <Card className="max-w-4xl mx-auto border-0 shadow-lg bg-primary text-primary-foreground mb-16">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary-foreground/10">
                <Shield className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Komitmen Keamanan Kami
                </h3>
                <p className="text-primary-foreground/80">
                  Kami berkomitmen untuk memberikan pengalaman yang aman dan
                  terpercaya bagi semua pengguna. Setiap interaksi dilindungi
                  dengan enkripsi tingkat bank, dan kami secara aktif memonitor
                  untuk mencegah penyalahgunaan. Privasi Anda adalah hak Anda,
                  dan kami menghormatinya dengan standar keamanan tertinggi.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Tips */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Tips Keamanan Digital
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <Card
                key={index}
                className="border-0 bg-background hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{tip.icon}</span>
                    <div>
                      <h4 className="font-semibold mb-1">{tip.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Compliance Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>
              AI ini dibuat oleh <span className="font-semibold">Roflin Juliadi</span> dengan fokus pada keamanan dan etika
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
