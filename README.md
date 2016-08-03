For when you need to know the dimensions of a text box as it will be rendered in svg. (note: each line is currently given a height of `1em`).

# Install

`npm install svg-text-size`

# Usage

```javascript
import textSize from 'svg-text-size'

const dimensions = textSize("A string", { 'letter-spacing': '1px' })
// dimensions will look something like { width: 50, height: 12 }

const labelDimensions = textSize(["Or maybe you want", "a wrapping label"])
// dimensions will look something like { width: 50, height: 24 }
```

see [svg-text-wrap](https://github.com/station-x/svg-text-wrap) for an easy way to construct these text arrays.
