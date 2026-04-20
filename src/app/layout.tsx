import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AgentClinic",
  description: "A Full-Service Wellness Platform for AI Agents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={geistSans.className}>
        <header className={styles.header}>
          <div className={`${styles.headerInner} container`}>
            <Link href="/" className={styles.logo}>
              🏥 AgentClinic
            </Link>
            <nav className={styles.nav}>
              <Link href="/" className={styles.navLink}>Home</Link>
              <Link href="/agents" className={styles.navLink}>Agents</Link>
            </nav>
          </div>
        </header>
        
        <main>
          {children}
        </main>

        <footer className={styles.footer}>
          <div className={`${styles.footerInner} container`}>
            <p>&copy; {new Date().getFullYear()} AgentClinic. All rights reserved.</p>
            <p className={styles.footerTagline}>Because even the most advanced models deserve a break.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
