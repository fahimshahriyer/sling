(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./docs/Components/badge.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),o=a.n(t),r=a("./node_modules/@mdx-js/tag/dist/index.js");function s(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}n.default=function(e){var n=e.components;s(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"badge"}},"Badge"),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"usage"}},"Usage:"),o.a.createElement(r.MDXTag,{name:"p",components:n},"In your component"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import React from 'react';\nimport PropTypes from 'prop-types';\nimport { withStyles } from '@material-ui/core/styles';\nimport Badge from '@material-ui/core/Badge';\nimport IconButton from '@material-ui/core/IconButton';\nimport MailIcon from '@material-ui/icons/Mail';\nimport Typography from '@material-ui/core/Typography';\nimport Button from '@material-ui/core/Button';\n\nconst styles = theme => ({\n  margin: {\n    margin: theme.spacing.unit * 2,\n  },\n  padding: {\n    padding: `0 ${theme.spacing.unit * 2}px`,\n  },\n});\n\nfunction SimpleBadge(props) {\n  const { classes } = props;\n  return (\n    <div>\n      <div>\n        <Badge className={classes.margin} badgeContent={4} color=\"primary\">\n          <MailIcon />\n        </Badge>\n        <Badge className={classes.margin} badgeContent={10} color=\"secondary\">\n          <MailIcon />\n        </Badge>\n        <IconButton aria-label=\"4 pending messages\" className={classes.margin}>\n          <Badge badgeContent={4} color=\"primary\">\n            <MailIcon />\n          </Badge>\n        </IconButton>\n      </div>\n      <Badge color=\"primary\" badgeContent={4} className={classes.margin}>\n        <Typography className={classes.padding}>Typography</Typography>\n      </Badge>\n      <Badge color=\"primary\" badgeContent={4} className={classes.margin}>\n        <Button variant=\"contained\">Button</Button>\n      </Badge>\n    </div>\n  );\n}\n\nSimpleBadge.propTypes = {\n  classes: PropTypes.object.isRequired,\n};\n\nexport default withStyles(styles)(SimpleBadge);\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Learn more at ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://material-ui.com/demos/badges/"}},"Material UI")))}}}]);