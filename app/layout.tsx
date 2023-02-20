import Link from "next/link";
import '../assets/main.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <nav>
          <Link href='/'>
            Home
          </Link>
          <Link href='/category'>
            Category
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
