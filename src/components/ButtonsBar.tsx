import { Categories } from "../pages/Home/types";

interface Props{
    updateDisplay: Function;
    selectedCategory: Categories;
    handleCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    search :string;
    handleSearch: Function;
}

function ButtonsBar({
    updateDisplay,
    selectedCategory,
    handleCategoryChange,
    search ,
    handleSearch
}: Props) {
    const categories = Object.values(Categories);

    return ( 
        <div className="d-flex px-5 ">
                <div>
                <button className="btn btn-light mx-1"
                onClick={() => updateDisplay('grid')}>
                    
                    <i className="bi-grid-3x3-gap-fill"></i>
                </button>
                <button className="btn btn-light"
                onClick={() => updateDisplay('list')}>
                <i className="bi-list-ul"></i>
                </button>
                </div>

                <div className="d-flex alig-items-center">
                    <label >קטגוריות הספרים</label>
                    
                    <select 
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="form-select" 
                    >
                        {
                                categories.map(category =>
                                    <option
                                    key={category}
                                    value={category}
                                    >
                                        {category}
                                    </option>
                                    )
                        }
                    </select>

                            <input 
                            value={search} 
                            onChange={(e) => handleSearch(e)}
                                placeholder="חיפוש"
                                className="form-select ms-3"
                            />


                    </div>
            </div>

     );
}

export default ButtonsBar;