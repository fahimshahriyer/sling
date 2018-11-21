(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./docs/Components/tabs.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),r=a.n(t),o=a("./node_modules/@mdx-js/tag/dist/index.js");function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}n.default=function(e){var n=e.components;s(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:n},r.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"tabs"}},"Tabs"),r.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"usage"}},"Usage:"),r.a.createElement(o.MDXTag,{name:"p",components:n},"In your component"),r.a.createElement(o.MDXTag,{name:"pre",components:n},r.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import React from 'react';\nimport PropTypes from 'prop-types';\nimport { withStyles } from '@material-ui/core/styles';\nimport AppBar from '@material-ui/core/AppBar';\nimport Tabs from '@material-ui/core/Tabs';\nimport Tab from '@material-ui/core/Tab';\nimport Typography from '@material-ui/core/Typography';\n\nfunction TabContainer(props) {\n  return (\n    <Typography component=\"div\" style={{ padding: 8 * 3 }}>\n      {props.children}\n    </Typography>\n  );\n}\n\nTabContainer.propTypes = {\n  children: PropTypes.node.isRequired,\n};\n\nconst styles = theme => ({\n  root: {\n    flexGrow: 1,\n    backgroundColor: theme.palette.background.paper,\n  },\n});\n\nclass SimpleTabs extends React.Component {\n  state = {\n    value: 0,\n  };\n\n  handleChange = (event, value) => {\n    this.setState({ value });\n  };\n\n  render() {\n    const { classes } = this.props;\n    const { value } = this.state;\n\n    return (\n      <div className={classes.root}>\n        <AppBar position=\"static\">\n          <Tabs value={value} onChange={this.handleChange}>\n            <Tab label=\"Item One\" />\n            <Tab label=\"Item Two\" />\n            <Tab label=\"Item Three\" href=\"#basic-tabs\" />\n          </Tabs>\n        </AppBar>\n        {value === 0 && <TabContainer>Item One</TabContainer>}\n        {value === 1 && <TabContainer>Item Two</TabContainer>}\n        {value === 2 && <TabContainer>Item Three</TabContainer>}\n      </div>\n    );\n  }\n}\n\nSimpleTabs.propTypes = {\n  classes: PropTypes.object.isRequired,\n};\n\nexport default withStyles(styles)(SimpleTabs);\n")),r.a.createElement(o.MDXTag,{name:"p",components:n},"Learn more at ",r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://material-ui.com/demos/tabs/"}},"Material UI")))}}}]);