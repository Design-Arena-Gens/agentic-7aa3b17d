export const metadata = {
  title: 'Test Job #4',
  description: 'Test deployment #4',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
