export const getProducts = (setError, setIsLoaded, setItems) => {
  fetch("https://api.example.com/items")
    .then(res => res.json())
    .then(
    (result) => {
      setIsLoaded(true);
      setItems(result);
    },
    (error) => {
      setIsLoaded(true);
      setError(error);
    }
  )
}