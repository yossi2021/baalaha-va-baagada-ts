import { useState } from "react";
import { Offer, dataOffers } from "../dataOffers/offers";
import Joi from "joi";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import BigPic from "../components/BigPic";
import Title from "../components/Title";

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
        
        <BigPic/>
        <main className="text-end p-3">
            <Title content="בדוק  באיזו עיר יש את הספרים הרצויים"/>
            <h4 className="">
            שלח בקשתך אלינו ונחזיר לך תשובה בהקדם על זמינות הספרים בעיר המבוקשת
            </h4>
           
            <p className="text-end ">
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

                    <div className="text-end m-2">
                        <h2 className="p-2"> היכן אפשר להשיג את החוברות?</h2>
                        <h5 className="p-2">לבקשת רבים, ריכזנו את הטלפונים של אנשי הקשר שדרכם ניתן לרכוש את החוברות ברחבי הארץ בחלוקה לפי איזורים. הרשימה מסודרת על פי שמות הישובים בסדר א-ב:</h5>
                        אופקים: 054-8433308

אור יהודה: 050-3387587

אור עקיבא: 0523-934439

אזור: 0507-555810

אילת: 052-5257266

אלעד: *054-8422891

       *050-2211132

אריאל: 052-3066012

אשדוד: *052-7667048

         * 054-8580584

אשקלון: 052-7689873,

         08-6722103

באר שבע: *054-8447230

           * 054-8508067

בית שאן: 052-7183329

בית שמש: 0528-985558,

            02-9995076

ביתר עילית: 054-8437294 (A) 

בני ברק: *0504-174567 [18:00-20:00]

   *054-8494964, 054-8517294

  *054-8438347 * 052-7616868 

  *052-7646027 [פרדס כץ]

בת ים: *054-2491168

        *054-5847762

גדרה: 054-7429955

גן יבנה: 052-4315009,

         052-5454211

דימונה: 054-8427237

הרצליה: 052-8046337

זכרון יעקב: 052-7129661

חדרה: 052-7117668

חולון: * 050-5559595  

   *054-8499504, 058-3262447

  * 052-7101791

חיפה: * 052-7657756

       * 052-7184820

חצור: 054-8462601

חריש: 052-7161207

חשמונאים: 058-7737616

טבריה: *0508-361166

         * 052-9256124

טירת הכרמל: 0522-753310

טלזסטון: 055-6707676

יבנה: *052-7129739

      *08-6757677

יד בנימין: 052-5277260  

יהוד: 053-4158435,

       052-7010722.

יקנעם: 054-3320744

ירוחם: 052-7115988

ירושלים: *0502290082 שמואל הנביא

  * 0548573908 רמות

  * 054-8417188 רמת שלמה

  * 058-3251274,

    052-7176887 הר שמואל – רמות

  *052-7114363 בית וגן

  *02-5827008 סנהדריה

  *058-6680000, 02-6542292 הר נוף

   *0583217945 גבעת שאול

  * 054-6726721 הר חומה

  *0506-518504 ארמון הנציב

  *0545-810328 גילה

  *077-3396020 ק. יובל

  *052-7141907 פסגת זאב

  *053-2476758 גבעת מרדכי

כוכב יעקב: 054-2561977

כפר סבא: 052-7671730

כרמיאל: 052-5705148

לוד: 0504-107540

מבשרת ציון: 052-6111881

מגדל העמק: 0506-830791

מודיעין: 058-3278597,

         08-9725742

מצפה רמון: 052-4619144

נהריה: 053-4322936

נתיבות: * 052-5326090 

  * 077-5504905, 05271-53938


נתניה: *052-6473598

        *0527-632800

        *052-8281272

עכו: 055-6700579 052-4317340

עפולה: 054-5288797

ערד: 052-7651580

עתלית: 054-8590068,

         0546-303926

פתח תקוה: *0527603435

   *054-3346241, 054-8439076          

צפת: 0504-121786

קיסריה: 052-7644622

קריות: 0504-102069,

        04-8492473

קרית אתא: 054-2399998

קרית גת: * 052-4830879

           * 0533-126950

קרית מלאכי: *052-7150358

  * 052-4315009, 052-5454211

קרית ספר: 0504-172416

קרית שמונה: 05271-92976

ראש העין: *0545-250370

            *054-2260186

ראשל”צ: *0503332293 

          *055-6771727

          *0533-000093

          *05484-98449

רחובות: *052-7153567

 *054-7429955 *052-6575529

רעננה: 054-7444103

רכסים: *054-8408840,

          077-3005038

רמלה: 052-7101791

רמת הגולן: 053-6203733

שדרות: 053-3131382

תל אביב: *052-7101791

           * 052-7661162
                    </div>
            </form>
        </main>

        

        <Footer/>

                                </>
            );
            }

            export default Offers;
