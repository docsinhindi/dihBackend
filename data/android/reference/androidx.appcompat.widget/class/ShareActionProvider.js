module.exports.ShareActionProvider = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ShareActionProvider",
      hCode: `public class <a href="#ShareActionProvider">ShareActionProvider</a> extends ActionProvider`,
  
      des: 
        `
        <p>Ye class, share functionality ko implement karne ke liye use hoti hai.</p>
        
  
        <p>ShareActionProvider class ka use kisi share button ya action item ke saath associated share menu ko implement karne ke liye kiya jata hai. Is class ke through aap content sharing ka seamless integration provide kar sakte hai, jaise text, images, links, aur other data ko apps aur services ke saath share karne ke liye.</p>
  
       
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
  


        
      constant: {
        name: "Constants",
        success: true,
        method: [
          {
            dep: false,
            name: `DEFAULT_SHARE_HISTORY_FILE_NAME`,
            id: "",
            dataTypeName: `static final String`,
            code: `DEFAULT_SHARE_HISTORY_FILE_NAME = "share_history.xml"`,

            fullCode: `public static final String DEFAULT_SHARE_HISTORY_FILE_NAME = "share_history.xml"`,

            des: `Iska use default share history file name ko represent karne ke liye hota hai.`,

            longDes: `
            <p>DEFAULT_SHARE_HISTORY_FILE_NAME constant variable ka use default share history file name ko represent karne ke liye hota hai. Jab aap ShareActionProvider ke setShareHistoryFileName() method ka use nahi karte hain, tab ye constant variable default share history file name ke taur par istemaal hota hai.</p>

            <p>Share history file ka use, ShareActionProvider ke dwara provide ki gayi share action button ke liye previously selected apps ko yaad rakhne mein hota hai. Jaise ki, jab user dobara content share karta hai, to ShareActionProvider is file mein share history ko store karega. DEFAULT_SHARE_HISTORY_FILE_NAME file ka naam hai jo default share history file ke taur par use hota hai, agar aap setShareHistoryFileName() method ka use nahi karte hain.</p>
            `,
            parameter: [],
          },
        ],
      },

        publicConstructor: {
          name: "Public Constructor",
          success: false,
  
          method: [

            {
              dep: false,
              name: `ShareActionProvider`,
              id: "ShareActionProvider()",
              code: `ShareActionProvider(Context context)`,
              fullCode: `public ShareActionProvider(Context context)`,

              des: `Is constructor ka use karke aap ek share button (action provider) ko action bar ya toolbar mein add kar sakte hain, jisse users content ko easy way mein share kar sakte hain.`,

              longDes: `
              <p>Is constructor ka use karke aap ek share button (action provider) ko action bar ya toolbar mein add kar sakte hain, jisse users content ko easy way mein share kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Is parameter mein aapko current activity ya context object provide karna hota hai. Iske through, share button ka context set hota hai, jisse share button kis activity ya fragment se associate karna hai wo decide hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },

          ],
        },
  

        //
        publicMethod: {
          success: true,
          name: "Public Methods",
  
          method: [
            {
              dep: false,
              name: "hasSubMenu",
              id: "hasSubMenu()",
              dataTypeName: `boolean`,
              code: `<a href="#hasSubMenu()">hasSubMenu</a>()`,
  
              fullCode: `public boolean <a href="#hasSubMenu()">hasSubMenu</a>()`,

              des: `Is method ka use menu item ke liye submenu ka presence check karne ke liye hota hai.`,
  
              longDes: `
              <p>ShareActionProvider ka primary use hai content ko share karne ke liye ek share button ya icon ko Action Bar me display karna. Jab user is button ya icon par click karta hai, toh ShareActionProvider ek share intent create karta hai jo content ko share karne ke liye appropriate applications ko launch karta hai.</p>

              <p>hasSubMenu() method ka use, Action Bar me ShareActionProvider ke menu item par click kiya jata hai toh submenu ko show karne ke liye hota hai. Submenu me shareable applications ki list hoti hai jinse user content ko share kar sakta hai.</p>
  
              <p>hasSubMenu() method ka return type boolean hota hai. Yani agar menu item ke liye submenu hai toh true return karega, nahi toh false return karega.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "onCreateActionView",
              id: "onCreateActionView()",
              dataTypeName: `View`,
              code: `<a href="#onCreateActionView()">onCreateActionView</a>()`,
  
              fullCode: `public View <a href="#onCreateActionView()">onCreateActionView</a>()`,

              des: `Is method ka use custom view create karne ke liye hota hai, jo Action Bar me ShareActionProvider ke liye display kiya jata hai.`,
  
              longDes: `
              <p>Jab hum onCreateActionView() method override karte hain, toh humein ek View object return karna hota hai, jo share button ya icon ke sath ek custom layout ya view ko represent karega. Is custom view mein hum apne pasandeeda design, icon, text, ya kisi aur UI element ko add kar sakte hain.</p>
  
              <p>onCreateActionView() method ka return type View hota hai. Yani is method se hum custom view return kar sakte hain, jise Action Bar me ShareActionProvider ke taur par display kiya jayega.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "onPrepareSubMenu",
              id: "onPrepareSubMenu()",
              dataTypeName: `void`,
              code: `<a href="#onPrepareSubMenu()">onPrepareSubMenu</a>(SubMenu subMenu)`,
  
              fullCode: `public void <a href="#onPrepareSubMenu()">onPrepareSubMenu</a>(SubMenu subMenu)`,

              des: `Is method ka use, ShareActionProvider ke dwara provide kiye gaye share action button ke liye context menu ko taiyar karne ke liye hota hai.`,
  
              longDes: `
              <p>onPrepareSubMenu(SubMenu subMenu) method, ShareActionProvider ke dwara provide kiye gaye share action button ke liye context menu ko taiyar karne ke liye istemaal hota hai. Jab aap ek share button ko press karte hain, ye method automatically invoke hota hai aur context menu ko taiyar karne ka mauka deta hai. Context menu, share button ke options ko dikhane ka ek tarika hota hai, jahan par aap alag-alag apps mein content share karne ke liye options ko display kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `SubMenu subMenu`,
                        des:`<p>Ye parameter ek SubMenu object hai, jo context menu ke options ko represent karta hai, jinhe share button ke sath display kiya jayega.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setOnShareTargetSelectedListener",
              id: "setOnShareTargetSelectedListener()",
              dataTypeName: `void`,
              code: `<a href="#setOnShareTargetSelectedListener()">setOnShareTargetSelectedListener</a>(
                ShareActionProvider.OnShareTargetSelectedListener listener
            )`,
  
              fullCode: `public void <a href="#setOnShareTargetSelectedListener()">setOnShareTargetSelectedListener</a>(
                ShareActionProvider.OnShareTargetSelectedListener listener
            )`,

              des: `Is method ka use, ShareActionProvider ke dwara provide kiye gaye share action button ke liye custom listener ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setOnShareTargetSelectedListener(ShareActionProvider.OnShareTargetSelectedListener listener) method ka use karke aap ShareActionProvider ke dwara provide kiye gaye share action button ke liye ek custom listener set kar sakte hain. Is listener ko set karne se aap share button par click karne par kisi specific target (app) ko select karne par ek callback receive kar sakte hain. Is callback mein aap customize ki gayi action ko handle kar sakte hain aur user dvara select ki gayi target app ke saath apne content ko share kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ShareActionProvider.OnShareTargetSelectedListener listener`,
                        des:`<p>Ye parameter ek ShareActionProvider.OnShareTargetSelectedListener interface ke object ko accept karta hai, jo custom listener ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setShareHistoryFileName",
              id: "setShareHistoryFileName()",
              dataTypeName: `void`,
              code: `<a href="#setShareHistoryFileName()">setShareHistoryFileName</a>(String shareHistoryFile)`,
  
              fullCode: `public void <a href="#setShareHistoryFileName()">setShareHistoryFileName</a>(String shareHistoryFile)`,

              des: `Is method ka use, ShareActionProvider ke dwara provide kiye gaye share action button ke liye share history ka filename set karne ke liye hota hai.`,
  
              longDes: `
              <p>setShareHistoryFileName(String shareHistoryFile) method ka use karke aap ShareActionProvider ke dwara provide kiye gaye share action button ke liye share history ka filename set kar sakte hain. Jab aap content ko share karte hain, to share history store hota hai, jisme record kiya jata hai ki user ne kis apps ke saath content share kiya tha. Aap is method ka use karke ek filename set kar sakte hain, jisme share history store ki jayegi.</p>

              <p>Share history file ka use, ShareActionProvider ke dwara provide ki gayi share action button ke liye previously selected apps ko yaad rakhne mein hota hai. Jaise ki, jab user dobara content share karta hai, to previously select ki gayi apps automatically show hongi, jisse user ko dubara apps ko select karne ki zarurat nahi padti.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `String shareHistoryFile`,
                        des:`<p>Ye parameter ek String value hai, jo share history ka filename represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: "setShareIntent",
              id: "setShareIntent()",
              dataTypeName: `void`,
              code: `<a href="#setShareIntent()">setShareIntent</a>(Intent shareIntent)`,
  
              fullCode: `public void <a href="#setShareIntent()">setShareIntent</a>(Intent shareIntent)`,

              des: `Is method ka use, ShareActionProvider ke dwara provide kiye gaye share action button ke liye share intent ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setShareIntent(Intent shareIntent) method ka use karke aap ShareActionProvider ke dwara provide kiye gaye share action button ke liye ek share intent set kar sakte hain. Share intent, content ko share karne ke liye ek action intent hota hai, jisme shareable content aur share karne ke liye available apps ke information hoti hai. Aap is method ka use karke apne app mein share button par click karne par kis content ko share karna hai aur share karne ke liye konsi apps available hain, yeh sab set kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Intent shareIntent`,
                        des:`<p>Ye parameter ek Intent object hai, jo share intent ko represent karta hai. Is intent mein shareable content aur share karne ke liye available apps ke information hoti hai.</p>`,
                      },
                    ],
                  },
              ],
            },


          ],
        },
  
        
      
     
  

      },
    });
  };
  