import PanelLayout from "@/components/layout-components/main-panel-layout"
import {ContentLayout} from "./components/layout-components/content-layout"
import {DataTableDemo} from "@/components/data-table/index"

function Table() {

  return (
    <PanelLayout>
    <ContentLayout title="Home">
        <DataTableDemo/>
    </ContentLayout>
    </PanelLayout>
  )
}

export default Table
