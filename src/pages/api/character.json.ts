export async function GET({ params, request }) {
	const response = await fetch("https://rickandmortyapi.com/api/character/20");
	const data = await response.json();
	data.timestamp = new Date().toISOString();

	return new Response(JSON.stringify(data));
}
