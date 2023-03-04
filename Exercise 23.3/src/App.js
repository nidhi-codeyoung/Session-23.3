import React from "react";

const personality = ["Swami Viveknanda", "Rani Laxmibai", "A.P.J Kalam ",
			  "Narendra Modi", "Mother Teresa"];
			  
const pList = personality.map((personality) =>
			<li key={personality.toString()}>{personality}</li>
		);

export default function Description() {
	return <>
    <h2>The Names of my Ideal Personalities:</h2>
    <ol>{pList}</ol>
    </>
    
}