import { Countainer } from './Styles/Countainer';
import { TitleContact, TitlePhone } from './Styles/Titles';
import { Contacts } from './Contacts/Contacts';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';

// const CONTACTS_KEY = 'contacts';

export function App() {
  // const [contacts, setContacts] = useState(
  //   () =>
  //     JSON.parse(window.localStorage.getItem(CONTACTS_KEY)) ?? initialContacts
  // );
  // console.log(contacts);

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Countainer>
      <TitlePhone>Phonebook</TitlePhone>

      <Form />

      <TitleContact>Contacts</TitleContact>

      <Filter title="Find contacts by name" />

      <Contacts />
    </Countainer>
  );
}
