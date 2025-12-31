"use client";

import {
  MessageCircle,
  Image,
  Users,
  Shield,
  Sparkles,
  Zap,
  History,
  Settings,
  Globe,
  Palette,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: MessageCircle,
    title: "Chat Interaktif",
    description:
      "Balas semua pertanyaan dengan bahasa Indonesia yang sopan, jelas, dan ramah. Bisa menjelaskan topik teknis, umum, kreatif, edukasi, dan hiburan.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Image,
    title: "Pembuatan Gambar",
    description:
      "Buat gambar sesuai permintaan dalam berbagai style: realistik, anime, cyberpunk, cartoon, fantasy, 3D, minimalis, dan lainnya.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Users,
    title: "Manajemen Pengguna",
    description:
      "Sistem lengkap dengan daftar, masuk, profil, preferensi, histori chat dan gambar, serta pengaturan akun.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Sparkles,
    title: "Respons Kreatif & Multi-Pilihan",
    description:
      "Berikan opsi alternatif untuk teks atau gambar. Bisa memberi rekomendasi kreatif dan menyesuaikan gaya sesuai preferensi.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Shield,
    title: "Keamanan & Etika",
    description:
      "Filter otomatis untuk konten melanggar aturan. Prioritaskan keamanan pengguna dan privasi data.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: History,
    title: "Simpan Histori",
    description:
      "Simpan semua percakapan dan gambar. Bisa menampilkan, mengekspor, atau menghapus histori kapan saja.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    icon: Settings,
    title: "Preferensi Personal",
    description:
      "Atur bahasa, style gambar default, tema tampilan, tingkat detail jawaban, dan notifikasi sesuai keinginan.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: Globe,
    title: "Multi-Bahasa",
    description:
      "Mendukung percakapan dalam berbagai bahasa dengan kemampuan multi-bahasa yang luas.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fitur Lengkap & Powerful
          </h2>
          <p className="text-lg text-muted-foreground">
            Platform AI serbaguna dengan berbagai fitur canggih untuk memenuhi
            semua kebutuhan Anda
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border-0 bg-background hover:bg-muted/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div
                  className={`inline-flex p-3 rounded-xl ${feature.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            AI ini dibuat oleh <span className="font-semibold">Roflin Juliadi</span>
          </p>
        </div>
      </div>
    </section>
  );
}
