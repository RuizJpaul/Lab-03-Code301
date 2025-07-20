export default function Card({card, toggleFavorite}){
    return(
        <div style={{
            width: "30%",
            height: "70%",
            border: "solid 1px green"
        }}>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h2>Card</h2>
                <p>{card.name}</p>
                <p>{card.phone}</p>
                <p>{card.isFavorite ? "⭐" : "☠"}</p>
                <button onClick={() => toggleFavorite(card.id)}>{card.isFavorite ? "Quitar favorito" : "Agregar favorito"}</button>
            </div>
        </div>
    )
}