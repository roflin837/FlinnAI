"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Image as ImageIcon,
  Sparkles,
  Download,
  RefreshCw,
  Palette,
  Layers,
  Clock,
  Check,
} from "lucide-react";

interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  style: string;
  timestamp: Date;
}

const styleOptions = [
  { value: "realistic", label: "Realistik", icon: "📷" },
  { value: "anime", label: "Anime", icon: "🎨" },
  { value: "cyberpunk", label: "Cyberpunk", icon: "🌆" },
  { value: "cartoon", label: "Cartoon", icon: "🎭" },
  { value: "fantasy", label: "Fantasy", icon: "🏰" },
  { value: "3d", label: "3D Render", icon: "🎲" },
  { value: "minimalist", label: "Minimalis", icon: "⚪" },
  { value: "oil-painting", label: "Lukisan Oil", icon: "🖼️" },
];

const sampleImages: GeneratedImage[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop",
    prompt: "Robot futuristik di kota cyberpunk",
    style: "cyberpunk",
    timestamp: new Date(),
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=400&fit=crop",
    prompt: "Gadis penyihir dengan kucing",
    style: "anime",
    timestamp: new Date(),
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=400&fit=crop",
    prompt: "Rumah pohon di hutan hujan",
    style: "realistic",
    timestamp: new Date(),
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=400&fit=crop",
    prompt: "Abstract geometric patterns",
    style: "minimalist",
    timestamp: new Date(),
  },
];

export function ImageDemo() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("realistic");
  const [quantity, setQuantity] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>(sampleImages);
  const [selectedStyle, setSelectedStyle] = useState("cyberpunk");

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);

    // Simulate image generation
    setTimeout(() => {
      const newImages: GeneratedImage[] = Array.from({ length: quantity }, (_, i) => ({
        id: Date.now().toString() + i,
        url: `https://images.unsplash.com/photo-${1618005182384 + i * 100}-a83a8bd57fbe?w=400&h=400&fit=crop`,
        prompt: prompt,
        style: style,
        timestamp: new Date(),
      }));
      setGeneratedImages([...newImages, ...generatedImages]);
      setIsGenerating(false);
      setPrompt("");
    }, 2000);
  };

  return (
    <section id="images" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pembuatan Gambar AI
          </h2>
          <p className="text-lg text-muted-foreground">
            Buat gambar stunning dalam berbagai style: realistik, anime,
            cyberpunk, cartoon, fantasy, 3D, dan minimalis
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left: Generator Form */}
          <Card className="lg:col-span-1 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Buat Gambar Baru
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Prompt Input */}
              <div className="space-y-2">
                <Label htmlFor="prompt">Deskripsi Gambar</Label>
                <textarea
                  id="prompt"
                  placeholder="Contoh: Robot futuristik di kota cyberpunk dengan lampu neon..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full min-h-[100px] p-3 rounded-lg border bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Style Selection */}
              <div className="space-y-2">
                <Label>Style Gambar</Label>
                <Select value={style} onValueChange={setStyle}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih style" />
                  </SelectTrigger>
                  <SelectContent>
                    {styleOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        <span className="flex items-center gap-2">
                          <span>{option.icon}</span>
                          <span>{option.label}</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Style Preview Tabs */}
              <div className="space-y-2">
                <Label>Preview Style</Label>
                <Tabs value={selectedStyle} onValueChange={setSelectedStyle}>
                  <TabsList className="w-full grid grid-cols-4">
                    <TabsTrigger value="realistic">📷</TabsTrigger>
                    <TabsTrigger value="anime">🎨</TabsTrigger>
                    <TabsTrigger value="cyberpunk">🌆</TabsTrigger>
                    <TabsTrigger value="fantasy">🏰</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Quantity Slider */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label>Jumlah Gambar</Label>
                  <span className="text-sm font-medium">{quantity}</span>
                </div>
                <Slider
                  value={[quantity]}
                  onValueChange={([value]) => setQuantity(value)}
                  min={1}
                  max={4}
                  step={1}
                  className="py-2"
                />
              </div>

              {/* Generate Button */}
              <Button
                onClick={handleGenerate}
                disabled={isGenerating || !prompt.trim()}
                className="w-full"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Membuat...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Buat Gambar
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                AI ini dibuat oleh Roflin Juliadi
              </p>
            </CardContent>
          </Card>

          {/* Right: Gallery */}
          <Card className="lg:col-span-2 border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  Galeri Gambar
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{generatedImages.length} gambar</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {generatedImages.map((image) => (
                  <Dialog key={image.id}>
                    <DialogTrigger asChild>
                      <div className="group relative aspect-square rounded-xl overflow-hidden bg-muted cursor-pointer">
                        <img
                          src={image.url}
                          alt={image.prompt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Button variant="secondary" size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            Unduh
                          </Button>
                        </div>
                        <div className="absolute bottom-2 left-2 right-2">
                          <div className="flex items-center gap-1 text-xs text-white bg-black/50 rounded-full px-2 py-1">
                            <Palette className="h-3 w-3" />
                            <span className="truncate">{image.style}</span>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <ImageIcon className="h-5 w-5" />
                          Hasil Gambar AI
                        </DialogTitle>
                        <DialogDescription>{image.prompt}</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <img
                          src={image.url}
                          alt={image.prompt}
                          className="w-full rounded-xl"
                        />
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>Style: {image.style}</span>
                          </div>
                          <Button>
                            <Download className="h-4 w-4 mr-2" />
                            Unduh Gambar
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
