import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-full">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body>{children}</body>
    </html>
  );
}
