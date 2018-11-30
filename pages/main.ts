import * as b from "bobril";
import * as bs from "bobrilstrap";
import * as routes from "../routes";

export const Main = b.createVirtualComponent({
  id: "sample-main",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.children = bs.Container({ fluid: true }, [
      bs.Navbar(
        {},
        bs.Container({}, [
          bs.NavbarHeader({}, bs.NavbarBrand({}, "First Table")),
          bs.NavbarNav({}, [
            routes.personTablePage.name &&
              bs.NavbarNavItem(
                { active: b.isActive(routes.personTablePage.name) },
                b.link(bs.A({}, "Person report"), routes.personTablePage.name)
              )
          ])
        ])
      ),
      me.data.activeRouteHandler()
    ]);
  }
});
