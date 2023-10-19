module.exports.ExperimentalWindowApi = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ExperimentalWindowApi",
      hCode: `@MustBeDocumented</br>@Retention(value = AnnotationRetention.BINARY)</br>RequiresOptIn(level = RequiresOptIn.Level.WARNING)</br>public annotation <a href="#ExperimentalWindowApi">ExperimentalWindowApi</a>`,
  
      des: 
        `
        <p>Is annotation ka use, experimental window APIs ko annotate karne ke liye hota hai. Experimental window APIs woh APIs hain, jo abhi development stage mein hain, aur unmein changes ya bugs ho sakte hain. Isliye, in APIs ka use karne se pehle, aapko is annotation se aware hona chahiye, aur apne code ko accordingly handle karna chahiye.</p>
        
  
        <p>ExperimentalWindowApi annotation ka use karne ke liye, aap apne class, function, ya property ko is annotation se mark kar sakte hain. Isse aapko compile-time ya runtime mein warning ya error mil sakta hai, agar aap experimental window API ka use kar rahe hain. Aap is warning ya error ko ignore bhi kar sakte hain, lekin aapko iske consequences ka risk lena padega.</p>
  
       
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
              name: `ExperimentalWindowApi`,
              id: "ExperimentalWindowApi()",
              code: `ExperimentalWindowApi()`,
              fullCode: `public ExperimentalWindowApi()`,

              des: `Is annotation ka use Window API (jaise WindowManager, WindowInsets, etc.) ke experimental features ko mark karne ke liye hota hai.`,

              longDes: `<p>@ExperimentalWindowApi annotation ka use inhi experimental features ko identify karne ke liye hota hai. Agar aap kisi experimental feature ko use karte hain aur aapne is annotation ko code mein include kiya hai, to aapko pata chal jata hai ki aapka code future releases mein potentially break ho sakta hai. Isi tarah se, developers ko ye indication milti hai ki wo feature experimental hai aur unka use caution ke saath karna chahiye.</p>

              <p>Yadi aap is annotation ko kisi method, class, ya interface ke upar lagate hain, to yeh indicate karta hai ki us feature ka use experimental hai. Isse developers ko pata chal jata hai ki woh feature stable nahi hai aur future mein changes ho sakte hain.</p>
              `,
              parameter: [],
            },
 
          ],
        },
   
      
     
  

      },
    });
  };
  