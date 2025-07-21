
import { useState } from "react"
import Card from "./components/Card"
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import Filter from "./components/Filter";
import ClearContact from "./components/ClearContact";
import Footer from "./components/Footer";

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
    // alert(`Seleccionaste ${contact.name}`);
    setSelectedCard(contact);
  }

  const handleChangeFavorite = (event) => {
    setShowOnlyFavorites(event.target.checked);
  }

  const handleClearContact = () => {
    setSelectedCard(null);
  }

  const handleNextContact = (selectedContact) => {

    if(selectedContact === null){
      setSelectedCard(contactsToShow[0]);
      return;
    }
    else{
      const currentIndex = contactsToShow.findIndex((contact) => contact.id === selectedContact.id);

      if(currentIndex === contactsToShow.length-1){
        setSelectedCard(contactsToShow[0]);
        return;
      }

      setSelectedCard(contactsToShow[currentIndex+1])
    }
  }

  const handlePreviousContact = (selectedContact) => {

    if(selectedContact === null){
      setSelectedCard(contactsToShow[contactsToShow.length-1]);
      return;
    }
    else{
      const currentIndex = contactsToShow.findIndex((contact) => contact.id === selectedContact.id);

      if(currentIndex === 0){
        setSelectedCard(contactsToShow[contactsToShow.length-1]);
        return;
      }

      setSelectedCard(contactsToShow[currentIndex-1])
    }
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
      display: "flex",
      flexDirection: "column",
      fontFamily: "Nunito"
    }}>
      <Header />
      <main style={{
        textAlign: "center",
        width: "100%",
        height: "80%",
        background: "#F9FAFB",
        color: "#111827",
        display: "flex"
      }}>
        <div style={{
          width: "10%",
          height: "100%",
          background: "#1E3A8A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around"
        }}>
          <div style={{
            fontSize: 22
          }}>
            Contactos
            <div>
              {contacts.length}📕
            </div>
          </div>
        </div>
        <div style={{
          width: "20%",
          height: "100%",
          border: "solid 1px yellow"
        }}> 
          <div style={{
            height: "10%",
            width: "100%",
            display: "flex",
          }}>
            <Filter handleChangeFavorite={handleChangeFavorite} />
            <ClearContact handleClearContact={handleClearContact} />
          </div>
          <div style={{
            height: "90%",
            width: "100%"
          }}>
            <ContactList contactsToShow={contactsToShow} onSelectContact={handleSelectContact} selectedContact={selectedCard} handleNextContact={handleNextContact} handlePreviousContact={handlePreviousContact}/>
          </div>
        </div>
        <div style={{
          width: "70%",
          height: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          // flexWrap: "wrap",
          border: "solid green 1px"
        }}>
          <Card card={selectedCard} toggleFavorite={toggleFavorite}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}