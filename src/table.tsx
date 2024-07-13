import PanelLayout from "@/components/layout-components/main-panel-layout"
import {ContentLayout} from "./components/layout-components/content-layout"
import {DataTableDemo} from "@/components/data-table/index"
import {usersStore} from "@/hooks/usersArray"
import { useStore } from "@/hooks/use-store";

function Table() {
  const users = useStore(usersStore, (state) => state);
  return (
    <PanelLayout>
    <ContentLayout title="Home">
        <DataTableDemo/>
    </ContentLayout>
    </PanelLayout>
  )
}

export default Table
