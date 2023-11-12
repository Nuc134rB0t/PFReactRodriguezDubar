// Todo: corregir nombres de variables

import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { cart, vaciarCart, total, cantidadTotal } = useContext(CartContext);

    //Funciones y validaciones: 

    const manejadorFormulario = (event) => {
        event.preventDefault();


        //Verificamos que los campos esten completos: 
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Debe completar los datos.");
            return;
        }

        //Validamos que los campos del email coincidan 
        if (email !== emailConfirmacion) {
            setError("E-mail no coincide");
            return;
        }

        //Paso 1: Creamos un objeto con todos los datos de la orden de compra. 

        const orden = {
            items: cart.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.description,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        //Vamos a modificar el código para que ejecute varias promesas en parelelo, por un lado que actualice el stock de productos y por otro que genere una orden de compra. Promise.All me permite esto. 

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "ReactPFRodriguezDubar", productoOrden.id);
                //Por cada producto en la coleccion inventario obtengo una referencia, y a partir de esa referencia obtengo el doc. 
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                //Data es un método que me permite acceder a la información del documento. 
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                })
                //Modifico el stock y subo la información actualizada. 
            })
        )
            .then(() => {
                //Guardamos la orden en la base de datos: 
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        vaciarCart();
                    })
                    .catch((error) => {
                        console.log("Algo anda mal.", error);
                        setError("Error al crear la orden, por favor vuelva a intentarlo.");
                    });
            })
            .catch((error) => {
                console.log("No se puede actualizar el stock.", error);
                setError("No se puede actualizar el stock.");
            })

    }

    return (
        <div class="card border-secondary mb-3">
            <div className="card-body text-secondary">
            <h2> Checkout </h2>
            <form onSubmit={manejadorFormulario}>
                {
                    cart.map(producto => (
                        <div key={producto.item.id}>
                            <p> {producto.item.description} x  {producto.cantidad} </p>
                            <p> {producto.item.price} USD </p>
                            <hr />

                        </div>
                    ))
                }
                <strong>Cantidad Total: {cantidadTotal} </strong>
                <hr />

                <div className="form-group">
                    <label htmlFor=""> Nombre </label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Apellido </label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Telefono </label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Email </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Email Confirmación </label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <button className="btn btn-success" type="submit"> Finalizar Compra </button>
            </form>
            {
                ordenId && (
                    <strong>¡Gracias por tu compra! Tu número de orden es {ordenId} </strong>
                )
            }
            </div>
        </div>
    )
}

export default Checkout