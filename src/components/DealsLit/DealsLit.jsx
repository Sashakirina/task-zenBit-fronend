import { useSelector } from "react-redux";
import { selectDeals } from "../../redux/deals/selectors";
import DealItem from "../DealItem/DealItem.jsx";

function DealsList() {
	const deals = useSelector(selectDeals);
	console.log(deals);

	return (
		<ul>
			{deals.map(
				({
					id,
					name,
					price,
					tiket,
					yield: yieldValue,
					daysLeft,
					sold,
					imgUrl,
				}) => (
					<DealItem
						key={id}
						name={name}
						price={price}
						id={id}
						tiket={tiket}
						yield={yieldValue}
						daysLeft={daysLeft}
						sold={sold}
						imgUrl={imgUrl}
					/>
				)
			)}
		</ul>
	);
}

export default DealsList;
