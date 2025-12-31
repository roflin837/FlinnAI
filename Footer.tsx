import Link from "next/link";
import { MessageCircle, Image, Shield, Mail, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const footerLinks = {
    produk: [
      { label: "Chat AI", href: "#chat" },
      { label: "Pembuatan Gambar", href: "#images" },
      { label: "Multi-Opsi Kreatif", href: "#creative" },
      { label: "API Docs", href: "/docs" },
    ],
    perusahaan: [
      { label: "Tentang Kami", href: "/about" },
      { label: "Karir", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Press", href: "/press" },
    ],
    sumberDaya: [
      { label: "Bantuan", href: "/help" },
      { label: "Tutorial", href: "/tutorials" },
      { label: "Komunitas", href: "/community" },
      { label: "Status", href: "/status" },
    ],
    legal: [
      { label: "Privasi", href: "/privacy" },
      { label: "Syarat", href: "/terms" },
      { label: "Keamanan", href: "/security" },
      { label: "Kontak", href: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@roflin.ai", label: "Email" },
  ];

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg">
                AI
              </div>
              <span className="text-xl font-bold">Roflin AI</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              AI serbaguna dengan kemampuan chat interaktif, pembuatan gambar,
              manajemen pengguna, dan keamanan tingkat tinggi. Dibuat oleh
              Roflin Juliadi.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold mb-3">Produk</h3>
            <ul className="space-y-2">
              {footerLinks.produk.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Perusahaan</h3>
            <ul className="space-y-2">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Sumber Daya</h3>
            <ul className="space-y-2">
              {footerLinks.sumberDaya.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Roflin AI. Semua hak dilindungi.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Dibuat dengan ❤️ oleh Roflin Juliadi</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
