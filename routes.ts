import * as b from "bobril";
import { Main } from "./pages/main";
import { personReportBobx } from "./pages/firstTable/table";

export const mainPage: b.IRoute = { handler: Main };

export const personTablePage: b.IRoute = {
  handler: personReportBobx,
  url: "/person-report",
  name: "person-report"
};

export const defaultPage = personTablePage;
