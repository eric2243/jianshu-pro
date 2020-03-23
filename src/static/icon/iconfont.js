import { createGlobalStyle } from "styled-components";
export const FontFace = createGlobalStyle` 
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1582358815853'); /* IE9 */
  src: url('./iconfont.eot?t=1582358815853#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAXMAAsAAAAACyQAAAV/AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDbAqIVIcoATYCJAMgCxIABCAFhG0HaxudCcgusG3Yo4CyGCEqRKAsuB8vKXgeden7kuzTQcIHKRLYRaCpPPIENAGtacYiuMQTeahtNahX6GZzVRvdyEUhjlF4iBtRL2TrdVW/yBQvf1HVC2+evVJNsLKY4X+6X+m2L1g+G1uXP1td10GfLxrogCoSEySA8BbxLHY41eQMPNSjIUCMctRBuuQWV4PpGEAltGaWVk2C6QkzpoItWJ1bsKVB9uFg1XZVDOz1/l4+0kgsKBwNrDlgSo4SpAcu7waK28J1jDIUJP05ge12oIE6gAHZVujegA7SddDEztczeACysSjcICdIBhWC5sHGdwP/h5BkNWsPXiFbUHNToHGnaiayyn8e4sLVCcqclIlAkKMQNARJBBeCCggKgmYIDgTNxe00GymCwLuB0k9Nbc0WuUASpDsA8gvQVvHKDRqDUgkliURavokpUxjk4eY23SbjOZmUbKqz/c1Qx3NfeObdfTJZEDyHw7fbh9696/Gensj6/QMcoFQ4D9fmlWIb9EkbJWvhurgBQYMr7t4dsse3OQVhEoFXNw7w3hsFUHYpSnLcVt5nZ3TYK+/FxnmiO1Jynp8c9cKJ0dEtNs9qzpNT7hBaldz1+NFtNq8NGGV3rLgEt623V7HDm+d9iON6XrjNNsZ5y6u52iHH7JAgUo0j9ULtgiePl7TZBxLHhcNdAJeYJ6tG9dLlK/hg9GhmGXlEuhNiErsR21Ei632/3TtjG3zvdrDutHTnbRGfUIcR7e2ox3NgSKESH5tj9r35cqnUyokAtQ8xuevAvrn4IXudlfITDnkskrW2HnS0H2ob3NXO3Ke5hghC2IrkQYUK97XCbEiSB1G9X9fHS/t6ZLwgGNZyPnf4gd7efztT0Jop3DdnD7OllYdEyRo3Xgb+r30oKV9e8lAQBmt5VM/pwvYd4mfPNFWc5pjKeUGv+x8OGKC+FU3G75l+KvW2m1KfWedxzfdqqPMmfF8U7vH1UwwOUOkcl/5UfVH5etdc35F2sWk4bQFDr3vWMbjCzKoF31znL9As6Igo6otc47/zHGJkHi8yPZXVjU9IGixsQZ668LqP1eD3leHDH4ctzBD1XtzbK+rQCj9KPyb5+9c8svOG3yUG/ke9L3BySt6tBV1uQef/is6CLrUMF2UqtKkO86fdQvZcfH3E6RhKL5RrnVZLi9ITn4wh2Ct+yd+lqn6sWg78SzRPndgZvQIRybZ+uEpw9x5+z59tv1DwaHL+5cBGH19p6oL/i55RKzZ8t9ivt6SbV2kOSNjnvX+/qRabKR4vLj6kFXpj0YeiQCd20bPiuXYG4UF/TqoVmzY1cIWIu8QrxBy7BPWANHAtvV29gjDUNzQQrtfDxc0AhPf1MV3O/i/F2/8Y65L82/LdTni4VBTiNQnXGfQ6sMQa0BLbLkH2MxcZWKw5dU+J0R7LuJi4T2VMkMCW+/N5yrRJdDUIlmQEighlQWOpQjXMOuAQpwm4WNpDjNp03z5OAQsQIyYK1GIzASGXM6DI5jpocrlDNcwn4JDiM7jkioYYnnjsMU41mY5mMZBkoRJT1GNaijappI1F/dpKqLYaSCYu8zhyyFi0MSwiNDydy4MmyPSxjqVGHcmyKkzF0EYslxwPGgw0ZmZoHaTYUA3LmhPDwlRFjxRK0UaA0hkGCAkLRAnGBOrBmA4FjQmVGZoFzfx+JRA1VgyQMBWdnoXlQBgsaGeP0ZB6NEBQ89QmVKdzabiQGtREsoglVWBM2VbTGMHoxpwQg0jTYMwrXkwHhIIllGktkmYSqc8Gm4JVh46vNb7TM4AYsK4VJVqMOOJKRKw826JlWrKB1P5ZErS1Hk5zN7CSdVqTxGLWmkQZpOzlrL2U0kBKrzWhKtKkVpI6rTEBAAA=') format('woff2'),
  url('./iconfont.woff?t=1582358815853') format('woff'),
  url('./iconfont.ttf?t=1582358815853') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1582358815853#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconxiazai:before {
  content: "\e683";
}

.iconshouye:before {
  content: "\e620";
}

.iconshuaxin:before {
  content: "\e60f";
}

.iconspin:before {
  content: "\e851";
}

.iconAa:before {
  content: "\e636";
}

.iconicon-checkin:before {
  content: "\e615";
}

.iconfangdajing:before {
  content: "\e637";
}

`;
