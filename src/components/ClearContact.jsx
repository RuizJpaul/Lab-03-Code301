export default function ClearContact({handleClearContact}) {
    return (
        <section style={{
            width: "50%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
          <button onClick={handleClearContact} style={{
            width: "50%",
            height: "50%",
            background: "gray",
            border: "none",
            color: "white"
          }}>Limpiar</button>
        </section>
    )
}