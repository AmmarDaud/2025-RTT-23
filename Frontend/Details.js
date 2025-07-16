const params = new URLSearchParams(window.location.search);
const id = params.get('id');

function renderError(message) {
  document.body.innerHTML = `
    <div class="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <a href="/" class="text-blue-400 mb-4">&larr; Back to search</a>
      <h1 class="text-2xl">${message}</h1>
    </div>
  `;
}

if (!id) {
  renderError("No movie ID provided.");
  throw new Error('No ID provided');
}

(async () => {
  try {
    const res = await fetch(`/api/movies/${id}`);
    const data = await res.json();

    if (!data || data.Response === "False") {
      renderError("Failed to load details. Invalid movie ID.");
      return;
    }

    document.body.innerHTML = `
      <div class="container mx-auto p-4">
        <a href="/" class="text-blue-400">&larr; Back to search</a>
        <div class="flex flex-col md:flex-row gap-8 mt-6">
          <img src="${data.Poster !== "N/A" ? data.Poster : "/placeholder.png"}"
               alt="${data.Title}"
               class="w-full md:w-1/3 rounded"/>
          <div>
            <h2 class="text-2xl font-bold mb-2">${data.Title} (${data.Year})</h2>
            <p><strong>Genre:</strong> ${data.Genre}</p>
            <p><strong>Director:</strong> ${data.Director}</p>
            <p><strong>Plot:</strong> ${data.Plot}</p>
            <p><strong>IMDB Rating:</strong> ${data.imdbRating}</p>
          </div>
        </div>
      </div>
    `;
  } catch {
    renderError("Failed to load details. Server error.");
  }
})();