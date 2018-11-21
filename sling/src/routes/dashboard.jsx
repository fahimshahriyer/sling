import DashboardPage from "views/Dashboard/Dashboard";
// Apps
import Contacts from "views/Contacts/Contacts";
// UI Views
import AppBar from "views/UI/AppBar";
import Autocomplete from "views/UI/AutoComplete";
import Avatars from "views/UI/Avatars";
import Badges from "views/UI/Badges";
import BottomNavigation from "views/UI/BottomNavigation";
import Buttons from "views/UI/Buttons";
import Cards from "views/UI/Cards";
import Chips from "views/UI/Chips";
import Dialogs from "views/UI/Dialogs";
import Dividers from "views/UI/Dividers";
import Drawers from "views/UI/Drawers";
import ExpansionPanels from "views/UI/ExpansionPanels";
import Grid from "views/UI/Grid";
import Lists from "views/UI/Lists";
import Menus from "views/UI/Menus";
import Paper from "views/UI/Paper";
import Pickers from "views/UI/Pickers";
import Progress from "views/UI/Progress";
import SelectionControls from "views/UI/SelectionControls";
import Selects from "views/UI/Selects";
import Snackbars from "views/UI/Snackbars";
import Tabs from "views/UI/Tabs";
import Tooltips from "views/UI/Tooltips";
// Store Pages
import Checkout from "views/Checkout/Checkout";
import Pricing from "views/Pricing/Pricing";
// Tables
import RegularTables from "views/Tables/RegularTables";
import AdvancedTables from "views/Tables/AdvancedTables";
// Custom Icons
import Icons from "views/Icons/Icons";
// Forms
import TextFields from "views/Forms/TextFields";
import Steppers from "views/Forms/Steppers";
//Charts
import NivoCharts from "views/Charts/NivoCharts";
import TrendGraph from "views/Charts/TrendGraph";
// Maps
import GoogleMaps from "views/Maps/GoogleMaps";
import Blank from "views/Blank";

const dashboardRoutes = [
  { path: "/dashboard", name: "Dashboard", component: DashboardPage },
  { path: "/apps/contacts", name: "Contacts", component: Contacts },
  // UI Views Routes
  { path: "/ui/app-bar", name: "App Bar", component: AppBar },
  { path: "/ui/auto-complete", name: "Autocomplete", component: Autocomplete },
  { path: "/ui/avatars", name: "Avatars", component: Avatars },
  { path: "/ui/badges", name: "Badges", component: Badges },
  {
    path: "/ui/bottom-navigation",
    name: "Bottom Navigation",
    component: BottomNavigation
  },
  { path: "/ui/buttons", name: "Buttons", component: Buttons },
  { path: "/ui/cards", name: "Cards", component: Cards },
  { path: "/ui/chips", name: "Chips", component: Chips },
  { path: "/ui/dialogs", name: "Dialogs", component: Dialogs },
  { path: "/ui/dividers", name: "Dividers", component: Dividers },
  { path: "/ui/drawers", name: "Drawers", component: Drawers },
  {
    path: "/ui/expansion-panels",
    name: "Expansion Panels",
    component: ExpansionPanels
  },
  { path: "/ui/grid", name: "Grid", component: Grid },
  { path: "/ui/lists", name: "List", component: Lists },
  { path: "/ui/menus", name: "Menus", component: Menus },
  { path: "/ui/paper", name: "Paper", component: Paper },
  { path: "/ui/pickers", name: "Pickers", component: Pickers },
  { path: "/ui/progress", name: "Progress", component: Progress },
  {
    path: "/ui/selection-controls",
    name: "Selection Controls",
    component: SelectionControls
  },
  { path: "/ui/selects", name: "Selects", component: Selects },
  { path: "/ui/snackbars", name: "Snackbars", component: Snackbars },
  { path: "/ui/tabs", name: "Tabs", component: Tabs },
  { path: "/ui/tooltips", name: "Tooltips", component: Tooltips },
  // Store Pages
  { path: "/checkout", name: "Checkout", component: Checkout },
  { path: "/pricing", name: "Pricing", component: Pricing },
  //Tables Views Routes
  { path: "/tables/regular", name: "Regular", component: RegularTables },
  { path: "/tables/advanced", name: "Regular", component: AdvancedTables },
  // Custom Icons
  { path: "/icons/custom", name: "Icons", component: Icons },
  // Forms Routes
  { path: "/forms/textfields", name: "Textfields", component: TextFields },
  { path: "/forms/steppers", name: "Stepper", component: Steppers },
  // Charts Routes
  { path: "/charts/nivo", name: "Nivo", component: NivoCharts },
  { path: "/charts/trend", name: "Trend", component: TrendGraph },
  // Maps
  { path: "/maps/google-map", name: "Google Map", component: GoogleMaps },
  // Blank Page
  { path: "/blank", name: "Blank Page", component: Blank },
  {
    redirect: true,
    path: "/",
    to: "/dashboard",
    navbarName: "Redirect"
  }
];

export default dashboardRoutes;
