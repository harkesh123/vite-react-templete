import PanelLayout from "@/components/layout-components/main-panel-layout"
import {ContentLayout} from "./components/layout-components/content-layout"
import { Button } from "@/components/ui/button"
import {buttonCount} from "@/hooks/buttonCount"
import { useStore } from "@/hooks/use-store";

function App() {
const countValue = useStore(buttonCount, (state) => state);

  return (
    <PanelLayout>
    <ContentLayout title="Home">
      <p className="read-the-docs">
        Click on the Button and update {countValue?.count}
      </p>
      <Button onClick={()=>countValue?.setCount(countValue.count +1)} >Action</Button>
    </ContentLayout>
    </PanelLayout>
  )
}

export default App
