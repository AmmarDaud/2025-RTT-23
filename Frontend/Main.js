const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const movieList = document.getElementById("movieList");

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = searchInput.value.trim();
  if (!title) return;

  window.history.pushState({}, "", `/?title=${encodeURIComponent(title)}`);

  movieList.innerHTML = '<p class="text-center mt-4">Loading...</p>';

  try {
    const res = await fetch(`/api/search?title=${encodeURIComponent(title)}`);
    const data = await res.json();

    if (!data.Search) {
      movieList.innerHTML =
        '<p class="text-red-400 text-center mt-4">No movies found.</p>';
      return;
    }

    movieList.innerHTML = data.Search.map(
      (movie) => `
      <a href="/details.html?id=${movie.imdbID}" class="block">
        <div class="bg-gray-800 p-3 rounded hover:bg-gray-700">
          <img src="${
            movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"
          }"
               alt="${movie.Title}"
               class="w-full h-64 object-cover rounded mb-2"/>
          <h3 class="text-lg font-semibold">${movie.Title}</h3>
          <p class="text-gray-400">${movie.Year}</p>
        </div>
      </a>
    `
    ).join("");
  } catch {
    movieList.innerHTML =
      '<p class="text-red-400 text-center mt-4">Failed to fetch movies.</p>';
  }
});
