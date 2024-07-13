import AutoForm, { AutoFormSubmit } from "@/components/auto-form";
import * as z from "zod";
import { DependencyType } from "@/components/auto-form/types";
import PanelLayout from "@/components/layout-components/main-panel-layout"
import {ContentLayout} from "./components/layout-components/content-layout"
import {usersStore} from "@/hooks/usersArray"
import { useStore } from "@/hooks/use-store";
// Define your form schema using zod
const formSchema = z.object({
  username: z
  .string({
    required_error: "Username is required.",
  })
  // You can use zod's built-in validation as normal
  .min(2, {
    message: "Username must be at least 2 characters.",
  }),
  date: z.coerce.date(),
  location:z.string({
    description:"Please enter the location"
  }).min(2, {
    message: "Location must be at least 2 characters.",
  }),
  phoneNumber:z.number({
    required_error:"please enter phone number"
  }).lte(9999999999),
  addColour: z.boolean().optional(),

  // Enum will show a select
  color: z.enum(["red", "green", "blue"]),

});

export default function Form() {
  const users = useStore(usersStore, (state) => state);
  return (
    <PanelLayout>
    <ContentLayout title="Home">
    <AutoForm
      // Pass the schema to the form
      formClassName="max-w-4xl"
      formSchema={formSchema}
      // You can add additional config for each field
      // to customize the UI
      fieldConfig={{
        phoneNumber: {
          // Set a "description" that will be shown below the field
          description: "Your Phone number.",
          inputProps: {
            type: "number",
            placeholder: "+91 -",
          },    
        },
        addColour: {
          // Booleans use a checkbox by default, you can use a switch instead
          fieldType: "switch",
        },
      }}
      dependencies={[
        {
          // Hide "color" when "sendMeMails" is not checked as we only need to
          // know the color when we send mails
          sourceField: "addColour",
          type: DependencyType.HIDES,
          targetField: "color",
          when: (sendMeMails) => !sendMeMails,
        },
      ]}
      onSubmit={(e:any)=>{users?.updateUsers(e); console.log(users?.users,"ooo")}}
      
    >
      <AutoFormSubmit>Send now</AutoFormSubmit>
    </AutoForm>
    </ContentLayout>
    </PanelLayout>
  );
}