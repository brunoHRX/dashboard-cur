import { ThemeProvider } from './components/ThemeProvider';
import AdultoCR from './tables/AdultTable';
import EmacTable from './tables/EmacTable';
import EquipamentTable from './tables/EquipamentTable';
import InfantCR from './tables/InfantTable';
import SendTable from './tables/SendTable';
import TeamTable from './tables/TeamTable';
import Header from './components/Header';

export default function App() {
  return (
    <>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Header />
      <div className="bg-cur-dark-blue grid grid-cols-1 pt-2 sm:grid-cols-2 md:grid-cols-4 gap-0.5">
        <div className="md:col-span-2">
          <SendTable />
        </div>
        <div className="md:col-span-2">
          <EmacTable />
        </div>
        <div className="md:col-span-2">
          <AdultoCR />
        </div>
        <div className="md:col-span-2">
          <InfantCR />
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
