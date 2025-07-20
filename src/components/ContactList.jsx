export default function ContactList({contactsToShow, onSelectContact}){
    return (
        <div style={{
          width: "100%",
          height: "10%",
          display: "flex",
          gap: 20,
          justifyContent: "center"
        }}>
          {contactsToShow.map((contact) => (
            <div key={contact.id}>
              <button 
              onClick={() => {
                onSelectContact(contact);
              }}
              style={{
                background: "#1A73E8",
                border: "none",
                padding: "10px 12px",
                color: "#fff",
                borderRadius: 8
                }}>
                  Contacto {contact.id}</button>
            </div>
          ))}
        </div>
    )
}