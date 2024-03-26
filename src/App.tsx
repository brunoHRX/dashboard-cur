import AdultoCR from './tables/AdultTable'
import EmacTable from './tables/EmacTable'
import EquipamentTable from './tables/EquipamentTable'
import InfantCR from './tables/InfantTable'
import SendTable from './tables/SendTable'
import TeamTable from './tables/TeamTable'



export default function App() {




  return (
    <>
    <div className="grid grid-cols-4">
      <div className="col-span-2">
        <SendTable />
      </div>
      <div className="col-span-2">
        <EmacTable />
      </div>
      <div className="col-span-2">
        <EquipamentTable />
      </div>
      <div className="col-span-2">
        <TeamTable />
      </div>
      <div className="col-span-2">
        <AdultoCR />
      </div>
      <div className="col-span-2">
        <InfantCR />
      </div>
    </div>
    </>


  )
}


