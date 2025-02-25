import React, {useState} from 'react';
import ProductCard from "../components/products/ProductCard";
import {useParams} from "react-router-dom";
import Navbar from "../components/Navbar";

const ProductList = () => {

	const [basket, setBasket] = useState([]);

	const products = [
		{
			name: 'Netikrožė',
			description: 'Netikrožė buvo pirmasis augalas, kuris atsirado robotų soduose, nes ji niekada nepraranda žiedų. Kiekvienas, matydamas ją, negalėjo patikėti, kad ji niekada neišblunka.',
			price: 311.20,
			discount: 105.38,
			image: '/hardcodedProducts/firstProduct.png',
			category: 'Plants',
		},
		{
			name: 'Plastalapis',
			description: 'Plastalapis tapo mėgstamiausiu augalu tarp vaikų, nes jis buvo toks lengvas, kad net vėjo gūsiai jo nenunešdavo. Nepaisant to, kad jis neaugdavo, visada turėjo tobulus, švelnius lapus.',
			price: 144.85,
			discount: 0,
			image: '/hardcodedProducts/secondProduct.png',
			category: 'Plants',
		},
		{
			name: 'Feikmedis',
			description: 'Feikmedis augo mieste, kuriame niekas nesirūpino tikrais medžiais, todėl jis buvo mylimas už savo pastovumą ir žalią spalvą. Jis niekada neprarado lapų, net ir šaltuoju metų laiku.',
			price: 215.66,
			discount: 38.52,
			image: '/hardcodedProducts/thirdProduct.png',
			category: 'Plants',
		},
		{
			name: 'Sintetukas',
			description: 'Sintetukas – tai augalas, kuris sugebėjo įkvėpti naują gyvenimą dirbtiniuose soduose, nes jo lapai niekada nesusiraukšlėjo. Žmonės dažnai stebėjosi, kaip jis sugeba išlaikyti savo tobulą formą be jokios priežiūros.',
			price: 32.88,
			discount: 0,
			image: '/hardcodedProducts/fourthProduct.png',
			category: 'Plants',
		},
		{
			name: 'Nevystutis',
			description: 'Nevystutis buvo žinomas dėl savo neįtikėtino sugebėjimo niekada nepasenti. Jo žiedai visada išliko švieži ir gyvybingi, todėl jis tapo visų mėgstamiausiu dirbtiniu augalu.',
			price: 401.11,
			discount: 111.94,
			image: '/hardcodedProducts/fifthProduct.png',
			category: 'Plants',
		},
		{
			name: 'Žaliuoklis',
			description: 'Žaliuoklis buvo pirmasis dirbtinis augalas, kuris sugebėjo puikiai atitikti tikrų augalų žalią atspalvį, todėl niekas nesugebėjo jo atskirti nuo gyvo. Netikėtai jis tapo populiariausiu biurų augalu, nes niekada neprarado savo žavesio',
			price: 205.82,
			discount: 0,
			image: '/hardcodedProducts/sixthProduct.png',
			category: 'Plants',
		}
	]

	const { category } = useParams();
	const filteredProducts = products.filter(product => product.category === category)

	const addToBasket = () => {
		setBasket([...basket, product])
	}

	return (
		<>
			<div className='grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				{filteredProducts.length > 0 ? (
					filteredProducts.map((product, index) => (
						<ProductCard key={index} product={product} addToBasket={addToBasket} />
					))
				) : (
					<p>Produktu nerasta</p>
				)}
			</div>

		</>
	);
};

export default ProductList;