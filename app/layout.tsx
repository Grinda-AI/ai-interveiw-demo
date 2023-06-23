import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GRINDA AI - AI 심사역과 IR 준비하기",
  openGraph: {
    title: "GRINDA AI - AI 심사역과 IR 준비하기",
    description:
      "AI 심사역과 함께 IR 준비하고 스타트업 투자까지!",
    images: [
      {
        url: "https://demo.useliftoff.com/opengraph-image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GRINDA AI - AI 심사역과 IR 준비하기",
    description:
      "AI 심사역과 함께 IR 준비하고 스타트업 투자까지.",
    images: ["https://demo.useliftoff.com/opengraph-image"],
    creator: "@tmeyer_me",
  },
  metadataBase: new URL("https://demo.useliftoff.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
