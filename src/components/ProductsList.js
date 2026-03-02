import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import { useBudget } from "@/contexts/BudgetContext";

const apiUrl= "https://fakestoreapi.com";
const productsEndpoint = "products";

export default function ProductsList() {
   const [products, setProducts] = useState([]); 

   //Caso di boolean: budgetMode = true => mostra solo prodotti <= 50, altrimenti mostra tutti
   //const { budgetMode, setBudgetMode } = useBudget();

   // Caso di numero: maxPrice = 50 => mostra solo prodotti <= 50, altrimenti mostra tutti
   const { maxPrice, setMaxPrice } = useBudget();


    function clearDati() {
		setProducts([]);
	}

	function getDati() { 
        axios.get(`${apiUrl}/${productsEndpoint}`).then(r => {
			console.log("Risposta", r.data);

            const data = r.data; //dati del server per come li incapsula axios
            setProducts(data);
        
		}).catch(e => {
			console.log("Errore", e.message)
		});
    }
    
    useEffect(getDati, []);

    //Caso di boolean: budgetMode = true => mostra solo prodotti <= 50, altrimenti mostra tutti
    // const displayedProducts = budgetMode
    // ? products.filter((product) => product.price <= 50)
    // : products;


     // Caso di numero: maxPrice = 50 => mostra solo prodotti <= 50, altrimenti mostra tutti
    const displayedProducts =
        maxPrice !== null
        ? products.filter((product) => product.price <= maxPrice)
        : products;


    //Caso di boolean: budgetMode = true => mostra solo prodotti <= 50, altrimenti mostra tutti: Toggle della modalità budget
    //const toggleBudgetMode = () => setBudgetMode(prev => !prev);

    return <div className="componente">
        <button onClick={clearDati}>Svuota</button>
        <br></br>
		<button onClick={() => getDati()}>Products</button>
        <br></br>
        {/* Caso di numero: maxPrice = 50 => mostra solo prodotti <= 50, altrimenti mostra tutti */}
       <label>
          Prezzo massimo:
          <input
            type="number"
            min="0"
            placeholder="Es. 30, 50..."
            value={maxPrice ?? ""}
            onChange={(e) =>
              setMaxPrice(e.target.value ? Number(e.target.value) : null)
            }
            style={{ marginLeft: "10px" }}
          />
        </label>
        
        {/* Caso di boolean: budgetMode = true => mostra solo prodotti <= 50, altrimenti mostra tutti */}
        {/* <div className="products-navbar" style={{ marginBottom: "20px" }}>
            <h2>Prodotti</h2>
            <button onClick={toggleBudgetMode}>
            {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
            </button>
        </div> */}


		<div className="products-list">
			{displayedProducts.map(product =>
				<Card key={product.id} 
                    title={product.title} 
                    price={product.price} 
                    description={product.description} 
                    category={product.category} 
                    rating={product.rating?.rate ? [product.rating.rate] : []}
                    image={product.image} 
                />
			)}
		</div>
	</div>
}