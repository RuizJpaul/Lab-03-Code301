
import { useState } from "react"
import Card from "./components/Card"
import ContactList from "./components/ContactList";
import Header from "./components/Header";

export default function App(){
  
  const [selectedCard, setSelectedCard] = useState(null);

  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Luis Ruiz",
      phone: "+51 967816984",
      isFavorite: true,
    },
    {
      id: 2,
      name: "Julia Arones",
      phone: "+51 965348975",
      isFavorite: false,
    },
    {
      id: 3,
      name: "Paul Arones",
      phone: "+51 965834833",
      isFavorite: false,
    }
  ])

  let contactsToShow = contacts;

  if(showOnlyFavorites){
    contactsToShow = contacts.filter((contact) => contact.isFavorite);
  }

  const handleSelectContact = (contact) => {
    alert(`Seleccionaste ${contact.name}`);
    setSelectedCard(contact);
  }

  const handleChangeFavorite = (event) => {
    setShowOnlyFavorites(event.target.checked);
  }

  const toggleFavorite = (id) => {
    const updateContacts =  contacts.map((contact) => {
      return {
        id: contact.id,
        name: contact.name,
        phone: contact.phone,
        isFavorite: contact.id === id ? !contact.isFavorite : contact.isFavorite
      };
    });

    if(selectedCard.id === id){
      setSelectedCard({
        id: selectedCard.id,
        name: selectedCard.name,
        phone: selectedCard.phone,
        isFavorite: !selectedCard.isFavorite,
      });
    }

    setContacts(updateContacts);
  }; 

  return (
    <div style={{
      width:"100%",
      height: "100vh",
      background: "#F1F3F4",
      border: "solid 1px black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <main style={{
        textAlign: "center",
        width: "80%",
        height: "80%",
        border: "solid 1px red"
      }}>
        <Header />
        <section style={{
          width: "100%",
          height: "10%"
        }}>
          <label htmlFor="">
            <h3>Filtros</h3>
            <input type="checkbox" onChange={handleChangeFavorite} />
            Mostrar Favoritos
          </label>
        </section>

        <ContactList contactsToShow={contactsToShow} onSelectContact={handleSelectContact} />

        <div style={{
          width: "100%",
          height: "70%",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          border: "solid green 1px"
        }}>
          {selectedCard ? 
          (<Card card={selectedCard} toggleFavorite={toggleFavorite}/>) : null}
        </div>
      </main>
    </div>
  )
}