
const search = () => {
    const [searchInput, setSearchInput] = useState("");
    
    return (

        <div>
            <input 
                type='search'
                placeholder='Search Here'
                onChange={handleChange}
                value={searchInput} 
            />

        </div>

    )
}

export default search;