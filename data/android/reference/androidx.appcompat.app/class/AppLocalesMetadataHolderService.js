module.exports.AppLocalesMetadataHolderService = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "AppLocalesMetadataHolderService",
      hCode: `public class <a href="#AppLocalesMetadataHolderService">AppLocalesMetadataHolderService</a>  extends Service`,
  
      des: 
        `
        <p>application-level metadata add karne se bachne ke liye eak placeholder service. service ka use only library ke manifest me defined metadata ko expose karne ke liye kiya jata hai. iska kabhi invoked nhi kiya jata hai.</p>
        
  
        <p>key "autoStoreLocales" se eaktar kiye gaye is metadata boolean ka used developers dawara API setApplicationLocales ke madhayam se unke dawara provide kiye gaye locales ko automatic roop se store karne ke liye opt-in ke roop me kiya jata hai.</p>
  `,
      img: [
        // {
        //   url: "https://nodejspaladres.s3.ap-south-1.amazonaws.com/uploads/Screenshot_20230313_145029.png",
        //   label: "Action bar",
        //   fig: "Figure 1.",
        // },
      ],
      summary: {
        success: true,
  
        publicConstructor: {
          name: "Public Constructor",
          success: false,
  
          method: [
            {
              dep: false,
              name: `AppLocalesMetadataHolderService`,
              id: "AppLocalesMetadataHolderService()",
              code: `<a href="#AppLocalesMetadataHolderService()">AppLocalesMetadataHolderService</a>()`,
              fullCode: `public <a href="#AppLocalesMetadataHolderService()">AppLocalesMetadataHolderService</a>()`,

              des: ``,

              longDes: `<p></p>
              `,
              parameter: [],
            },


        

          ],
        },
  
        publicMethod: {
          success: true,
          name: "Public Methods",
  
          method: [
            {
              dep: false,
              name: "getServiceInfo",
              id: "getServiceInfo()",
              dataTypeName: `static @NonNull ServiceInfo`,
              code: `<a href="#getServiceInfo()">getServiceInfo</a>(@NonNull Context context)`,
  
              fullCode: `public static @NonNull ServiceInfo <a href="#getServiceInfo()">getServiceInfo</a>(@NonNull Context context)`,

              des: `Ye method, dialog ke creation process ka hissa hota hai aur dialog object ko create, customize, aur configure karne ke liye use hota hai.`,
  
              longDes: `
              <p>declared AppLocalesMetadataHolderService ke liye ServiceInfo return karta hai.</p>
  
              <p>is serviceInfo me attribute "autoStoreLocales" shaamil hai, iska value eak boolean hai jo informs karta hai ki developer chahta hai ki hum locales ke storageko handle  kare yaa nhi.</p>
              `,

             

  
              parameter: [
                {
                    name: "Throws",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `android.content.pm.PackageManager.NameNotFoundException android.content.pm.PackageManager.NameNotFoundException`,
                        des:`<p></p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "onBind",
              id: "onBind()",
              dataTypeName: `@NonNull IBinder`,
              code: `<a href="#onBind()">onBind</a>(@NonNull Context context)`,
  
              fullCode: `public @NonNull IBinder <a href="#onBind()">onBind</a>(@NonNull Context context)`,

              des: ``,
  
              longDes: `
              <p></p>
              `,
         
  
              parameter: [],
            },

  

          ],
        },
  
        
      
     
  

      },
    });
  };
  