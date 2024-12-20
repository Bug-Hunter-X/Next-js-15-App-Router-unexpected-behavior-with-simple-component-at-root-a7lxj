```javascript
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

// app/page.js
export default function Home() {
  return (
    <div>Hello World!</div>
  );
}
```
This solution creates a layout at `app/layout.js` and places your content within a page at `app/page.js`.  This correctly uses the App Router structure.