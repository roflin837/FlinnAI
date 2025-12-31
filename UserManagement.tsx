"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  User,
  Mail,
  Lock,
  Image as ImageIcon,
  Settings,
  History,
  Bell,
  Palette,
  Globe,
  Check,
  X,
} from "lucide-react";

interface UserStats {
  chats: number;
  images: number;
  saved: number;
}

export function UserManagement() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // Form states
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  // User stats (mock data)
  const userStats: UserStats = {
    chats: 156,
    images: 42,
    saved: 28,
  };

  // Preferences
  const [preferences, setPreferences] = useState({
    language: "id",
    theme: "light",
    imageStyle: "realistic",
    detailLevel: "medium",
    notifications: true,
  });

  const handleRegister = () => {
    if (registerForm.name && registerForm.email && registerForm.password) {
      setIsLoggedIn(true);
      setShowRegister(false);
      setRegisterForm({ name: "", email: "", password: "" });
    }
  };

  const handleLogin = () => {
    if (loginForm.email && loginForm.password) {
      setIsLoggedIn(true);
      setShowLogin(false);
      setLoginForm({ email: "", password: "" });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <section id="users" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Manajemen Pengguna
          </h2>
          <p className="text-lg text-muted-foreground">
            Sistem lengkap untuk mengelola akun, preferensi, dan histori
            pengguna
          </p>
        </div>

        {!isLoggedIn ? (
          /* Login/Register Demo */
          <div className="flex flex-col lg:flex-row gap-8 max-w-4xl mx-auto">
            {/* Register Card */}
            <Card className="flex-1 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Daftar Gratis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Nama Lengkap</Label>
                    <Input
                      id="register-name"
                      placeholder="John Doe"
                      value={registerForm.name}
                      onChange={(e) =>
                        setRegisterForm({ ...registerForm, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="email@contoh.com"
                      value={registerForm.email}
                      onChange={(e) =>
                        setRegisterForm({ ...registerForm, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      value={registerForm.password}
                      onChange={(e) =>
                        setRegisterForm({
                          ...registerForm,
                          password: e.target.value,
                        })
                      }
                    />
                  </div>
                  <Button onClick={handleRegister} className="w-full">
                    Buat Akun
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    AI ini dibuat oleh Roflin Juliadi
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Login Card */}
            <Card className="flex-1 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Masuk
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="email@contoh.com"
                      value={loginForm.email}
                      onChange={(e) =>
                        setLoginForm({ ...loginForm, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      value={loginForm.password}
                      onChange={(e) =>
                        setLoginForm({ ...loginForm, password: e.target.value })
                      }
                    />
                  </div>
                  <Button variant="outline" onClick={handleLogin} className="w-full">
                    Masuk
                  </Button>
                  <Button variant="link" className="w-full text-muted-foreground">
                    Lupa password?
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Logged In Dashboard */
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Sidebar */}
                  <div className="w-full md:w-64 border-r p-6">
                    <div className="flex flex-col items-center text-center mb-6">
                      <Avatar className="h-20 w-20 mb-3">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                          JD
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold">John Doe</h3>
                      <p className="text-sm text-muted-foreground">
                        john@example.com
                      </p>
                      <Badge className="mt-2">Premium</Badge>
                    </div>

                    <div className="space-y-2">
                      <Button variant="secondary" className="w-full justify-start">
                        <User className="h-4 w-4 mr-2" />
                        Profil
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <History className="h-4 w-4 mr-2" />
                        Histori
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <Settings className="h-4 w-4 mr-2" />
                        Pengaturan
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
                        onClick={handleLogout}
                      >
                        <X className="h-4 w-4 mr-2" />
                        Keluar
                      </Button>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 p-6">
                    <Tabs defaultValue="stats">
                      <TabsList className="mb-6">
                        <TabsTrigger value="stats">Statistik</TabsTrigger>
                        <TabsTrigger value="preferences">Preferensi</TabsTrigger>
                        <TabsTrigger value="history">Histori</TabsTrigger>
                      </TabsList>

                      {/* Stats Tab */}
                      <TabsContent value="stats">
                        <h3 className="text-lg font-semibold mb-4">
                          Aktivitas Anda
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                          <Card className="bg-muted/50">
                            <CardContent className="p-4 text-center">
                              <div className="text-3xl font-bold text-blue-500">
                                {userStats.chats}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Percakapan
                              </div>
                            </CardContent>
                          </Card>
                          <Card className="bg-muted/50">
                            <CardContent className="p-4 text-center">
                              <div className="text-3xl font-bold text-purple-500">
                                {userStats.images}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Gambar Dibuat
                              </div>
                            </CardContent>
                          </Card>
                          <Card className="bg-muted/50">
                            <CardContent className="p-4 text-center">
                              <div className="text-3xl font-bold text-green-500">
                                {userStats.saved}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Tersimpan
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </TabsContent>

                      {/* Preferences Tab */}
                      <TabsContent value="preferences">
                        <h3 className="text-lg font-semibold mb-4">
                          Pengaturan Preferensi
                        </h3>
                        <div className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label className="flex items-center gap-2">
                                <Globe className="h-4 w-4" />
                                Bahasa
                              </Label>
                              <select
                                value={preferences.language}
                                onChange={(e) =>
                                  setPreferences({
                                    ...preferences,
                                    language: e.target.value,
                                  })
                                }
                                className="w-full p-2 rounded-lg border bg-background"
                              >
                                <option value="id">Bahasa Indonesia</option>
                                <option value="en">English</option>
                              </select>
                            </div>
                            <div className="space-y-2">
                              <Label className="flex items-center gap-2">
                                <Palette className="h-4 w-4" />
                                Tema Tampilan
                              </Label>
                              <select
                                value={preferences.theme}
                                onChange={(e) =>
                                  setPreferences({
                                    ...preferences,
                                    theme: e.target.value,
                                  })
                                }
                                className="w-full p-2 rounded-lg border bg-background"
                              >
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                                <option value="system">System</option>
                              </select>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>Style Gambar Default</Label>
                            <div className="flex flex-wrap gap-2">
                              {["Realistik", "Anime", "Cyberpunk", "Cartoon"].map(
                                (style) => (
                                  <Badge
                                    key={style}
                                    variant={
                                      preferences.imageStyle ===
                                      style.toLowerCase()
                                        ? "default"
                                        : "outline"
                                    }
                                    className="cursor-pointer"
                                  >
                                    {style}
                                  </Badge>
                                )
                              )}
                            </div>
                          </div>

                          <div className="flex items-center justify-between p-4 rounded-lg border">
                            <div className="flex items-center gap-2">
                              <Bell className="h-4 w-4" />
                              <span>Notifikasi Email</span>
                            </div>
                            <Button
                              variant={
                                preferences.notifications ? "default" : "outline"
                              }
                              size="sm"
                              onClick={() =>
                                setPreferences({
                                  ...preferences,
                                  notifications: !preferences.notifications,
                                })
                              }
                            >
                              {preferences.notifications ? (
                                <>
                                  <Check className="h-4 w-4 mr-1" />
                                  Aktif
                                </>
                              ) : (
                                "Nonaktif"
                              )}
                            </Button>
                          </div>

                          <Button className="w-full">Simpan Preferensi</Button>
                        </div>
                      </TabsContent>

                      {/* History Tab */}
                      <TabsContent value="history">
                        <h3 className="text-lg font-semibold mb-4">
                          Histori Aktivitas
                        </h3>
                        <div className="space-y-3">
                          {[
                            {
                              type: "chat",
                              title: "Ringkasan buku Harry Potter",
                              time: "2 jam lalu",
                            },
                            {
                              type: "image",
                              title: "Robot Futuristik - 3 gambar",
                              time: "5 jam lalu",
                            },
                            {
                              type: "chat",
                              title: "Tips belajar efektif",
                              time: "Kemarin",
                            },
                            {
                              type: "image",
                              title: "Gadis Penyihir Anime",
                              time: "2 hari lalu",
                            },
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                {item.type === "chat" ? (
                                  <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                                    <User className="h-4 w-4" />
                                  </div>
                                ) : (
                                  <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
                                    <ImageIcon className="h-4 w-4" />
                                  </div>
                                )}
                                <span>{item.title}</span>
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {item.time}
                              </span>
                            </div>
                          ))}
                        </div>
                        <Button variant="outline" className="w-full mt-4">
                          Lihat Semua Histori
                        </Button>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
