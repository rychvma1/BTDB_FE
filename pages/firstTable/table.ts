import * as b from "bobril";
import * as bs from "bobrilstrap";
import { PersonStore } from "./personStore";

export const personReportBobx = b.createComponent({
  id: "sample-personReport-bobx",
  ctxClass: PersonStore,
  render(ctx: PersonStore, me: b.IBobrilNode) {
    //debugger;
    //personStore.getPersons();
    me.children = [
      bs.Table({ condensed: true }, [
        bs.THead(
          {},
          bs.Tr({}, [
            bs.Td({}, "id"),
            bs.Td({}, "Name"),
            bs.Td({}, "Age"),
            bs.Td({}, "Gender"),
            bs.Td({}, "Action")
          ])
        ),
        bs.TBody(
          {},
          ctx.persons.map((person, index) =>
            bs.Tr({}, [
              bs.Td({}, person.id),
              bs.Td({}, person.name),
              bs.Td({}, person.age),
              bs.Td({}, person.genderStr),
              bs.Td(
                {},
                bs.Button({
                  size: bs.Size.Xs,
                  option: bs.ButtonOption.Info,
                  label: "Detail",
                  onClick: () => {
                    ctx.alertState = index;
                  }
                })
              )
            ])
          )
        )
      ]),ctx.alertState && bs.Alert({
            context: bs.AlertContext.Info,
            dismissButton: {
                aria: { label: "Close" },
                onClick: () => {
                    ctx.alertState = null;
                }
            },
            onClosed: () => alert("Closed"),
            children: `Id: ${ctx.persons[ctx.alertState].id} ,Name: ${
                ctx.persons[ctx.alertState].name
                } ,Age: ${ctx.persons[ctx.alertState].age} ,Gender: ${
                ctx.persons[ctx.alertState].genderStr
                }`
        })
    ];
  }
});
