export async function GET({ params, request }) {
	const response = await fetch("https://rickandmortyapi.com/api/character/20");
	const data = await response.json();
	data.timestamp = new Date().toISOString();

	return new Response(JSON.stringify(data), {
		headers: {
			"Netlify-CDN-Cache-Control":
				"public, durable, max-age=20, stale-while-revalidate=40",
		},
	});
}
