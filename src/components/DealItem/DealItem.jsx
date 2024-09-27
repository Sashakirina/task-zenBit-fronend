function DealItem({
	name,
	price,
	tiket,
	yieldValue,
	daysLeft,
	sold,
	imgUrl,
}) {
	return (
		<div>
			<img src={imgUrl} alt={name} />
			<div>
				<h4>{name}</h4>
				<div>
					<p>{price}</p>
					<p>Tiket - {tiket}</p>
					<p>Yield {yieldValue}</p>
					<p>days Left {daysLeft}</p>
					<p>Sold {sold}</p>
				</div>
			</div>
		</div>
	);
}

export default DealItem;
