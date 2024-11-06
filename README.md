
# @precooked/react-button

![Precooked Logo](https://precookedcode.com/assets/logos/logo-horizontal-dark.svg)

`@precooked/react-button` is a versatile button component for React projects. It supports customizable colors, icons, shadows, and various size options.

## Installation

```bash
npm install @precooked/react-button
```

## Props

| Prop             | Type                  | Default     | Description                                                                 |
|------------------|-----------------------|-------------|-----------------------------------------------------------------------------|
| `title`          | `string`              | **required**| The text to display inside the button.                                      |
| `onClick`        | `() => void`          | **required**| Function to handle the button click.                                        |
| `color`          | `keyof colors \| string`| `'primary'`  | The background color of the button (or the text color if `type` is not solid).|
| `borderRadius`   | `number`              | `4`         | The border-radius of the button.                                            |
| `type`           | `"clear" | "outline" | "solid"` | `'solid'`   | The button style type.                                                      |
| `disabled`       | `boolean`             | `false`     | Disable the button when true.                                               |
| `startIcon`      | `string`              | `undefined` | Icon to display at the start of the button.                                 |
| `startIconPaths` | `string[]`            | `undefined` | Custom SVG paths for the start icon.                                        |
| `startIconSize`  | `number`              | `undefined` | Custom size for the start icon.                                             |
| `endIcon`        | `string`              | `undefined` | Icon to display at the end of the button.                                   |
| `endIconPaths`   | `string[]`            | `undefined` | Custom SVG paths for the end icon.                                          |
| `endIconSize`    | `number`              | `undefined` | Custom size for the end icon.                                               |
| `hasShadow`      | `boolean`             | `true`      | Whether the button has a shadow or not.                                     |
| `style`         | `React.CSSProperties` | `undefined` | Custom style for the button container.                                     |
| `titleStyle`    | `React.CSSProperties` | `undefined` | Custom style for the title text.                                           |
| `size`           | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `'md'`     | The size of the button, affecting padding and font-size.                    |

## Example Usage

```tsx
import React from 'react';
import Button from '@precooked/react-button';

const MyComponent = () => (
  <Button 
    title="Click Me" 
    onClick={() => alert('Button clicked!')} 
    color="primary"
    type="solid"
    startIcon="home"
    endIcon="arrow-right"
    size="lg"
  />
);

export default MyComponent;
```

## License

MIT

---

For more information, visit [Precooked](https://precookedcode.com).
