export default function Card(props) {

	const title = props.title;
    const price = props.price;
    const description = props.description;
    const category = props.category;
    const rating = props.rating || [];
	const image = props.image;

	return (
        <div className="card">
            <ul>
                <li className="card-title">Name: {title}</li>
                <li className="card-price">Price: {price}</li>
                <li className="card-description">Description: {description}</li>
                <li className="card-category">Category: {category}</li>
                <li className="card-known_for">
					Rating:
					<ul>
						{rating.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</li>
            </ul>
            <img className="card-image" src={image} />
	</div>
    )
}


