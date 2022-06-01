import About from "./components/About";
import { useState } from "react";
import "./App.scss";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
// List FA icons to be imported (fas for the entire font-awesome solid iconset)
// import { fas } from '@fortawesome/free-solid-svg-icons'

// Add FA icons to library to be used across any component
library.add(fab);

function App() {
	const [aboutIsShowing, setModalVisibility] = useState(false);

    const toggleModal = () => {
        setModalVisibility(aboutIsShowing => !aboutIsShowing);
		console.log(aboutIsShowing);
    }

	return (
		<>
			<button onClick={toggleModal} style={{position: "absolute", zIndex: "300"}}>hey</button>
			<About visible={aboutIsShowing} toggleFunction={toggleModal} />
		</>
	);
}

export default App;