import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Portfólio de Automação | Eneri Junior — QA Engineer & Java Dev',
  description:
    'Portfólio interativo de Eneri Junior — Quality Assurance Engineer e Desenvolvedor Java Júnior focado em automação de testes, CI/CD e DevOps.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Portfólio | Eneri Junior — QA Engineer',
    description: 'Automação de testes, CI/CD e desenvolvimento backend em Java.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
