import './globals.css'

export const metadata = {
  title: 'Upenha',
  description: "Hello i'm Lucas AKA Upenha, a young developer and designer that loves learning new things.",
  openGraph: {
    title: 'Upenha',
    description: "Hello i'm Lucas AKA Upenha, a young developer and designer that loves learning new things.",
    url: 'https://upenha.tech',
    siteName: 'Upenha',
    locale: 'en-US',
    images: [
      {
        url: 'https://github.com/upenha.png',
      }
    ],
    type: 'website'
  },
  themeColor: 'black',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
