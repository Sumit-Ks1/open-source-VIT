import searching from './searchbar.module.css'
import { FaSearch } from "react-icons/fa"
export default function Searchbar() {
  return (
    <div className={searching.searchContainer}>
      <input placeholder='Search Open Source ....' />
      <FaSearch id={searching.clicksearch}/>
    </div>
  )
}