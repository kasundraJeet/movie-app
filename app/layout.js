import "./app.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <NextTopLoader  color="#f2613f"  showSpinner={true}  height={4} />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
