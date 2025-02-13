import { ReactNode } from "react";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import ClientLayout from "@/lib/client-layout";
import { Noto_Sans, Roboto_Mono } from 'next/font/google';
import Head from 'next/head';

const notoSans = Noto_Sans({
  subsets: ['latin'],
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${notoSans} ${robotoMono}`}>
      <body>
        <StyledComponentsRegistry>
          <ClientLayout>{children}</ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
