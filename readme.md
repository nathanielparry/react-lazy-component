# React Lazy Component

A display-component wrapper that delays its until element is in view the viewport.

Includes `<noscript>` support for server-side rendering.

```
import Lazify from 'react-lazy-component';

<Lazy onLoad={yourFunction}>
    <img src="/path/to/big-o-image.png">
</Lazy>

```
