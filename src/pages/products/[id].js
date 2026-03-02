import Head from "next/head";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/components/Card";
import Header from "@/components/Header"


const apiUrl= "https://fakestoreapi.com";
const productsEndpoint = "products";

export default function ProductsPage() {

	const router = useRouter();
	const { id } = router.query;

	const [product, setProduct] = useState(null); 

	console.log("Qui dovrei recuperare i dati dall'api /products/id ");

	useEffect(() => {
		if (!router.isReady) return;

		axios
		.get(`${apiUrl}/${productsEndpoint}/${id}`)
		.then(res => setProduct(res.data))
		.catch(err => console.log(err.message));
	}, [id, router.isReady]);

	if (!router.isReady || !product) {
		return (
		<>
			<Header />
			<div style={{ padding: "20px" }}>Caricamento prodotto...</div>
		</>
		);
	}

	return (
		<>
		<Header />
		<Head>
			<title>{product.title}</title>
			<meta name="description" content={product.description} />
		</Head>

		<div style={{ padding: "20px" }}>
			<Card
			key={product.id}
			title={product.title}
			price={product.price}
			description={product.description}
			category={product.category}
			rating={product.rating?.rate ? [product.rating.rate] : []}
			image={product.image}
			/>
		</div>
		</>
	);

}
