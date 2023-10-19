module.exports.FoldingFeature = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "FoldingFeature",
      hCode: "public interface <a href='#FoldingFeature'>FoldingFeature</a> extends DisplayFeature",
  
      des:`
      <p>FoldingFeature interface ka use device ke foldable design elements ko describe karne aur unke attributes ko access karne ke liye hota hai. Foldable devices me, screens ko folding mechanism ke sath joda jata hai, aur is interface se aap is folding mechanism ko accurately represent aur access kar sakte hain.</p>
      `,
      
      img: [],
  
      list: {},
  
      summary: {
        success: true,
  
        publicMethod: {
          success: true,
          name: "Public Methods",
  
          method: [
            {
              dep: false,
              name: "getOcclusionType",
              id: "getOcclusionType()",
              dataTypeName: `abstract @NonNull FoldingFeature.OcclusionType`,
              code: `<a href="#getOcclusionType()">getOcclusionType</a>()`,
  
              fullCode: `abstract @NonNull FoldingFeature.OcclusionType <a href="#getOcclusionType()">getOcclusionType</a>()`,

              des: `Is method ka use folding feature ke occlusion type ko retrieve karne ke liye hota hai. Occlusion type yeh batata hai ki folding feature jab device ko fold karte samay kis tarah se screen elements ko occlude karta hai.`,
  
              longDes: `
              <p>Is method ka use FoldingFeature interface ke implementers (classes) mein hota hai, jaise ki foldable devices ko represent karne wali classes. Implementers ko getOcclusionType() method ko override karna hota hai taki woh apne specific folding feature ke occlusion type ko provide kar sake.</p>

              <p>Occlusion type ka pata lagane se app developers ko device ke foldable design aur functionality ke saath sahi tarike se deal karne mein madad milti hai, jaise ki content ko adjust karne, user interface ko optimize karne, ya transitions ko handle karne mein.</p>

              <p>Yeh method FoldingFeature.OcclusionType enumeration type ka object return karta hai, jo folding feature ke occlusion type ko represent karta hai. Occlusion type ke enumeration constants hote hain jaise ki NONE, HARDWARE, SOFTWARE, etc.</p>
              `,
  
              parameter: [],
            },


            {
              dep: false,
              name: "getOrientation",
              id: "getOrientation()",
              dataTypeName: `abstract @NonNull FoldingFeature.Orientation`,
              code: `<a href="#getOrientation()">getOrientation</a>()`,
  
              fullCode: `abstract @NonNull FoldingFeature.Orientation <a href="#getOrientation()">getOrientation</a>()`,

              des: `Is method ka use folding feature ke orientation ko retrieve karne ke liye hota hai. Orientation yeh batata hai ki folding feature device ko fold karte samay kis direction mein fold hota hai.`,
  
              longDes: `
              <p>Is method ka use FoldingFeature interface ke implementers (classes) mein hota hai, jaise ki foldable devices ko represent karne wali classes. Implementers ko getOrientation() method ko override karna hota hai taki woh apne specific folding feature ke orientation ko provide kar sake.</p>

              <p>Orientation ka pata lagane se app developers ko device ke foldable design aur functionality ke saath sahi tarike se deal karne mein madad milti hai, jaise ki content ko adjust karne, user interface ko optimize karne, ya transitions ko handle karne mein.</p>

              <p>Yeh method FoldingFeature.Orientation enumeration type ka object return karta hai, jo folding feature ke orientation ko represent karta hai. Orientation ke enumeration constants hote hain jaise ki HORIZONTAL aur VERTICAL.</p>
              `,
  
              parameter: [],
            },

            {
              dep: false,
              name: "getState",
              id: "getState()",
              dataTypeName: `abstract @NonNull FoldingFeature.State`,
              code: `<a href="#getState()">getState</a>()`,
  
              fullCode: `abstract @NonNull FoldingFeature.State <a href="#getState()">getState</a>()`,

              des: `Is method ka use folding feature ke state ko retrieve karne ke liye hota hai. State yeh batata hai ki folding feature device ko fold karte samay kis tarah se present hota hai, jaise fully open, half-folded, ya fully closed.`,
  
              longDes: `
              <p>Is method ka use FoldingFeature interface ke implementers (classes) mein hota hai, jaise ki foldable devices ko represent karne wali classes. Implementers ko getState() method ko override karna hota hai taki woh apne specific folding feature ke state ko provide kar sake.</p>

              <p>Device ke state ka pata lagane se app developers ko device ke configuration aur behavior ke saath sahi tarike se deal karne mein madad milti hai, jaise ki content ko adjust karne, user interface ko optimize karne, ya transitions ko handle karne mein.</p>

              <p>Yeh method FoldingFeature.State enumeration type ka object return karta hai, jo folding feature ke state ko represent karta hai. State ke enumeration constants hote hain jaise ki FULLY_OPENED, HALF_OPENED, FULLY_CLOSED, etc.</p>
              `,
  
              parameter: [],
            },

            {
              dep: false,
              name: "isSeparating",
              id: "isSeparating()",
              dataTypeName: `abstract boolean`,
              code: `<a href="#isSeparating()">isSeparating</a>()`,
  
              fullCode: `abstract boolean <a href="#isSeparating()">isSeparating</a>()`,

              des: `Is method ka use yeh pata lagane ke liye hota hai ki kya folding feature device ko fold karte samay screen elements ko separate karta hai ya nahi. Agar feature separating hai, toh screen elements alag-alag sections mein partition ho jate hain jab device fold hota hai.`,
  
              longDes: `
              <p>Is method ka use FoldingFeature interface ke implementers (classes) mein hota hai, jaise ki foldable devices ko represent karne wali classes. Implementers ko isSeparating() method ko override karna hota hai taki woh specific folding feature ke behavior ko provide kar sake.</p>

              <p>Yeh method developers ko device ke foldable design aur functionality ke saath sahi tarike se deal karne mein madad milti hai, jaise ki content ko adjust karne, user interface ko optimize karne, ya transitions ko handle karne mein.</p>

              <p>Yeh method ek boolean value return karta hai. true return hota hai agar folding feature device ko fold karte samay screen elements ko separate karta hai, aur false return hota hai agar nahi karta.</p>
              `,
  
              parameter: [],
            },
          ],
        },
      },
    });
  };
  