import { ThemeProvider } from './components/ThemeProvider';

import Header from './components/Header';
import AdultTable from './tables/AdultTable';
import EmacTable from './tables/EmacTable';
import EquipamentTable from './tables/EquipamentTable';
import InfantTable from './tables/InfantTable';
import SendTable from './tables/SendTable';
import TeamTable from './tables/TeamTable';

export default function App() {
  return (
    <>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Header />
      <div className="bg-cur-most-dark grid grid-cols-1 pt-2 sm:grid-cols-2 md:grid-cols-4 gap-0.5">
        <div className="md:col-span-2">
          <SendTable />
        </div>
        <div className="md:col-span-2">
          <EmacTable />
        </div>
        <div className="md:col-span-2">
          <AdultTable />
        </div>
        <div className="md:col-span-2">
          <InfantTable />
        </div>
        <div className="md:col-span-2">
          <EquipamentTable />
        </div>
        <div className="md:col-span-2">
          <TeamTable />
        </div>
      </div>
    </ThemeProvider>
    </>
  );
}
