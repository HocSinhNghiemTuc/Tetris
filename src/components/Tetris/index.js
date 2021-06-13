import React, { useState } from "react";

import StartPage from "../StartPage";
import Game from "../Game";

const Tetris = ({current_user, setUser}) => {
	const [runing, setRuning] = useState(false);
	return runing ? (
		<Game stopClick={() => setRuning(false)} current_user={current_user} setUser={setUser} setRuning={setRuning}/>
	) : (
		<StartPage startClick={() => setRuning(true)} />
	);
};

export default Tetris;
