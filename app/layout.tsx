import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Script from 'next/script'
import { Anek_Latin, Open_Sans, Roboto_Mono } from 'next/font/google'
import localFont from 'next/font/local'

// Font files can be colocated inside of `app`
const dingTalkFont = localFont({
    src: 'fonts/DingTalk JinBuTi.ttf',
    display: 'swap',
    variable: '--font-dingtalk',
})

const kingsoftFont = localFont({
    src: 'fonts/Kingsoft_Cloud_Font.ttf',
    display: 'swap',
    variable: '--font-kingsoft',
})

const xinYiGuanHeiFont = localFont({
    src: 'fonts/ZiTiQuanXinYiGuanHeiTi.ttf',
    display: 'swap',
    variable: '--font-xinyiguanhei',
})

const alibabaFont = localFont({
    src: 'fonts/AlibabaPuHuiTi-3-55-Regular.ttf',
    display: 'swap',
    variable: '--font-alibaba',
})

const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-opensans',
})

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-mono',
})

const ankeLatin = Anek_Latin({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-anke',
})

export const metadata: Metadata = {
    title: "PicProse - Better Cover Image Generator Tools",
    description: "PicProse is a better cover image generator tool for Medium, YouTube, BiliBili, Blog and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="zh-CN"
              className={`${openSans.variable} ${robotoMono.variable} ${ankeLatin.variable} ${dingTalkFont.variable} ${kingsoftFont.variable} ${xinYiGuanHeiFont.variable} ${alibabaFont.variable} font-sans light`}>

            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
            <Script id="LA_COLLECT" src="https://sdk.51.la/js-sdk-pro.min.js"></Script>
            <Script
                id="script-init-lanalytics"
                dangerouslySetInnerHTML={{
                    __html: `
                        LA.init({
                            id: "3I7YoVDf79xuWLa2",
                            ck: "3I7YoVDf79xuWLa2",
                            autoTrack: true,
                            hashMode: true
                        });
                    `
                }}
            />
        </html>
    );
}
