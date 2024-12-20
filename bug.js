```javascript
// pages/index.js
export default function Home() {
  return (
    <div>Hello World!</div>
  );
}
```

This code seems simple, but in Next.js 15, with the App Router, it might cause issues if you're expecting this to render at the root `/` layout. The App Router works differently than the Pages Router.