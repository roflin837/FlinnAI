"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sparkles,
  Check,
  Palette,
  Megaphone,
  Type,
  PenTool,
  Lightbulb,
} from "lucide-react";

interface OptionCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const creativeExamples = [
  {
    category: "logo",
    title: "Logo Restoran Kopi Minimalis",
    description: "Opsi logo kreatif untuk brand minuman energi",
    prompt: "logo restoran kopi minimalis",
    options: [
      {
        id: "1",
        title: "Opsi A",
        description:
          "Cangkir kopi dengan garis simpel, warna coklat krem, desain modern",
        icon: "☕",
      },
      {
        id: "2",
        title: "Opsi B",
        description:
          "Tulisan stylish 'KopiKu' dengan ikon biji kopi, tipografi elegant",
        icon: "✒️",
      },
      {
        id: "3",
        title: "Opsi C",
        description:
          "Kombinasi warna coklat dan krem dengan simbol uap kopi yang mengalir",
        icon: "💨",
      },
    ],
  },
  {
    category: "slogan",
    title: "Slogan Brand Minuman Energi",
    description: "3 opsi slogan kreatif untuk brand minuman energi",
    prompt: "slogan brand minuman energi",
    options: [
      {
        id: "1",
        title: "Opsi A",
        description: "'Energi Tanpa Batas' - Fokus pada kebebasan energi",
        icon: "⚡",
      },
      {
        id: "2",
        title: "Opsi B",
        description: "'Bertenarga Setiap Saat' - Konsistensi energi",
        icon: "💪",
      },
      {
        id: "3",
        title: "Opsi C",
        description: "'Bangkitkan Semangatmu' - Motivasi dan semangat",
        icon: "🌟",
      },
    ],
  },
  {
    category: "caption",
    title: "Caption Instagram Produk Fashion",
    description: "Caption menarik untuk post produk fashion",
    prompt: "caption instagram fashion",
    options: [
      {
        id: "1",
        title: "Opsi A",
        description:
          "'Kece di luar, pede di dalam. #FashionStyle #Confidence'",
        icon: "👗",
      },
      {
        id: "2",
        title: "Opsi B",
        description:
          "'Gaya yang menginspirasi. #OOTD #TrendyLook'",
        icon: "✨",
      },
      {
        id: "3",
        title: "Opsi C",
        description:
          "'Warna yang bercerita. #ColorfulLife #NewArrival'",
        icon: "🎨",
      },
    ],
  },
  {
    category: "article",
    title: "Judul Artikel Teknologi",
    description: "Judul menarik untuk artikel tentang AI",
    prompt: "judul artikel teknologi AI",
    options: [
      {
        id: "1",
        title: "Opsi A",
        description:
          "'Masa Depan AI: Bagaimana Kecerdasan Buatan Mengubah Dunia'",
        icon: "🔮",
      },
      {
        id: "2",
        title: "Opsi B",
        description:
          "'AI di Sekitar Kita: 10 Contoh Penerapan yang Mengejutkan'",
        icon: "🤖",
      },
      {
        id: "3",
        title: "Opsi C",
        description:
          "'Risiko dan Peluang AI: Panduan Lengkap untuk Pemula'",
        icon: "📚",
      },
    ],
  },
];

export function CreativeOptions() {
  const [selectedExample, setSelectedExample] = useState(creativeExamples[0]);
  const [customPrompt, setCustomPrompt] = useState("");
  const [generatedOptions, setGeneratedOptions] = useState<
    { title: string; description: string; icon: string }[]
  >([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleGenerateOptions = async () => {
    if (!customPrompt.trim()) return;

    setIsGenerating(true);

    // Simulate AI generating options
    setTimeout(() => {
      setGeneratedOptions([
        {
          title: "Opsi Kreatif A",
          description: `Solusi pertama untuk: ${customPrompt}`,
          icon: "💡",
        },
        {
          title: "Opsi Kreatif B",
          description: `Solusi kedua untuk: ${customPrompt}`,
          icon: "🎯",
        },
        {
          title: "Opsi Kreatif C",
          description: `Solusi ketiga untuk: ${customPrompt}`,
          icon: "🌟",
        },
      ]);
      setIsGenerating(false);
    }, 1500);
  };

  const handleSelectExample = (example: typeof creativeExamples[0]) => {
    setSelectedExample(example);
    setSelectedOption(null);
  };

  return (
    <section id="creative" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Multi-Opsi Kreatif
          </h2>
          <p className="text-lg text-muted-foreground">
            Dapatkan berbagai opsi kreatif sekaligus. Pilih yang paling cocok
            untuk kebutuhan Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left: Example Selector */}
          <Card className="lg:col-span-1 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                Contoh Prompt
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {creativeExamples.map((example) => (
                  <button
                    key={example.category}
                    onClick={() => handleSelectExample(example)}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      selectedExample.category === example.category
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    <div className="font-medium text-sm">{example.title}</div>
                    <div
                      className={`text-xs mt-1 ${
                        selectedExample.category === example.category
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {example.description}
                    </div>
                  </button>
                ))}
              </div>

              {/* Custom Prompt Input */}
              <div className="mt-6 pt-6 border-t space-y-3">
                <Label>Prompt Kustom</Label>
                <Input
                  placeholder="Masukkan prompt Anda..."
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                />
                <Button
                  onClick={handleGenerateOptions}
                  disabled={isGenerating || !customPrompt.trim()}
                  className="w-full"
                >
                  {isGenerating ? (
                    <>
                      <Sparkles className="h-4 w-4 mr-2 animate-spin" />
                      Membuat...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Buat Opsi
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Right: Options Display */}
          <Card className="lg:col-span-2 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-primary" />
                {selectedExample.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {selectedExample.description}
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {(generatedOptions.length > 0
                  ? generatedOptions
                  : selectedExample.options
                ).map((option, index) => (
                  <div
                    key={option.id || index}
                    className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedOption === (option.id || String(index))
                        ? "border-primary bg-primary/5"
                        : "border-muted hover:border-primary/50"
                    }`}
                    onClick={() =>
                      setSelectedOption(option.id || String(index))
                    }
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                          selectedOption === (option.id || String(index))
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        {option.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{option.title}</span>
                          {selectedOption === (option.id || String(index)) && (
                            <Check className="h-4 w-4 text-primary" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {option.description}
                        </p>
                      </div>
                    </div>
                    {selectedOption === (option.id || String(index)) && (
                      <Button className="mt-3 w-full" size="sm">
                        Pilih Opsi Ini
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-sm text-muted-foreground">
                  AI ini dibuat oleh Roflin Juliadi
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
