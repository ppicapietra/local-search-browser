import './App.css';
import Routes from "./routes";
import ContactsProvider from './context/contacts/Provider';

const App = () => {
  return (
    <ContactsProvider>
      <Routes />
    </ContactsProvider>
  );
}

export default App;
