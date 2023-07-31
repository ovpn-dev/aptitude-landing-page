import './styles.css'

export const metadata = {
  title: "Find Nearby Homes",
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
