module.exports.AppCompatRatingBar = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "AppCompatRatingBar",
      hCode: `public class <a href="#AppCompatRatingBar">AppCompatRatingBar</a>  extends RatingBar`,
  
      des: 
        `
        <p>Ye class, RatingBar widget ka AppCompat version hai, jo backward compatibility ko support karta hai.</p>
        
  
        <p>AppCompatRatingBar class, RatingBar class ka subclass hai aur AppCompatProgressBar class se inherit karti hai. Iska use numeric ratings ko display karne aur user se rating input lene ke liye kiya jata hai.</p>
  
       
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
              name: `AppCompatRatingBar`,
              id: "AppCompatRatingBar(Context)",
              code: `AppCompatRatingBar(@NonNull Context context)`,
              fullCode: `public AppCompatRatingBar(@NonNull Context context)`,

              des: `Ye constructor, AppCompatRatingBar class ka ek instance (object) create karne ke liye use hota hai.`,

              longDes: `
              <p>Is constructor ka use AppCompatRatingBar class ka ek object create karne ke liye hota hai. Is constructor ko use karke aap ek AppCompatRatingBar view create kar sakte hain, jise aap apne Android application me use kar sakte hain.</p>

              <p>AppCompatRatingBar ek Android Support Library (ab AndroidX ke naam se jana jata hai) ka view class hai, jo compatibility ke liye provide kiya gaya hai. Ye RatingBar widget ka enhanced version hai, jo older Android versions mein bhi consistent behavior aur styling provide karta hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter ek Context object hai, jiski madad se widget ko initialize aur display karne ke liye required resources aur configurations milte hain. Aap is parameter mein Activity, Fragment, ya Application context pass kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `AppCompatRatingBar`,
              id: "AppCompatRatingBar(Context,AttributeSet)",
              code: `AppCompatRatingBar(@NonNull Context context, @Nullable AttributeSet attrs)`,
              fullCode: `public AppCompatRatingBar(@NonNull Context context, @Nullable AttributeSet attrs)`,

              des: `Ye constructor AppCompatRatingBar class ke object (instance) ko create karne mein use hota hai, jab aap rating bar widget ko XML layout mein define karte hain.`,

              longDes: `
              <p>Is constructor ka use, AppCompatRatingBar class ke ek object ko XML layout file se inflate karne aur initialize karne ke liye hota hai. Is constructor mein Context object aur AttributeSet object pass kiya jata hai.</p>

              <p>AppCompatRatingBar ek Android Support Library (ab AndroidX ke naam se jana jata hai) ka view class hai, jo compatibility ke liye provide kiya gaya hai. Ye RatingBar widget ka enhanced version hai, jo older Android versions mein bhi consistent behavior aur styling provide karta hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter ek Context object hai, jiski madad se widget ko initialize aur display karne ke liye required resources aur configurations milte hain. Aap is parameter mein Activity, Fragment, ya Application context pass kar sakte hain.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Ye parameter ek AttributeSet object hai, jo XML layout file se AppCompatRatingBar attributes ko retrieve karne mein madad karta hai. XML layout file mein rating bar widget ke liye define kiye gaye attributes is object mein stored hote hain.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `AppCompatRatingBar`,
              id: "AppCompatRatingBar(Context,AttributeSet,int)",
              code: `AppCompatRatingBar(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,
              fullCode: `public AppCompatRatingBar(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,

              des: `Ye constructor AppCompatRatingBar class ke object (instance) ko create karne mein use hota hai, jab aap rating bar widget ko XML layout mein define karte hain aur usme default style (theme) apply karna chahte hain.`,

              longDes: `
              <p>Is constructor ka use, AppCompatRatingBar class ke ek object ko XML layout file se inflate karne aur initialize karne ke liye hota hai. Is constructor mein Context object, AttributeSet object aur defStyleAttr integer value pass kiya jata hai.</p>

              <p>AppCompatRatingBar ek Android Support Library (ab AndroidX ke naam se jana jata hai) ka view class hai, jo compatibility ke liye provide kiya gaya hai. Ye RatingBar widget ka enhanced version hai, jo older Android versions mein bhi consistent behavior aur styling provide karta hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter ek Context object hai, jiski madad se widget ko initialize aur display karne ke liye required resources aur configurations milte hain. Aap is parameter mein Activity, Fragment, ya Application context pass kar sakte hain.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Ye parameter ek AttributeSet object hai, jo XML layout file se AppCompatRatingBar attributes ko retrieve karne mein madad karta hai. XML layout file mein rating bar widget ke liye define kiye gaye attributes is object mein stored hote hain.</p>`,
                      },
                      {
                        dataTypeName: `int defStyleAttr`,
                        des:`<p>Ye ek integer value hai, jo XML layout file mein rating bar widget ke liye apply kiye gaye default style resource ID ko represent karta hai. Agar aap defStyleAttr ko 0 ya koi valid style resource ID se initialize karte hain, to us style ke according AppCompatRatingBar widget customize ho jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },


          ],
        },
  
     
  
      
        protectedMethod: {
          success: true,
          name: "Protected methods",
  
          method: [
            {
              dep: false,
              name: "onMeasure",
              id: "onMeasure()",
              dataTypeName: `synchronized void`,
              code: `<a href="#onMeasure()">onMeasure</a>(int widthMeasureSpec, int heightMeasureSpec)`,
  
              fullCode: `synchronized protected void <a href="#onMeasure()">onMeasure</a>(int widthMeasureSpec, int heightMeasureSpec)`,
  
              des: `Is method ki madad se widget ka final size calculate hota hai, jise screen par display kiya jayega.`,
  
              longDes: `
                <p>is method ka use AppCompatRatingBar widget ka size measure karne ke liye hota hai. Jab aap AppCompatRatingBar ko layout XML file mein define karte hain, to system onMeasure() method ko automatically call karta hai, taki ye measure kar sake ki widget ko kitna space diya jaye screen par display karne ke liye.</p>
                    `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int widthMeasureSpec`,
                        des:`<p>Ye parameter ek integer value hai, jo AppCompatRatingBar ke width dimension ke liye constraints (restrictions) provide karta hai. Is parameter mein width dimension ke size aur mode (e.g., MATCH_PARENT, WRAP_CONTENT, ya fixed size) encoded hote hain.</p>`,
                      },
                      {
                        dataTypeName: `int heightMeasureSpec`,
                        des:`<p>Ye parameter ek integer value hai, jo AppCompatRatingBar ke height dimension ke liye constraints provide karta hai. Is parameter mein height dimension ke size aur mode (e.g., MATCH_PARENT, WRAP_CONTENT, ya fixed size) encoded hote hain.</p>`,
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
  