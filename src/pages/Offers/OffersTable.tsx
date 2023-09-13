
import { useState } from "react";
import { Offer, dataOffers } from "../../dataOffers/offers";
import { formatPrice } from "../../utlis/utlis";

enum SortDirection{
    asc ='a-z',
    desc= 'z-a'
}

function OffersTable() {
    const[ offers, setOffers] = useState<Array<Offer>>(dataOffers);
    const [search, setSearch] =useState<string>('');
    const [sort, setSort] =useState<SortDirection>(SortDirection.asc);

    
    
        function handleSort(value: string){
            const direction = value as SortDirection;
            setSort(direction);

            let result = [...dataOffers];
            if (direction === SortDirection.desc){
                result.sort((a, b) =>
                    a.location > b.location ? -1:
                        a.location < b.location ? 1: 0
                );

            }
            else {
                result.sort((a, b) =>
                    a.location < b.location ? -1:
                        a.location > b.location ? 1: 0
                );
            }

            setOffers(result);
        }

        function handleSearch(value: string){
            setSearch(value);

            const term =value.toLowerCase();
            let result = [...dataOffers];
             if (term.length > 0) {
                result = [...dataOffers].filter(offer =>
                    offer.location.toLowerCase().includes(term))
             }
             setOffers(result);
        }

    return ( 
        <>
            <h2 className="text-center my-4">
            <br />
            <small className="text-muted ">
                
            </small>
        </h2>
        <div className="d-flex px-4 my-5 bg-light">
                <input
                    value={search}
                    onChange={(e)=> handleSearch(e.target.value)}
                    type="text"
                    placeholder="חיפוש עיר"
                    className="form-control me-4" 
                    />
                
                <select 
                    className="form-select me-3"
                    value={sort}
                    onChange={(e)=> handleSort(e.target.value)}
                    >
                    <option value={SortDirection.asc}>סדר עולה</option>
                    <option value={SortDirection.desc}>סדר יורד</option>
                </select>
            </div>
            {
                offers.length === 0 &&
                <div className="text-danger m-5">
                        שגיאה : לא בוצעו הזמנות
                    </div>
            }

            {
                    offers.length > 0 &&
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th className="w-25 " >תאריך</th>
                                <th className="w-25  ">שם העיר</th>
                                <th className="w-25 ">המחיר המעודכן לספר</th>
                            </tr>
                        </thead>
                        <tbody>
                    
                        
                            {
                            offers.map((offer: Offer )=> 
                            <tr key={offer.id}>
                                <td>{offer.date}</td>
                                <td>{offer.location}</td>
                                <td>{formatPrice (offer.price)}</td>
                            </tr>
                            )
                            }
        
                        </tbody>
                    </table>
                    
                }

            
            
        </>
     );
}

export default OffersTable;