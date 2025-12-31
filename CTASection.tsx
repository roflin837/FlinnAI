"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, MessageCircle, Image, Users } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Mulai Gunakan Roflin AI Sekarang
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Rasakan kecerdasan AI yang canggih, aman, dan menyenangkan.
            Chat interaktif, pembuatan gambar, dan banyak lagi dalam satu
            platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Mulai Gratis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground/30 hover:bg-primary-foreground/10"
            >
              Lihat Pricing
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="bg-primary-foreground/10 border-0">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 rounded-full bg-primary-foreground/10 mb-4">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Chat Interaktif</h3>
                <p className="text-sm text-primary-foreground/70">
                  Respons cerdas dalam bahasa Indonesia
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-0">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 rounded-full bg-primary-foreground/10 mb-4">
                  <Image className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Gambar AI</h3>
                <p className="text-sm text-primary-foreground/70">
                  Berbagai style: realistik, anime, & lainnya
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-0">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 rounded-full bg-primary-foreground/10 mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Multi-Opsi</h3>
                <p className="text-sm text-primary-foreground/70">
                  Beragam pilihan kreatif untuk Anda
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/60 mb-4">
              Dipercaya oleh lebih dari 500.000 pengguna
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/40">
              <span>🔒 Keamanan Terjamin</span>
              <span>✓ Privasi Protected</span>
              <span>⚡ Respons Cepat</span>
              <span>🌍 Support 24/7</span>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-sm text-primary-foreground/50">
            AI ini dibuat oleh <span className="font-semibold">Roflin Juliadi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
