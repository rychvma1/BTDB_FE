import { PersonDto } from "../pages/firstTable/personStore";
import * as genericFetch from "../API/fetch";

export function getData() {
  const data = genericFetch.genericFetch<PersonDto[]>(
    "https://localhost:44330/DataTable/GetData"
  );

  return data!;
}
