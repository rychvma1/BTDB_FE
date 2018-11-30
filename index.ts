import * as b from "bobril";
import * as bs from "bobrilstrap";
import * as routes from "./routes";

bs.init();

b.routes(
  b.route(routes.mainPage, [
    b.route(routes.personTablePage),
    b.routeDefault(routes.defaultPage)
  ])
);
