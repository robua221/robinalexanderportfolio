import "../app/globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Robin Alexander — Full Stack Developer",
  description: "Portfolio of Robin Alexander — Full Stack JavaScript Developer"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bg text-gray-100 antialiased">
        <Navbar />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
