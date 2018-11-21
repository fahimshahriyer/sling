(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./docs/Components/button.mdx":function(n,t,e){"use strict";e.r(t);var o=e("./node_modules/react/index.js"),a=e.n(o),s=e("./node_modules/@mdx-js/tag/dist/index.js");function r(n,t){if(null==n)return{};var e,o,a=function(n,t){if(null==n)return{};var e,o,a={},s=Object.keys(n);for(o=0;o<s.length;o++)e=s[o],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(o=0;o<s.length;o++)e=s[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}t.default=function(n){var t=n.components;r(n,["components"]);return a.a.createElement(s.MDXTag,{name:"wrapper",components:t},a.a.createElement(s.MDXTag,{name:"h1",components:t,props:{id:"button"}},"Button"),a.a.createElement(s.MDXTag,{name:"h3",components:t,props:{id:"usage"}},"Usage:"),a.a.createElement(s.MDXTag,{name:"p",components:t},"In your component"),a.a.createElement(s.MDXTag,{name:"pre",components:t},a.a.createElement(s.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},'import React from \'react\';\nimport PropTypes from \'prop-types\';\nimport { withStyles } from \'@material-ui/core/styles\';\nimport Button from \'@material-ui/core/Button\';\n\nconst styles = theme => ({\n  button: {\n    margin: theme.spacing.unit,\n  },\n  input: {\n    display: \'none\',\n  },\n});\n\nfunction TextButtons(props) {\n  const { classes } = props;\n  return (\n    <div>\n      <Button className={classes.button}>Default</Button>\n      <Button color="primary" className={classes.button}>\n        Primary\n      </Button>\n      <Button color="secondary" className={classes.button}>\n        Secondary\n      </Button>\n      <Button disabled className={classes.button}>\n        Disabled\n      </Button>\n      <Button href="#text-buttons" className={classes.button}>\n        Link\n      </Button>\n      <input\n        accept="image/*"\n        className={classes.input}\n        id="flat-button-file"\n        multiple\n        type="file"\n      />\n      <label htmlFor="flat-button-file">\n        <Button component="span" className={classes.button}>\n          Upload\n        </Button>\n      </label>\n    </div>\n  );\n}\n\nTextButtons.propTypes = {\n  classes: PropTypes.object.isRequired,\n};\n\nexport default withStyles(styles)(TextButtons);\n')),a.a.createElement(s.MDXTag,{name:"p",components:t},"Learn more at ",a.a.createElement(s.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://material-ui.com/demos/buttons/"}},"Material UI")))}}}]);