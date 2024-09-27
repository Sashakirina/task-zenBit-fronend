import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu.jsx";
import AuthNav from "../AuthNav/AuthNav.jsx";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";

function AppBar() {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return (
		<div>
			<div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
		</div>
	);
}

export default AppBar;
