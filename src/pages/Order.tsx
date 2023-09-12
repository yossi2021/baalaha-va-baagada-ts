import { useState } from "react";
import { Offer, dataOffers } from "../dataOffers/offers";
import Joi from "joi";
import { toast } from "react-toastify";

function Offers() {
    const [vacation , setVacation] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [agree , setAgree ] = useState<boolean>(false);
    const [error, setError ] = useState<string>('');

    function handleSubmit(e: React.FormEvent){
        e.preventDefault(); //cancle the default action of the form to reload the page    }
   
        const schema = Joi.object().keys({
            vacation: Joi.string().required(),
            name: Joi.string().required().min(2),
            email: Joi.string().allow(null, '').optional().email({tlds:{
            allow: false } }),
            agree: Joi.boolean().required().equal(true)
        });

        const { error}= schema.validate({
            vacation,
            name,
            email,
            agree
        });

        if (error){
            setError(error.message);
            return;
        }

        setError('');

        toast.success(' success continue to checout');
        
    }

    return ( 
        <>
        
        
        <main className="text-end p-5">
            <h3 className="mb-3">בדוק האם יש בעיר הזו ספרים</h3>
            <h5>
            שלח בקשתך אלינו
            </h5>
            ונחזיר לך תשובה בהקדם על זמינות הספרים בעיר המבוקשת
            <p>
                
            </p>
            <p className="text-center">
            משלוח עד הבית בעלות 60 ₪ במייל:
            <a href="mailto:6410995@gmail.com" className="text-black">6410995@gmail.com</a>
            </p>

            <form 
                onSubmit={handleSubmit}
                className="needs-validation"
                >
                <div className="row g-3">
                    <div className="col-12">
                        <label className="form-label">
                            האם יש בעיר...
                            </label>
                        <select
                        name="vacation" 
                        className="form-select"
                        value={vacation}
                        onChange={(e) => setVacation(e.target.value)}                       
                        >
                            <option value="">...בחר בבקשה</option>

                        {

                            dataOffers.map((offer: Offer) => 
                            <option
                                key={offer.id}
                                value={offer.id}
                            >
                                {offer.location}
                            </option>
                    
                    )}
                            </select>
                    </div>
                            <div className="col-12">
                                <label className="form-label">
                                    שם
                                </label>
                                <input 
                                type ="text"
                                className="form-control"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="col-12">
                                <label className="form-label">
                                    כתובת מייל
                                    <span className="text-muted">(חובה)</span>
                                    </label>
                                    
                                <input 
                                type ="email"
                                className="form-control"
                                name="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="form-check mt-4">
                                <input type="checkbox"
                                className="form-check-input"
                                checked={agree}
                                onChange={() => setAgree(!agree)}

                                />
                                <label className="form-check-lable">
                                    אני מסכים  לתנאים
                                </label>
                            </div>
                            <button className="w-100 btn btn-primary btn-lg mt-4"
                            type='submit'
                            >
                                המשך לאישור 
                            </button>

                            {
                                error &&
                            <div className=" text-danger">
                                {error}
                            </div>
                            }

                    </div>
            </form>
        </main>

        

        <footer>
        <div >
          <p className="text-center text-white bg-secondary">
        כל הזכויות שמורות ליוסף בללי בניית אתרים בע"מ
          </p>
        </div>
    </footer>

                                </>
            );
            }

            export default Offers;
