import "./app.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <NextTopLoader />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
