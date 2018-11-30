import { Person } from "../pages/table/customObj";
import * as genericFetch from "../API/fetch";

export function getData() {
  const data = genericFetch.genericFetch<Person[]>(
    "https://localhost:44330/DataTable/GetData"
  );

  return data!;
}
