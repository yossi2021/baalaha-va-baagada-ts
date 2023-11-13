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
        <div className="d-flex align-items-center ">
                <div className="p-2 ">
                <button className="btn btn-light m-2"
                onClick={() => updateDisplay('grid')}>
                    
                    <i className="bi-grid-3x3-gap-fill"></i>
                </button>
                <button className="btn btn-light m-2"
                onClick={() => updateDisplay('list')}>
                <i className="bi-list-ul"></i>
                </button>
                </div>

                <div className=" text-center ms-3">
                    <label className="m-1">קטגוריות הספרים</label>
                    
                    <select 
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="form-select ms-5 text-end" 
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
                                className="form-select ms-5 text-end"
                            />


                    </div>
            </div>

     );
}

export default ButtonsBar;