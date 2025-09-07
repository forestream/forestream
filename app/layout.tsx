import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beep",
  description: "Beep beep beep beep Beep beep beep beep Beep beep beep beep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
