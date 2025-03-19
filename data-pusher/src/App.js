import UserRoute from "./Routes/UserRoute";
import { Toaster} from 'sonner';

function App() {
  return (
    <>
      <Toaster position="top-right"/>
      <UserRoute />
    </>
  );
}

export default App;
