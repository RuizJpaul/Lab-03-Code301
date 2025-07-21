export default function Card({ card, toggleFavorite }) {
    return (
        <div style={{
            width: "30%",
            height: "70%",
            background: "#334155",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            {
                card ? (
                    <>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <h2>Contacto #{card.id}</h2>    
                            <p>{card.name}</p>
                            <p>{card.phone}</p>
                            <p>{card.isFavorite ? "⭐" : "🔵"}</p>
                            <button onClick={() => toggleFavorite(card.id)} style={{
                                padding: "5px 15px",
                                border: "none",
                                borderRadius: 8,
                            }}>{card.isFavorite ? "Quitar favorito" : "Agregar favorito"}</button>
                        </div>
                    </>
                ) : <p>No hay un contacto seleccionado</p>
            }
        </div>
    )
}