import SearchBar from "../components/SearchBar"
import FoodList from "../components/FoodList"
import useFoodSearch from "../hooks/useFoodSearch"
import ErrorMessage from "../components/ErrorMessage"

function HomePage() {
  const { results, loading, error, searchFood } = useFoodSearch()

  return (
    <div>
      <SearchBar onSearch={searchFood} />

      {loading && <p>Loading...</p>}
      {error && <ErrorMessage message={error} />}

      {!loading && results.length === 0 && (
        <p>Search for a food above to see its nutrition info.</p>
      )}

      <FoodList products={results} />
    </div>
  )
}

export default HomePage