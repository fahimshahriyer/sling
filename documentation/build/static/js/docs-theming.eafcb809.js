(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./docs/theming.mdx":function(n,e,a){"use strict";a.r(e);var t=a("./node_modules/react/index.js"),r=a.n(t),s=a("./node_modules/@mdx-js/tag/dist/index.js");function o(n,e){if(null==n)return{};var a,t,r=function(n,e){if(null==n)return{};var a,t,r={},s=Object.keys(n);for(t=0;t<s.length;t++)a=s[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(t=0;t<s.length;t++)a=s[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}e.default=function(n){var e=n.components;o(n,["components"]);return r.a.createElement(s.MDXTag,{name:"wrapper",components:e},r.a.createElement(s.MDXTag,{name:"h1",components:e,props:{id:"theming"}},"Theming"),r.a.createElement(s.MDXTag,{name:"p",components:e},"You can customize your app's look and feel as you wish. Theming sling admin is incredibly easy.\nGo to ",r.a.createElement(s.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"src/assets/jss/theme.jsx")," and change the values as you see fit."),r.a.createElement(s.MDXTag,{name:"pre",components:e},r.a.createElement(s.MDXTag,{name:"code",components:e,parentName:"pre",props:{className:"language-js"}},'const theme = createMuiTheme({\n  palette: {\n    primary: {\n      main: "#5b6dff",\n      light: "#969bff",\n      lighter: "#e8f0fe",\n      dark: "#0042cb",\n      contrastText: "#ffffff"\n    },\n    secondary: {\n      main: "#f27092",\n      light: "#ffa2c2",\n      dark: "#bc3f65",\n      contrastText: "#ffffff"\n    },\n    text: {\n      primary: "#303880",\n      secondary: "#7278b2",\n      disabled: "#aaaed3",\n      hint: "#aaaed3"\n    },\n    background: {\n      paper: "#ffffff",\n      default: "#f4f5f9"\n    },\n    action: {\n      active: "#aaaed3"\n    },\n    divider: "#e8eaf6"\n  },\n  status: {\n    success: "#10ac84",\n    warning: "#feca57",\n    error: "#ff6b6b",\n    info: "#5b6dff"\n  },\n  shadows: shadows,\n  shape: {\n    borderRadius: 8\n  },\n  typography: {\n    fontFamily: ["Rubik", "sans-serif"]\n  }\n});\n')))}}}]);