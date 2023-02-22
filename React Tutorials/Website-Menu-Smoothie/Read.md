https://www.youtube.com/watch?v=S4IxZl1hmjQ&list=PLXeLy47_mDjDIsBbFZ7zQYStClrP-DM_H&index=64&t=31s&ab_channel=CodeWithYe%27


[<img src="https://img.youtube.com/vi/S4IxZl1hmjQ/sddefault.jpg">](https://www.youtube.com/watch?v=S4IxZl1hmjQ&list=PLXeLy47_mDjDIsBbFZ7zQYStClrP-DM_H&index=64&t=31s&ab_channel=CodeWithYe%27/)


## Build a react responsive education website with tailwind css and Framer Motion


## Note 


## Note

### Line Height

> User leading-#

4 equals to 1rem = 16 px.

leading-1 is line height of 4 px.

Line height looks good with 1.25 or 1.5 value of origianl font size

ex) 18px font looks good with 24px of line height (leading-6 ~ leading-8)


### npm smooth scroll

1. Install React Scroll

`npm i react-scroll`

[https://github.com/fisshy/react-scroll](https://github.com/fisshy/react-scroll)

```jsx
import { Link } from "react-scroll";
```

```jsx
<Link to={href} spy={true} smooth={true} duration={500} offset={-50} className="font-bold transition-all duration-300">{link}</Link>
```


### import js data into jsx

```jsx
{logos.map((logo, index) => (
            <div className="w-28" key={index}>
              <img src={logo} alt="/" className="w-full object-cover"/>
            </div>
          ))}

```

```jsx
export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
```

```jsx
{navLinks.map(navLink => {
            return <NavLink key={navLink.id} {...navLink}/>;
          })}

```


### Letter spacing in Tailwind 

| Class | Properties |
| `tracking-tighter` | letter-spacing: -0.05em; |
| `tracking-tight` | letter-spacing: -0.025em; |
| `tracking-normal` | letter-spacing: 0em; |
| `tracking-wide` | letter-spacing: 0.025em; |
| `tracking-wider` | letter-spacing: 0.05em; |
| `tracking-widest` | letter-spacing: 0.1em; |

### Install Vite + Tailwind

[https://vitejs.dev/guide/](https://vitejs.dev/guide/)

[https://tailwindcss.com/docs/guides/vite](https://tailwindcss.com/docs/guides/vite)



### Import Google Fonts in Tailwind


```jsx
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Playfair+Display:wght@400;600&display=swap');
```

Import Open Sans and Playfair font from google font.

```jsx
fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"]
      },
```

Add fontfamily in tailwind config extend brackets.

```jsx
<div className="bg-deep-blue text:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
```

Use `font-playfair` in className