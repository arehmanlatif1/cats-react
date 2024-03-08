import { useState, useEffect} from 'react';
import { getCats } from "../services/cats.js";


function Cats() {
    const [cats, setCats] = useState([])

    async function fetchCats() {
        const allCats = await getCats()
        setCats(allCats)
        }

    useEffect(() => {
        fetchCats()
    }, [])
  return (
    <div>Cats</div>
  )
}

export default Cats