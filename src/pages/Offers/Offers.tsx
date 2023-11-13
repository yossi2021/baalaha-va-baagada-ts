import BigPic from "../../components/BigPic";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import OffersTable from "./OffersTable";


;

function Order() {
    return (  
        <>
        <BigPic/>
        <main className="text-end p-3">
        <Title content="הספרים והמבצעים שלנו"/>
        
        
        <div className="text-center ">
            <p>
                עלות ספר היא 10 ש"ח, בערים מסויימות יש מבצעים והנחות
            </p>
            <p>
                מי שרוכש 100 ספרים מקבל הנחה של 100 ש"ח,   עלות סדרה ספרים עולה 230 ש"ח
            </p>
            <p>
                בתחתית העמוד ניתן לבדוק את תאריך המבצע ובאיזו עיר המבצע זמין
            </p>
        </div>

        {/* <OffersTable /> */}
        
        <div className="grid ">
        {/* <div className="row  row-cols-1 row-cols-md-2  g-4 text-center rounded-2 ms-auto p-1 row-cols-sm-2 row-cols-lg-3  "> */}
            
        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/sukotfront-copy.jpg" className="card-img-top" alt="חג סוכות"/>
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://mail-attachment.googleusercontent.com/attachment/u/1/?ui=2&ik=b5464c0ab8&attid=0.1&permmsgid=msg-a:r2642368515821649237&th=18b9122364641129&view=att&disp=inline&realattid=f_lohh6es50&saddbat=ANGjdJ9xsucd3ayErgGFvPn96Vv1Hb867FVoo2vrS7ieY1mntDjlYcuVJKJgOOAeNX4kiIcRxF5EmdNoSGSRc4hj1tXDp-l68f2GZsF1HD3y63aMPL5HRa3tSSDH4hM0wlOLOnoZLe_dcPp2uEVc4W0HH81-bEPVeHa8nUAUBNqBiSFQ-gRyDPUFDqywxrRh6wrpWl-gSuh3CvEB20_mHEppX-7qyKn0CQlsXmy85mWUvaR8TGYuRqsd9v4AShGgrPqESydM_WHzPhJSddUnOvWoP81GDeEBuGCQ6qD39UBnhk4mXEtJnEn8wR5RG28C1-16KyqmBa7M_IQq4WMyJN8__0Q2Gd5lLWGf3Zi-7fSyXWc8wJqwAbAVSIM3FG5WmulHUaFgCtIbkT0ztAw0SRji1s_MjMTSyrhO9xr-ZUMtG5cgVVWJyPbpOMF25wnps0J461BgJy3lEcdzV7InscP_trJgyMsKeaOnE4YXYOBtcVzGQtMe-cJn-HZ2Fg9ATHQiJDerZ9sshojbMx56qFg-fvPXgoV013uQNcyWMFyVTIiKN_bExOSfP-yV6vXEaOq0N_KInKvyYzSnDc4xmKRNvkA7BLwfg6fynYtB8HDofkflPBlN6C4rDBkHZUP9__IaiZY3X3RhQexr45U5qcXkscoHooJa5vgvjSs-wkTc5TSX1IXrKEpXQwbQVC1s5PAtRY_UBDXHVM5u0SQA3aq2o8kDGSw4_5-Pt02GUhKjZKuKGsyE_hitYjbWXjHiqNcir19V_SSV7Ho8mKpKxAjIF-y09j4y9HiH5icgk3ao0_Rja3C1x-S1GjEBpBTE7qtfMiQjdazvRw6715cg0Mv83T84RuCLko8YaHCNKLBtrL5Q8g9Ugouz6ELqY9xKZi_ze2SNhHoG2LxABXNQYpNGmEIDUGsxEGS_3C9Ga5E_S5uWPptQ1jZbb6woet469zyN5oiDz7mwTCVlSAwMS2y6JYV9XiR5-g0Kx9o9R3nH3XvPPDBH4tMaChLLTol7RsOaiekEiYWZ9TmmizEejquzTCRfhueGP1sBrMUy8Q" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/mitzvataaratzfront-copy.jpg" alt="מצוות הארץ" className="card-img-top" />
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://mail-attachment.googleusercontent.com/attachment/u/1/?ui=2&ik=b5464c0ab8&attid=0.1&permmsgid=msg-a:r-9088340784491922810&th=18b91d3041edd3c0&view=att&disp=inline&realattid=f_loho2zsm0&saddbat=ANGjdJ-O0vHeO1bWF9Gi-v9G99OhU9ytILlWqqjlQqHijbJlsyiPJ9jBNqhrfSD0KGVjlAtrJ0CDO3Aw-_LXYfJ9GxvfNpWNDxKg1FUc2DEx48xwU86ldKxHQGtuUh-ixcIO68-muX5bKVhynASDNfdhdlkFviTkAbs4FDig4_jjRp9MztRoQS9tM7iXj7CkLlQfRlZL2kwdGp-hQOeA9gkd2O8ZHRAk8opbaSbIKMYgNfh0TTvdHtOgUlpe9FjBi_9mO3J2EpAC1THyZpRqyPuKOxpZTZoCL_GpVnGWBzEoZxrYPrRYqAJG0K_7UncJWAmUugqp7OBh4RXJBPfd3QrTM6r5Bk9QApgWMUhI678z9_ngi2qiNar0X7uNMHETOu-DuVztXYfPdF8kDrXwFtF6mLDn7ov_EQGGeacoiXjgTPIAhiR8mz-gWP5P7dw6rNOhy7JfRMcyGhW05sfGmOH1MgGosArYbP9YmHQG0AlauJSkJRASI6KNK_qjt3gC_T6odHJP1wssunY15cRhI5iBgr4zuGgbAjqpGbSN3UMtBfRa8kFsi9XEbnVWzkhJvOUHkTMCL443-LBOVrg-GxvueTrIihLvuwuc9KeASLfBF8l99-ZxEQVNV17z-5yn5aULOLYXuWJ_dtEF9QMcHNyUydHlzwRbVYXO2xnyUgydfLjIA8VutzLR2M_2V7BjomMpTw_afHutWI-Q6B2zPSwDhDGOMlSwIYNf4EdWoLmViHqU9posya_N93d90cRvu2JPEIUPPUogBzNRFm0cKBHYyNdOWVy1pjKg8npozmhDIHrGlICHLRvxSHufjpXwiaczbhNiTyjwE1E7dECyIoX6Y4HSik_NJxibEpcD764aRnNjXMMk-BJdzvocm1Q9hyP-0xqcYtHrk0jJhl9BdboHV2mIV47LnOHtDGCEcp1h-XbFhFSFAiHvLY0NRvhI5IQDngE35HLVYY0nD5ESwY3QWjSFcO1prjqFmwmhXU5SP8V7yI2xo4kC0D8vPbWmsFfAN_Gs2R4PkC8x5twQOf-_eVAnaEe5jF-ZffdBrw" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/rushhodeshfront-copy.jpg" className="card-img-top" alt="ראש חודש"/> 
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://mail-attachment.googleusercontent.com/attachment/u/1/?ui=2&ik=b5464c0ab8&attid=0.1&permmsgid=msg-a:r-2615208882497483309&th=18b91d3960e4152e&view=att&disp=inline&saddbat=ANGjdJ8klM1TRDBUYnigN6C0M9ahVHigwmPYleuUah8o92GDJ3ppJ5dtp-tsIZ8Pd-iGV6Qisu3AhyTMaTFtzUq2RcHLBTssD8pduj0ZNciq8ja_U0VcXf43ccOKlcmwRLBZqodVn5BdgzJ4pzAWe1Ln2ZA-RLTsgTbudXhZmmtP8lmEaIOVIFXJhoC0Ac6s_Insc0MhAFRGxW-ibmz9I-rv5WGtR7eO3SJYB2gEA_c2lHx9vuPdgn_0lvn9MjeUlx2dEXjburP75D1IEaiFlShl91K0yalt5X05DrR_6m3IIefgp9nff8twSXyZe4FdN9XQNjMV_aCCe9rS92qfanbeQpTIm7ERmFFnP1dsPz0tvB937BlI7UCWHT1GImpSv-2FJJ5YKfGdisdnDs_BxY-e9vLBdb4zZtqPhqeWMW4N4fjOopMzlEHaBe8BsSpyeZRq0RLap1av9jGdgzwZUp1_gjulas946-HUeooQbLCk4oklRYhAspdeo0HuYYNOrMBZDOAKm4T6bKUQqOOah0Iqefl7NaL04xG4H8rTLVQOrTNFK_bhKZBbjpnwpaJ7slAqKtmxxSWfkMW9NHMTT-F917DxO1IlazHJDK1bXH9kkqnp6FXl6IeIkHT22PBeoS3AiKlNmDyw7ttCkII3E2t2Hg69WJ5izl_tLEKIEg9fqSNjN9-97Kiyh6iRZRmgD56CHDWLYxjUqI6LtdSGj0PLKTyT3srsyLKjUPtCv2FpwJXRzmUsBANTfbBcn3EbRqt9lGqPOpGhApYsAmtyhCbqsE5EqBsuvl3xtdxIOWSY9uDISZfFEdy2FWFwFzXQ6zBgZFH5-yOPu0O-vndQqMOZOxFJm23UuwbZ_zOQVVkqc5ZIUzh0Eo6NREzJqV3szU70gpQ1OuMYPzWyCAHE8hb-hAJ087fQAdMvg04CosiXhCB-5ZS-4NViyKGAPma4vN3DQR2JeKCyMN0--OdH7eLvVFNHf15UqksC-4p2OWYMwJveqNItxT-MNjgHbJss851DEOGWVDbJscbOq8tQ55tH0RB5dt9osvfkT9fvXg" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/kibutfront-copy.jpg" alt="כיבוד אב ואם" className="card-img-top" />
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://mail-attachment.googleusercontent.com/attachment/u/1/?ui=2&ik=b5464c0ab8&attid=0.1&permmsgid=msg-a:r7439578070766263680&th=18b91d45ac353811&view=att&disp=inline&realattid=f_loho4wxw0&saddbat=ANGjdJ_qjWeLwupIyKOot7y65FY7mC60mJzx1Ew8_gDfRgss7eE0fFoWtd5_kS8mNG9FXimZTso-n_xcFXHFhkiEosXzXBUh5qs6JJIO_rdVp33KCyJF1KNH_HbueXMYuEKHzXjPtvuiN25qAyW7YaaAkVKBnRp1Rqk4BWeXayM5zbspEooODXDx34_ewk7iws7E-JEutkzT3lbpaLanYdMoGIQQvWyAS2Va3OWJQn943nYTt3bLbgSZNNvfnQHT7-x0bKTEBIe5s4x9wGsVOgdyCphtEZeFrZJSIMXtFILjLZnvz1w2a7l-SbeoBRcNq7U0PxKnr011xj3CYtrAO7Dne9_FGN85pOloRq8lcScq7qNWDAQbVoP3e1UzjMbdUnNUJ3EfLVBi-aIJm0k_KsUiXX8_uFgh9HItEzPT0l0rmQu00rDrfaLXyBospa9V6seVUN0jP-hvs9NaJKlav1kGzCgXv44bn6NbHImP0Nmq1IECBJSCdZh3tFG6etPn44lBWB2N6IQFXt4-0T0NQ7eG5S_J-6nUfJ5Tgj3pFXA_qD7txRdXrWarMcAO3Y6dR3vR8LDDYgQ96WdGOvrUfwjO5sigc55Z1tNjRFJrHapN6rXtKbeN56wSNAVa1EG8c_x2hB2_PLe5uc6bWgtY1fgFv_IU6cDP9irBJ_3x7Qh-rjhcEz54YWwOSsFSXSdAs_Z8LBMtSJ62IXxAUfQSpAIlNVFAnhP1nQzpCh9ApkPJxw96xHpsECKralgoYkNVjklTMqYRbpV_VYx_DP_3Hx2IgqJR0nv_DxyC4jmf2E14wVX30PJ-dVgsMZYyXMjkvzbzWk_OPDGaiZGEv1dcO6Ou_gRxYjuODSXMER6mkGAq_kgX9WfwxF-vSRzPh2IOVhLMb14Sd3RoxxNoAWjs9-_yZMzCXSG3xbSUiGmRYprLqWTNlJ_OL4i4jM8OJF96fYQU8IJn_TO_Mhhf30yw9zV6UEfbJjga9XphCJNXV0_qgnMztDiNT2-4GzpUI85c8kQTTqLshZnDrxcEZgS0ICxdzzbeMm_-5kPAEm4SiA" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/nisuinfront-copy.jpg" alt="הנישואין" className="card-img-top" />
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://mail-attachment.googleusercontent.com/attachment/u/1/?ui=2&ik=b5464c0ab8&attid=0.1&permmsgid=msg-a:r7470821327307475871&th=18b91d4de347f56c&view=att&disp=inline&realattid=f_loho5li70&saddbat=ANGjdJ9zKkqbNE6M9uEeV4WmRcgfyJ04k0r6SmMhAQrpW8WRRxK4BmA_XbJOCW4ltnj9X3g9TXy5zmvvc7xi5iBTH0eJzi_rMyNd3_QA3jnGPMZ0OQsfxD3phtkJ6P3BZvkr02aToyJLVN5ao8Hq5cDlqoJxA5mQftcDb_BGiyMbazM-1RIdjVReKGRRV9HNW13_umOp2TbRxlUcR-lBEtHITxcY025FSj8ldRM0XBaflqwh7FLK2_Zm60TPw33OgZdTch7gIyvNfThOhS-QAky_u3Iz5u5O_2wLMzf3m09eXyoE3NvW1khsVHOYSPkaXb3DkyxJCQzBdjshpLj0RNBSmqnCuXdklcBRp6HfIRJJWUEPpDX_dhnoGLQ3tkSWFVaUKHZjUwVJXFj1z4ncCqS3fJ76k0ShIRNsjDAP88h3jAHI0p6dZZ99BUghoMtQ_JT2A_VlNH9rQ4Cd55ZKELURoNJgDS420cXgs5kQcMPr3zsOSeLHks1ehiDRf6LCyEwuQ6Y1WhLZl1LLE9HBgbaxfZl1kiIqtotHKBxfYhsS8243RNp3ojiCQ7G5FsCD6XVKUIAbkCwi1cPs3tPVJULlp1PRKe9zGUB3f6ZDbG_chn-wUP0jw2zxrjXNF2Lw39ZJfZ_tV16FBDi54LQQfNKlovnv5302xoyth2cuVmE1iygOc_5xYigfOOa4JY3nqCm7-ina3SoJc1o4qvsTjkZ8c7vQkXEWcYUlz4sAxeR6YEPEGq1ZVoBulGvwLv_wjAyuzufnftf6PsKtOgI2TunfVs1ApY48BDSUvSB2TDr0L9t8KLs2mnW-uoeDT4PjGJrEixq0A4FgOtrAwgeuL2ljCsq5OJ_bPof3rZD-VjSnn736ziqJdyE_Z15z0xKCOSpRRs_In1mAEZzlDx4T2XL4gRC6sIL8RFjkXgT-t7j4aGT26R-vKlDJfuePLeXwkzqyD7_Fr-HGjq13Xl7ilRQcZYJ0a00r2EQUTXaAnn_7ZSdoRFt-HKW2R5UuqJKV-URfV5nuiYuO3QnyrpIE66lxA2zgEElN_3sklX1tWw" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/hanucafront-copy.jpg" alt="חנוכה" className="card-img-top" />
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://mail-attachment.googleusercontent.com/attachment/u/1/?ui=2&ik=b5464c0ab8&attid=0.1&permmsgid=msg-a:r8153592646542197319&th=18b91d551d63d13c&view=att&disp=inline&realattid=f_loho69a60&saddbat=ANGjdJ-X1YQfN1yHe_WczmE6yIzfiSNOjOn_Z0D0IaclJx6nn3ovujyy9uRDGhw0hb049tsNRtBsykvLZnJVD5L5gDm_Cd5y4Znk099G0SvIs2omwY56i3ubHPXNKImvUCrRhxuZyLGaaymFILWx18-HEg21FSms1_jwXmgqWNPH1HbDTNRxCNYN951MiagRjnFqxep6PMGKu9nFAieJYhvjqs_AeAYBP1yN5-ANhFoQsRamLNplRw0HvbzZyAe3KrFUI5jou0zDWXhV1Ni_B9kkP5qt0LR8wbqGSHyNkReeULvcZqCpc7EfN3xApkMumcBu2dl9DkWqVLD_QvDGYHDRlvyLcwnmcDkRiECUY31MUlDZZG48-eu9seCURgNRprhtBtM95BuEUPCNFrc0rABufefmqadWENDzIcXr5PrnLxUljcvxGnoCRfKNsWyGwmueJeYRJgrCx2DWEYx4yLSwmsEAZowqwdf_ZFygpPWGb4SobrLemXCAQcqkjI9PxTKZMW-vIs1dX0iyR85CjzXfEohoVGHRWCLpazGKAD5E6rtdNW63a3wp6H0p7aN_leU3V0fOUnDlc6tDc6JBKT--1NlBEFxj08tIddNozB3KkrU0mPNpNuCu0VEy-YHAKr1NvN9pxMKFr2EsdR8OtOdajeU97XzNCcJz2zEA1ovKQP0SuLfyYrFIDYfeo1pYzRNHDQVGlRSE784Pn_upwC7l87y26O1PTBgBzs_bZsfKNp-txSQdA9klNHW8dglvA-5wU6HlvVg5iARODzpY9Nr1ssjLDYUGXPa43eULEXhiZyfPWx4QIzbTCdafgpJkXCZ-_Hv67cOW3y4UAUJNXctjIx20pMFM3OXN57XSRtGmr8A1rLF-D1G8unUkG5y8mr7uKXGLQHEQhi0wsYTWi5a47scXNkk7BxO0fECboRBgTJKA77sFRQp_ARKItCwSU7ojoCKDiIu7IrHmcGgpwH7O8wQNgGqPiY1fJo1XgSifVw2XNTIErWeRJ4mc17ns6U46BYoioYXa9Ggs0k4xMjuw4vZ26_PXC79cuFcK3g" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/4taniyutfront-copy.jpg" alt="ארבע התעניות" className="card-img-top" />
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://mail-attachment.googleusercontent.com/attachment/u/1/?ui=2&ik=b5464c0ab8&attid=0.1&permmsgid=msg-a:r-2967326837618677233&th=18b91d5eace7fc59&view=att&disp=inline&realattid=f_loho6wka0&saddbat=ANGjdJ8g9UmPvcCTpqwEez08nlvdbFVqmTwI2Dkd4fLTRzQXAls4_e--gUmOmnBSax6yBMFGVP_RqHbESzijwW1p9hMRqaLfJr8dRtsWMtGVJVSVFFRZq-cXEEgt02ZLRlzzHoKXtte-2SvOdOLMkZevXxAnL6NRGqGXHAX3xPuzAA-q12maTiEIMtjAhBtMZfCaLQFDQmhF2e90dhzV4H2wU76RNekeRLLZzCMb9TrBo1DUTWSLCyH-UfA5pBYEGDBycWzeX7LHdR6v46_fjQ5cls75UlhXXtse6OgTYFu52EOBTIc4P24P96Mrs09d5TN9AdQ1xIzt5jXRcIq4tilQI8GIWT7ff9XwCgXuA3cISLJ-WKOHPsk5kZcmBpgXA2jIbaTy-un4irrL5RKInehrcu91VUnUbhf7qKL0C8CmdbXqQMi_ECWB2_9ul6SxI6DKkyO3LVmB62A0Vdnn_4Fhnwfa7nlzbLcb9S-uEnoEUS2ki5iJ3XLKP3QvnNa_oYME5_zGZIje6yBZ1-pgHHKE5l7iZDVt4EUfI6_IXS9ARVoCzBklxdYD49GwtR365WRtGg2VBnBKEU94hlNHpHy9G_Xi1XJK2sonUnKlBU03x_V6GcneA5iYjtxmhOmqKYT0iAbPp8sCMVqQBsmXXSrPUJeO2SvupUNIOm2tAumQgAf3bbJBobzml55XbNDWfNkuVyO8ArGUAXb-WPkQGvjts879Oui7qblX0Qete3BajuLOSr8OkSeDOKfIcCp3p7fHa00BmJgzbS6lN8bK_TrTaHzW0N5c0IvR7VHe3F1SLakpozyU-xKfwenHaYja4_Ho-O2uUD7_G2fXvn2SziJF0i8LUzY3E9_6FIkpFI7grNC43OSR_494x0BkyhloaZ-nET7HvI8xZNKRP5iRW7vbDSgjmktx8aQ06MmulfrSYVo7384uw2UvTdZyd8q_Nbgbm2JFiofDfnoY1CoVgAIZl-psi6-u9efQKcpryzl3cnOaDTYTJmyreheOBbnj3OLfy9LF-R1emU6iYCFXfWEAWzRT74QwcqMvrEcFAg" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/britmukafront-copy.jpg" alt="ברית מילה" className="card-img-top" />
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://mail-attachment.googleusercontent.com/attachment/u/1/?ui=2&ik=b5464c0ab8&attid=0.1&permmsgid=msg-a:r-8303321448979607759&th=18b91d656ab4b85f&view=att&disp=inline&realattid=f_loho7ns40&saddbat=ANGjdJ-MbguF9qR_VFADG-7gPNF8dbHV0c3tTD2h7qk1wfT9aqSyDBuXwRiLYZr7_K9uaFG847MIjfJp6CuRbwGbYuSjhNQVA_pBTqsSBOcftsdXeq1KWg9MZWtFOUdB_cntmMhHN_w19ZL5HCuEaINw37Q9adPZsLTdDDq1nEpG0Tlrhkkdkbbv6XRHIAGO2ZyJCFrGGrrp6Cv1dO1RbjbxNevT4QHckb20Ck3zcj0ThOSLWBnyEVnFlZR5mXQ8P3SVB1zkQrUjLuw-a_oNNSSbPsoReebnPNbFsNudET4L81hcHgn73P5TKjxVpu81iizN36P34YrlNTBKtJpbtUBkJ7o_nwI4JoGeoxKGe7nW7NQn-cl6DtgBAM8CoD8jxfxRmTyyNlkpEXSvIVFhHbEYl3V4yBkPLu3_bJNuMJbFZ9-tRjDx9NCNmzqNP_8ZHun9rke3mR5-mlyWDR186wAj9lRKLb7j19TZ5tM6-l0PQz68hXl0vwI7sFXpNOM2fR9Gr9O6TM6sNFcaV1e6np8xiVjzQF2M0bd-VvuSzM5EqBdZbLQIzijcC3sQ9xmdC3YGAUt6ZAXkMePXPmnF_PRiMI7MCl4DGmtMO01ng6kLjrYALb7BGJJt621loTNKMXcbjiYRfKxMIZdRooyNfjGV9W1e0fJkUWXj08FgLYCbdF4fqkZcAjFe6jqndLONvxj-Wgr_jyyfIVv4Y-CjLAJV7vPyaykhDd4cDgch0Pgqc4ptQPJzVE4rF-ONimyqXpRfWzQIx0LKo35Up49KRiv6Kn3DSsgUh2d34jtWbCTTlx60fwyUde7k-bZwUY5yp-Z0V38AHiB5q6-LWWyWVdU-00lw0nhkHRsWVFJ7xqGwhTy0GsRAa9wweWv2QOWdpBDlICSy_4oGgEX76WIFCD9vgyd4fZE2_H6jaRlEz6LorsSFl7LehCUnvaf-Bjnc_yMFC9w3hXx-0jEqKjwVlSsD0_vU4GdAykmnuntR8nRfsR6vCJCvQLYVIBvOO5BCRT80twoQCWwnNM3oUimYxnmNmh1Pj9yyD_rVw4k5Gw" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/seoda-copy.jpg" alt="הסעודה" className="card-img-top" />
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://mail-attachment.googleusercontent.com/attachment/u/1/?ui=2&ik=b5464c0ab8&attid=0.1&permmsgid=msg-a:r3709840570083350381&th=18b91d6b0831c5d9&view=att&disp=inline&realattid=f_loho83t30&saddbat=ANGjdJ8PrYK0IhLG2KZAYZNXLXYX2U3ETV0L4lxUvEH_kjZSstH6FHeOQkyTbaHpoq0-924FsFXERknsr2IJsW9mVejDBAOHjY2XtCl9U9jlVxQ9SNPRKGuoJCcaTnq_XyNzWRdau4_2aerh0rjzynhqirxdlYeNocAylnYDUL2mhNS7cD7L_Dt-AWw6XAASHKIGUbpBb3nXHuvgl4074rX0B2tbb4bXmKt7-RwL9y_ogBwjsnbhiE7BR4373SKFnYtyXSNcEQi3M4OHVIeklk-Fz2eCouHrBR4SNpznfswGDRzv6Nd8HRCCPDLlWr0F0G046LtvQJV0mGHpAZ6aUaLgmdc04Zy-gboWzWQmjNUEB49SpIrBMYcLROW6lOmNb2rpoJF-8WgaTzv2EG_ZY2SyN8wE9Btu-f2nRSCHSyFejgtW-yXnJVhvRYK0pHp-h7cWK-_eetn0enSCxIcNbg6r3xsPl6CVYySWMzIo0PEeNh1eb5CAUfb9icOErCFAGfwiBOTmPn3-DakAYZYvDzIYY9gDNIOYmbiLJr_Ti3Z7nHCG9z35V2bDaaGR31qrSFC_JwY6h2yK0wpCg8HHi35T2ObB1x1O3KM8WTRUglbumvYT49WGXeltI30DKeHe_e55je6NZPzND6AKCj50-UeBpeLHVRg0gyXgabnqxNGv86gnXoofPtjRMB1mfOL2Tl_dQyhXIyWIgU7fyel4rom8gxoUj_GyNnVeDHGLEAgnvi6uya7hAH7JgtfuFKxawk0Wgf1h2eNqmb7DQ-abIMHzXE3vf4L3Nt2L9pUau_Ih-36ox_7_2XuYodj0TwfItOoqOnbqs768t5fPlcuAgAFmUw__yYAG-ZA2UUv1bQaNPbKqMrKfJphKoQSFVoUHN1jdnV8xUr5gPyig7HJ7TrK1NnR_9vVuH6QBSur3fEIflhkKeCdKIfUcHqFPuGjBChXhN2KdKeMrzQzqcCul4vx9KfbBXiuP4Vb0wyfgBiJM-8OFwc04kKmkufQW8TmyeAkWiEZdGdbUe2MucIseuMqyrEp1NsbTxNhLrkO8vw" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/shabatfront-copy.jpg" alt="השבת" className="card-img-top" />
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary m-1">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://mail-attachment.googleusercontent.com/attachment/u/1/?ui=2&ik=b5464c0ab8&attid=0.1&permmsgid=msg-a:r4033904541051763179&th=18b91d7506e1f8ca&view=att&disp=inline&realattid=f_loho8tgx0&saddbat=ANGjdJ8V7DRzjIiDL1sfHh9gqynO6b__otzjr08LteQ38SpKDDejzJrGpZHDS-Tq1B6_n2UFrv3ROVVArocbLq7e7aiEJfezEf6uOnd744XESH4LI15HcxAqvaqdPo7xt8LVHssmFd43gA8Ybwdk42uYdg6bJ2sHtVE4oAh5G8raRzqgBBtw0QDa9PZf7YfOEi8MmsQhfcQp3gM8zDm38JZ4X8h5RQny2eW-8KicKMokOWtGy9cERHzkYJ03KGrYn-4SG7iAEEhdmhNJ5g9NYwk-Vq5apVEUetCOI91DFV93DfQQWGyf6DxiJ8-gW5utCt5d0PamvhFSgaepsb0xKjKsmQY5onQImaB-0_rGts7kc9ji1kh8jaC24B2XUJYq5ltKbuMblwdBsUCNsvjpt3462n8dXnGJPtiq8r8lV9SUim4zwiE_aEs6qbnBXJkUAH1s4t5EBrsWubqL809fX-UZIJBd39KqdhEBfCwnTDAGENLER848HPg9iPtkJq9dLx8-_2FpjEZih3DUsgWzL_z13YzdObztGtK3VZ0YojzbnvAntbZZEgEPpxaHUCylvxDN_an0G5S7CgKI7mL-XUWxx9O_S71D01MyKW10f4pHrV0yYJ3FkImksjYWvfJzCUQ_2-ichfiP5aDbcUgdczmeE8LPWkI-HjxfOdgMhCyqsjnLA3BLFmvjVfTULMoJ5S_5ldyP6M4DPq8_nlOYt6HiHSUc6WbfHFYkRQz8ocskqrJaxsHv7IGplKdXCeGIw_mPQ4XKWHmRNzSC0kSQYz0zb-C8RfinQ5F3YkVFk79bzROYAAPhrJeVEQn2WRaympd8UB_rsEIlPMYHmwMcGdrHDiv0u7ZioiA9jeKqgxS59BNRVPZnLu4RDjm0h6s0465jnfkeIFylBnyDk-kwteallaKJx2MukRh49kQPcTqeLV8VkxlqUyyc1nIgbPQandD0vcSQ8zOBMoIIkMlhoeuVXLRyJ0ux8Cm2h22mkSDjd2Nbgkl8Qesgw3FqpjpbFocLMl74VbqaEwVHsAZLKwkNRSXwDj_5hfIZMBCR9g" 
              target="_blank" aria-current="true" rel="noreferrer">חלק 1</a></button>
            <button type="button" className="btn bg-primary m-1">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://mail-attachment.googleusercontent.com/attachment/u/1/?ui=2&ik=b5464c0ab8&attid=0.2&permmsgid=msg-a:r4033904541051763179&th=18b91d7506e1f8ca&view=att&disp=inline&realattid=f_loho94731&saddbat=ANGjdJ96oxr2OjxuIN4o7ep1EofQIoqq5nc_6OtkXlhS4RsfGlxAvfNQl1t9i0avNVXDdkR7oaBV2HC_gAvYVaGgz4W2WjD4CTcGPpm183XI0KxuzS5uxAGJ28wkeQGzWyLLndRplZUKshK0TL3rMYlyfgdFFIzPdM0yXigo1rb3xJt7gI3E8BUjlbLnyovUYjIGhSR5ZqHFiYOl1G1nEQeyQ4XnhoVVbE6TUlqp_DCbHQ9Em0-QJArfh_yuq2j9WrnLd03vRXLsG588Spxf9qAYiz4rXURIjrf0b-8HSgkyaC1u0SHgumJA7qq9bLJF1VfDHGVpjrBKTfYzvV1LjmnOEd-CGmWyVuxoE4UTKt9denEjFmI55swwsukUIU-aSbZK9mj7cHFkt_lLhP9ru8HaEUnSukV1vpP_WC4WgrF3WxnhIIKJAJW4AaSNvecKhDl2I7lo0vszmZaXSxTsy1SXNo18b-b60RF-Hesae69CPJuRbNpbz4quyIZ1i_XLvJIbTrEBFPfQeI879jWj5hYtdbmmBeKiO1-lulp1A7__etY3FSmcPe9w-efiR5bkNm33Y1SKs1kccUSTl9ey5H9I_rEn7RR98mP3tnmOcbrQV90DBcXT7N8kNs10ue0dg1s-7jvFsDtfOP5vIDqEC-6Noowjcl_D7FKhfVvrfNi-eLKMR-GO63T17g37HDKRSGwLXYuOgAMQYjFLvcgxa1Y4vwm2pN-ffoeJOBkmuPN36wmL__LqAgc5ozMN2ydModuSZSfZ4CNZlkxAKGc-SsHyJ57W0u3OUkSrnil7R9NPrlY0l6BhD32Gvm1PmiQvANBygtq_ssPJkvQ00IwmPw3BieTq7LjFX5z44GM61MP2tM7v4E7MpyRY6OWj3F2hgLAcUsEO7Y00gNuiAhhVgAJ30czSpipx9FwIqeRLHTHbaJuJLtWa5bG4kgCGNzcC47Spf4Nnx0D_36gICKQZKMR2lJD7rwUQcRsieIdZw95Nf9FuZIqXry9BpUFG3Y-TelWQMiK_FF06lh7q8aaMd4MNW-lVq3bt7N17jGecVQ" 
              target="_blank" aria-current="true" rel="noreferrer">חלק 2</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/pesahfront-copy.jpg" alt=" חג פסח" className="card-img-top" />
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://mail-attachment.googleusercontent.com/attachment/u/1/?ui=2&ik=b5464c0ab8&attid=0.1&permmsgid=msg-a:r-3587444964752238954&th=18b91d7e70cbb624&view=att&disp=inline&realattid=f_loho9ub10&saddbat=ANGjdJ9kqeuQfpXgPckaFhKBuK5bZpWJiehXEp1Uia9Q-7mi_S9C4xlooi7U-a0tUYlJXfjo4movGEBw1yx87LgWRntWAdUk79Xp2p7llLXIbYapQsZotDyl6FgOMstcaK7x-j4z7tH0QDj4hwUROWOpz2St97ZxSiQuKee2a3760JEYKXYMmEulzOxOMYZ5kONEJOunyoT-snS6vEuucoq_cBUKkXn2gSCm9DixiOtAvwTYQ_-XAfPJW4R4DPmADishDyoYyIkxX4PoYYIupT776jQ6UtQ4pJ1Q5feufLya2W6CXrs6aB8R1gmYVb8cf2Hv-IyVwBWSaU8UcQArGwQhh5v2oT3BA90GyM9bihDcPtHnJqFi_lKGv4frBzIHzhzwjj-GUwYeBfec2P7MsjcGGr-LqyWyMnUcpo93lBEHbIOwP8z4mxL-NjxanKI06ZmQ1Zy6VQU9_SgSw2zY8YHFEcONWSS2hEpsTF6yjLp-ao4kB4nGAsN1e0zgxrRReMReGCVYI_WvcbYdv1X5kbHSE3zgTLC5hnDx2s4SvPLO5M4A3iDchT8fcPbsUX2w4qWV__WLIVTyp4JTDwNQnNjxIa8ekQ7thi5gdjj3oXk1hRDzxL1SidsaHL6liIGHBKnSmhiMsgXkLq9JjoxzUUF6iXnSTKq817yteze9aryG__YzQPQqZa_mBT5CDwRJljT4MTNUUM4GrTt3ofpZA14BzI4R65I4QdjRU4WDseOny7g9n_hw0cvTv7yP9BxrK-Hy3w_bg4bAyapFV3jvk1K8bp2-uVEGmKqvVEIRwaLHnG8BJ74jvNRorblQF2dnr8VkgBt_DK9NCktpGL695rGKp2mfB0tHsue1Tkceu0vRcVoq-Gu28EKbNLHT9rKqLnME_fuYFcqwQ8wRa-rGouHYxAkfFTdQiihXc88BcAddVnpEzRwQ9RiCVakxsOBhZ1JNkay5GweBzG4pGkXfooOWOTIOhJpyLU0J4wUVqv__2imN4FHdx-7dreQAxl5ASI2IptxYDaOodSAOs15aAhKddfNAiVCwXun07ZaU-Q" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/rushashanafront-copy.jpg" className="card-img-top" alt=" ראש השנה ויום כיפור"/>
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://mail-attachment.googleusercontent.com/attachment/u/1/?ui=2&ik=b5464c0ab8&attid=0.1&permmsgid=msg-a:r8422148290582763961&th=18b91d87413fbe64&view=att&disp=inline&realattid=f_lohoaiu40&saddbat=ANGjdJ8rgA-5qemP3CgnVOYq8i7XS20Y0LKJeK2SQt6HNTttXRj9qkhPlxxVN3VlyiwtrX9wfwUMcRjGp77o2fjCzWkcX8lAtjOXkJtT4B-a2-hq4DaCC8b5nZMg0243YPW8XNUnTo9SVT4tvXz_L5dayGGzOnhd_kdjg7LOXWjpT3Pp_mkuPGsu6UApOA-JpM0Ry9lGlJ_M8Ep0bV-xux8qVhuNhvOsdkIzp0vAOMDqGopYdlR6vcFh9dyo-kQJhsmFC8CMPWwt5EnBGNYqKvs06q8Y5El-USUXAjb5IQofY-C1ygbOeJdFOoNmbb0z7mw5DCHWdoY3fVTNiOooq8wYhCCOEQOmPMZINEQohNsmgIv27Mj-BvIiqNSGVYP0AprYzhZHYq23n_cT7hmARzsH56Dh3X-i1BaZ3zBcelyXSZafkiiuIN8blMf3Mx-aqrfx8dJ3cbgURO0j4Fx53tUYJV9ioCawyA1vNJdx_m27RPFMj2xtn9ffoTqYSXnl6e7hk8GtiLDMDQYUayocUqvur9bPMfQyvJMXa4tZJABkRR6_OTsEhLdP59ASvcvTxLOgDp8Fu4SO4Z_XJLAN1eECu8-bgMCFF13aUG3Mped0JtISslz2G1sELxwoKaEcyVEb9VnQKeIoeW88-Ubyw6vyWV5bvJs0agr1_Cjn03ivoOH3ICG5CFXZA9qtoXBLZuxRuRZzOE4bWj0hYtzWYYXJPxP_PbyYLtJefyLf3APNfLlcI35FGKSQoD3wfRdOQwBV7DbEpJSIp0VUsWfopLWVBj1zeeSupO4Rpz3RUp9dw9coAseVUs-aoAFFmiNJcyiTTTwX44JnlFySqksfmTih9e2i2VQ0yac1tTsj_Cf-INS8-_ILX9K9DHnW99iAQS2OhUSUZMzDvv7ZpagmEqXQ_-eQuXVTkQGtso3aruGqSME8ksVJOnt6zwiaYulLd8bwRsTdBPH3vqK-bKGVK-I7b8z8lkBv2qRJmHAEjdp1h8D0Rrw_d4oJmKGZKWWTQLfwoUp-GToa2ayQNxqHrXbuPDJMUc0rLHzxqHpBDA" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/sederyomfront-copy.jpg" className="card-img-top" alt=" סדר היום"/>
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://mail-attachment.googleusercontent.com/attachment/u/1/?ui=2&ik=b5464c0ab8&attid=0.1&permmsgid=msg-a:r2610070751578118641&th=18b91d8c60ac212e&view=att&disp=inline&realattid=f_lohob3ck0&saddbat=ANGjdJ_gSOQ27xZpw5wrCWvLa2tsuPBzYYT9TRac8VtsanjaPTiCMlokx1cdyZcTiLAJpUw7OC-tuilO-vmuvokvWrwsr9wqGTMncwkt7zuMCSuxM-ZtFuQ7QitotxG1WzbT4HpxsxAJfR2SvmsH82RLXYymF108qu4_JPPVPC4SujTeWC5ZQ0mv7IQn_qMTC_x0yCb5l0wRG3Jn7sSf9i3fRp5bEvy4AGYsu_pzjsINi8EaelplwV6-k8AHqpfEne-EQYKFWUuWxJV5cVaAbTrthvSiz3eFcYGOtUiQBj1CreWgRa66hlnXmBu_hY_QRDSIHHqt0pigee6GgOQluJZ4xpAxXJPU_Yod5RLH54uZcVZ5pIZYkydfPANM3lcGiMEMQX36tSng0ExCaEiZa3hylqe339Cq-YP672PGarppJxGs-qIutsYSsgbST6GLLO8zhNlGOPSMwp_Y5xP7UaJLJHZzOrNTIFiZ_Gy1rkSBLMbRTshbPt-eetCI2IoUkAizDmgog5qDvC317pZ9M6NO1fFuBJc0OGGfYqwOk-k7uuL7uUp35MP9nkyyGL0p7vleEd0DP_NUbdiEbvxtxkzIhFrOTto4wvd5N4hLOjRmyB2YiT19bOBPcWmRhoZs0-4TK1FcS_bgoKEkpYSnvdoogvd8lbjUiFs2ksuXcrgUhdH2sRXf_GqkbwdrwB8eCC9QREyYkLVtQfDOPvcUDKAvGVfL6Dh8U-WOr0eP3eefXi4ydeR0RDBAVTSz6YEgooNlFGiaCIbXmS5RCUa6j9R2X0BXUUi-YQ3y6ztrLbeWDuDkcMYOlJwHWvG4qkmgLRS8-f4xPcTrYy_ev2P701C5bie7qeu2altcb-FakAN9-VJ1KfjNdqbzmmFQzQvRZ7oKRrvdAIQCBFZmoQBHEwZg2e4t8pH7hcfHfj4upUGCnV2m9GaxWDVUoYjhrP5jR77_NdiYXQeoEVzeyrGOROec_ZNvX86FiEqQfbAYwqqpVlrsBhmRLDlo7o3iestEQyNOfLRxOvUt7XZECyzN3MKl12H3p2JPgMh6T0BL2g" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/liyotatkatan-copy.jpg" className="card-img-top" alt=" להיות את"/>
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://mail-attachment.googleusercontent.com/attachment/u/1/?ui=2&ik=b5464c0ab8&attid=0.1&permmsgid=msg-a:r-8818131298598035030&th=18b91d96c324937a&view=att&disp=inline&realattid=f_lohobz3h0&saddbat=ANGjdJ8mIMQ8rlIvc7t_gqX3PuO8BdxUVEu_yC71uDzpUW-FtS6yt1pkFJZIzvY-I_6QpCklPgd-VENUiw26oD7-SbmyrloCXZx3Ay5xmTRzIOxaWPRGucQbO8rRYMVPv_KZLD5ou4Qyh2kOZbSMlOV3U_-vRm2SSfhgxsJQb7AY-rE5aL7xYsoKNkpXqU8b3eDfgPuG531o21u_4dhRthXt4UY7KQv5s_rmWN6gyB1r1xzK7qwkdEiMauSeO-otWjBIZvlitnGv8Gmqvau_b3rr8yDbUWY-QZnxPKEuG8JHemawkx3rDLdzQT2YmKOC5HOz0Bd28mc6U5O0nIBX_yCESW5FaC0VqW13AAYBQOe6xUAkjlgUZfUtQfZ7SAE9ctCkeGEIpGW0NNfHgjOUG3_aigkIFtN9MZgCqBW8uCNwhGKtqm4aBpmWgYmhF8iOOVmHLs3yUERznZTTS9hrTbPS2_Y0EMyooEWepTUFwT21i9iGaVCOEZYeL-bzixeIm0wWyGVlej_48mLfnRNiiorQE4BrlHICFfqdDPB10BcbL-q0TD5k5viXnHvJy2yJN8dDDADs-X19g4MsdTB7zSJkJeAvSMjmh0en1SqTHrKbMPK_td_sWEp24_2Ou0Og88ZlvgyYPuyOdIzNc3hTfcqnIDqLNUuAmub6Xp2F15TFVKkyesEmwMx6vOdRNbKP0fC-IdsUTKSBCv2isp6mu_kms4AX5tuRQ72ZRgA9A_te8hJIBCYr9kCIfJRkCzvQna28DSZlcTRXrvV51OMkBNZqdXByD3dh_dIy5r0K399btQnl6Ch-TQLQqiMW-0mfkHNtWoufk-rWfVhYzD7SZHtbryIePFv_UTEf9DKm2ZXJCHS18TGVYkQ0nfsfKr8CG1lM3_vGaQhLI7IpijnXJG_s201ukl_cAaTfUnTBN-b51VgUDqTYhPXCY0mBExiHQO2DYrBSpmZFs3u9bC16LUV9TqlWZNcGQqDtx4XBoJd8if5qVikS8RLZuNSW058366Pm0My6ASRsytvjA0nUJnuJxCobXLt5K6MuzzIWNw" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/pirkeavotfront-copy.jpg" className="card-img-top" alt="  פרקי אבות"/>
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://mail-attachment.googleusercontent.com/attachment/u/1/?ui=2&ik=b5464c0ab8&attid=0.1&permmsgid=msg-a:r8670367887452416707&th=18b91d9c2e878a11&view=att&disp=inline&realattid=f_lohocgvx0&saddbat=ANGjdJ_3ucyUNWfqENvchhsqfeEKs88xIOS9zcPBoLUSWltoNODpPvi8WNxp-NyVjhU6l4Zxz6WDNR1OviNqU9526S0gprSgmFxHwwfTseLs2zL8cmG1ff0PcHCMj6A-qLDSkQQ81LIx0K4oBQjAO1mGQ1r_rtARx0RcJqdJ3rU_k3dduJ0WGsOd_TLtoiDBnmvwaZ2fwtF4s7j_I2dw4Er4dxHMsrewUb75L2Mi_F83OkEH503QlOv892fos48KdgVbWVMucfJ0BgBuhYZppmiqBRiFWMgcS2Wg_GMCQPEMP1aZmhgRo0Lmk9kWR4A4ce4566qDfz2fEFWL167kC-GB5BylBOIE4chGJkpRu0xHhZFmfUaTO3H3A7zE6BeRUI3OJFdDqhi_CRSMPX-e8LD-O90YVrRG3hGj6X36-UPj8oD_D6btuXayJCZ0Ke53q-f3iBvtySLm9VcIRejFepdPPAwjzBRc6cF4gEHQWLwImeQRFJU4yu4vDwC4z2se5Hz9bBsI8eOJXE8gSVP0lljH8-hhxfUzTyRLCCYn0rsMFqFXt90qsJvbhdYuL3MzULyf9iB7cWyePWmuCVnPVqEwLPYz4-Xh8_kvxHdbjh_OAmuUzWU-LMxZt0V_zCSc_07PfVGMBLsWO9H9CfOlnZ7WNYLLmP90-EDC4qbVX9QTgJkDSNVxWFqcQrBzbFH-i29NFt7ngDHBLUOBXuzjxhiJhKqZmJkAqpVx4AZlOz-rS0juSjep49NMKHU2ahidoOXXBk0IubaIKCA5awkNBJPG5FQ26ktPIgMqzVizStlSrrM46TYOy_LbEkURPZZ0JZ7JsWyeKHsGdfp_I-8fGt5tNSGFxfertAqGl-sHKeUzzrxkABZvR6QwBGwYJbC1MKT3KbjlaNkXY6r6drhnjN7XluDBjn4KVWjvCWUXgNf4a2NQKKQf-WR3aeidquljz2g7LRqBq2J_D7JlGG3a3GoqjkX3tLaZVMpiowe620KQlOUwyfAIeuoB8AAnn-hfXTjafVq48dCEPRwhLQQq-olY84MNbFT3jbs9xO6kqg" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/mitbahback-copy.jpg" alt="כשרות המטבח" className="card-img-top" />
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://mail-attachment.googleusercontent.com/attachment/u/1/?ui=2&ik=b5464c0ab8&attid=0.1&permmsgid=msg-a:r-4857070127303995724&th=18b91d3f2459d1bb&view=att&disp=inline&saddbat=ANGjdJ_CUW_wd3UMmdVn7c9-otvoZa8qBEScXRNmehrE2hgjOdpj1_3LJCRtI2a6ar6H1HOdhDkI8fz7FUK1pIMVbls41K6DEPZwKmoe7Oe3SuwOZA7B3OLHxHbwPk1S3RKIAPdWDdMx3wty4MZwBELfHkSm5pfVy8b_jNrD3VoCOIiPPGHLVidiTvjihoaQPZsXBvKnO27e47MTgfpbXCPD9FqXXSGV1UByv89M1miNsW6X9MW6aOKi_cX5XSx2489q2WxwNuHILVhY4tQ4QvMqA20EWTXq7S84WPQAFBA0EiDoRl6o0QCNWJ6X1tTk-v0WgLMYdRICNyOhg9R3FNmrC0z9YzKKvL08OttRcxhFOTtFDITqKhmbblktFdhbrAo6dh7W7mPCwhJJuOlTBurSkABk7G7MUfM6r17iSWA9n7CiIC_5zpA7JLx-VwdOluegYrNucWXRjxfpwzOvfSsRHLsxHRMMbyO_ST6Jis92CtBcwnBwEzxMLea9Bi_Y4BhnrvkwLHljQAAweDuKS0iawYXYy_25w4J_dSzWVBhTjRA8WY0pSFw63Bgqd6js6HSKu16shVixsoKRWRT8hK1Vi9wXHoWcLLRpABB7lzVSzsFGu4VVZWujh7_qlVMkl98UQLnE6nh93QEgmBrOeYVxKIYUtBSb5nccYiLscTYyZoPExbICN-SRE9rkPH8vtkwFNovqhilBT_H0IgT9GOM2apR1cqD3CoxW3RbBm5hFbGHGeHLjYFTPXuMI7hO5jVGzud8ePLttT3DynzH7q7c-dPViK7GOGbFKSwhGQN1LlnyZ6NXwnE2NmJY45eL-A2Pb_wxpf-7yL_8QPYsnbNdJDWNonpY48bP3kR8EPM-kFrJwIg3Nu134T0sm_eeO6LFe_eer3Jvi2lR8kZ-DZ6Qh2KD1ZXhy-euNU3mit-U0G7kesc1W1Q8bMuhYX82m3ojoSiCW5dluVGgWDgzdWqOwHfkjR_DsDa0VkGrMDdaa3UGgZRO_Kv0vHKu_vKVOUI6QGpQDdzFJQ-P6XDmOJH2vHwzDj2GN9htvom8e_w" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>
        
            
            {/* <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/sukotfront-copy.jpg" alt="סוכות" className="card1"/>
            <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/mitzvataaratzfront-copy.jpg" alt="מצוות הארץ" className="card1" />
            <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/rushhodeshfront-copy.jpg" alt="ראש חודש" className="card1"/>
            <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/mitbahback-copy.jpg" alt="כשרות המטבח" className="card1"/>
            <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/kibutfront-copy.jpg" alt="כיבוד אב ואם" className="card1"/>
            <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/nisuinfront-copy.jpg" alt="הנישואין" className="card1"/>
            <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/hanucafront-copy.jpg" alt="חנוכה" className="card1"/>
            <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/4taniyutfront-copy.jpg" alt="ארבע התעניות" className="card1"/>
            <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/britmukafront-copy.jpg" alt="ברית מילה" className="card1"/>
        
            <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/seoda-copy.jpg" alt="הסעודה" className="card1"/>
            <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/shabatfront-copy.jpg" alt="השבת" className="card1"/>
        
        
            <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/pesahfront-copy.jpg" alt="פסח" className="card1"/> */}
        </div>
        {/* </div> */}
        <OffersTable />
        </main>
        <Footer/>
        
            </>
    );
}

export default Order;