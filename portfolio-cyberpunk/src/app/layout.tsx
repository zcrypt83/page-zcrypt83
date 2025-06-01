import './globals.css';
import Layout from '@/components/Layout/Layout';

export const metadata = {
  title: 'Cyberpunk Portfolio',
  description: 'A modern portfolio with cyberpunk vibes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
