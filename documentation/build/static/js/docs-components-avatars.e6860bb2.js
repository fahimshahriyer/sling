(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./docs/Components/avatars.mdx":function(e,a,n){"use strict";n.r(a);var t=n("./node_modules/react/index.js"),s=n.n(t),r=n("./node_modules/@mdx-js/tag/dist/index.js");function o(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}a.default=function(e){var a=e.components;o(e,["components"]);return s.a.createElement(r.MDXTag,{name:"wrapper",components:a},s.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"avatars"}},"Avatars"),s.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"usage"}},"Usage:"),s.a.createElement(r.MDXTag,{name:"p",components:a},"In your component"),s.a.createElement(r.MDXTag,{name:"pre",components:a},s.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames';\nimport { withStyles } from '@material-ui/core/styles';\nimport Avatar from '@material-ui/core/Avatar';\n\nconst styles = {\n  row: {\n    display: 'flex',\n    justifyContent: 'center',\n  },\n  avatar: {\n    margin: 10,\n  },\n  bigAvatar: {\n    width: 60,\n    height: 60,\n  },\n};\n\nfunction ImageAvatars(props) {\n  const { classes } = props;\n  return (\n    <div className={classes.row}>\n      <Avatar alt=\"Remy Sharp\" src=\"/static/images/remy.jpg\" className={classes.avatar} />\n      <Avatar\n        alt=\"Adelle Charles\"\n        src=\"/static/images/uxceo-128.jpg\"\n        className={classNames(classes.avatar, classes.bigAvatar)}\n      />\n    </div>\n  );\n}\n\nImageAvatars.propTypes = {\n  classes: PropTypes.object.isRequired,\n};\n\nexport default withStyles(styles)(ImageAvatars);\n")),s.a.createElement(r.MDXTag,{name:"p",components:a},"Learn more at ",s.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://material-ui.com/demos/avatars/"}},"Material UI")))}}}]);