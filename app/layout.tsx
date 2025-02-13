import { ReactNode } from "react";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import ClientLayout from "@/lib/client-layout";
import { Noto_Sans, Roboto_Mono } from 'next/font/google';
import {Metadata} from "next";
import { GoogleAnalytics } from '@next/third-parties/google';


const notoSans = Noto_Sans({
  subsets: ['latin'],
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Jason Noer',
  description: 'Learn more about Jason Noer\'s career',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${notoSans} ${robotoMono}`}>
      <body>
        <StyledComponentsRegistry>
          <ClientLayout>{children}</ClientLayout>
        </StyledComponentsRegistry>
      </body>
      <GoogleAnalytics gaId="G-XRVS46Q81L" />
    </html>
  );
}
