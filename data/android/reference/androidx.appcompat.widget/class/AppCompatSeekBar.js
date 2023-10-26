module.exports.AppCompatSeekBar = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "AppCompatSeekBar",
      hCode: `public class <a href="#AppCompatSeekBar">AppCompatSeekBar</a>  extends SeekBar`,
  
      des: 
        `
        <p>Ye class, SeekBar widget ka AppCompat version hai, jo backward compatibility ko support karta hai.</p>
        
  
        <p>AppCompatSeekBar class, SeekBar class ka subclass hai aur AppCompatProgressBar class se inherit karti hai. Iska use numeric values ke range ko select karne ke liye kiya jata hai, jaise volume control, brightness control, seekable progress bar, etc.</p>
  
       
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
              name: `AppCompatSeekBar`,
              id: "AppCompatSeekBar(Context)",
              code: `<a href="#AppCompatSeekBar(Context)">AppCompatSeekBar</a>(@NonNull Context context)`,
              fullCode: `public <a href="#AppCompatSeekBar(Context)">AppCompatSeekBar</a>(@NonNull Context context)`,

              des: `Ye constructor, AppCompatSeekBar view ko programmaticaly create karne aur initialize karne ke liye hota hai.`,

              longDes: `
              <p>Is constructor, AppCompatSeekBar view ko programmaticaly create karne aur initialize karne ke liye hota hai. Is constructor ko use karke aap ek naya AppCompatSeekBar object create kar sakte hain aur usko programmatically customize kar sakte hain.</p>

              <p>AppCompatSeekBar ek hissa hai Android Support Library (ab AndroidX ke naam se jana jata hai) ka, jo Android framework ke compatibility ke liye provide kiya gaya hai. Ye class SeekBar class ka ek enhanced version hai, jise older Android versions mein bhi consistent tarike se use kiya ja sakta hai. SeekBar view, user se ek range ya progress ko select karne ke liye slideable thumb aur track ko display karta hai. Isse user, ek specific range ke beech mein value choose kar sakta hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter ek Context object hai, jise aap constructor ko call kar rahe hain. Context, view ko create karne aur resources ko access karne ke liye use hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `AppCompatSeekBar`,
              id: "AppCompatSeekBar(Context,AttributeSet)",
              code: `<a href="#AppCompatSeekBar(Context,AttributeSet)">AppCompatSeekBar</a>(@NonNull Context context, @Nullable AttributeSet attrs)`,
              fullCode: `public <a href="#AppCompatSeekBar(Context,AttributeSet)">AppCompatSeekBar</a>(@NonNull Context context, @Nullable AttributeSet attrs)`,

              des: `Ye constructor, AppCompatSeekBar view ko XML layout file se inflate karne aur initialize karne ke liye hota hai. Is constructor mein AppCompatSeekBar view ko XML attributes ke sath initialize karne ki capability hoti hai.`,

              longDes: `
              <p>Is constructor, AppCompatSeekBar view ko XML layout file se inflate karne aur initialize karne ke liye hota hai. Is constructor ko use karke aap ek naya AppCompatSeekBar object create kar sakte hain aur use XML layout file mein define ki gayi attributes ke sath initialize kar sakte hain.</p>

              <p>Is constructor mein attrs parameter ek AttributeSet object hai, jisse XML attributes ko represent kiya jata hai. Jab aap AppCompatSeekBar view ko XML layout file se inflate karte hain, to XML attributes AttributeSet ke roop mein attrs parameter mein receive hote hain, jinhe aap view ke proper initialization ke liye use kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter ek Context object hai, jise aap constructor ko call kar rahe hain. Context, view ko inflate karne aur resources ko access karne ke liye use hota hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Ye parameter ek AttributeSet object hai, jisse XML attributes ko represent kiya jata hai. Isse view ke XML attributes ko extract karne ke liye use kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `AppCompatSeekBar`,
              id: "AppCompatSeekBar(Context,AttributeSet,int)",
              code: `<a href="#AppCompatSeekBar(Context,AttributeSet,int)">AppCompatSeekBar</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,
              fullCode: `public <a href="#AppCompatSeekBar(Context,AttributeSet,int)">AppCompatSeekBar</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,

              des: `Ye constructor, AppCompatSeekBar view ko XML layout file se inflate karne aur initialize karne ke liye hota hai. Is constructor mein AppCompatSeekBar view ko XML attributes ke sath initialize karne ki capability hoti hai, sath hi sath default style attributes ko apply karne mein madad karta hai.`,

              longDes: `
              <p>Is constructor, AppCompatSeekBar view ko XML layout file se inflate karne aur initialize karne ke liye hota hai. Is constructor ko use karke aap ek naya AppCompatSeekBar object create kar sakte hain aur use XML layout file mein define ki gayi attributes ke sath initialize kar sakte hain.</p>

              <p>Is constructor mein attrs parameter ek AttributeSet object hai, jisse XML attributes ko represent kiya jata hai. Jab aap AppCompatSeekBar view ko XML layout file se inflate karte hain, to XML attributes AttributeSet ke roop mein attrs parameter mein receive hote hain, jinhe aap view ke proper initialization ke liye use kar sakte hain.</p>

              <p>defStyleAttr parameter ek integer value hai, jo default style attribute resource ID ko represent karta hai. Isse view ko XML attributes ke liye default style attributes apply karne mein madad milti hai. Agar aapne XML layout file mein kisi attribute ka value specify nahi kiya hai, to us attribute ke liye default value default style attributes se apply ho jayega.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter ek Context object hai, jise aap constructor ko call kar rahe hain. Context, view ko inflate karne aur resources ko access karne ke liye use hota hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Ye parameter ek AttributeSet object hai, jisse XML attributes ko represent kiya jata hai. Isse view ke XML attributes ko extract karne ke liye use kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `int defStyleAttr`,
                        des:`<p>Ye parameter ek integer value hai, jo default style attribute resource ID ko represent karta hai. Isse view ko XML attributes ke liye default style attributes apply karne mein madad milti hai.</p>`,
                      },
                    ],
                  },
              ],
            },

          ],
        },
  
        publicMethod: {
          success: true,
          name: "Public Methods",
  
          method: [
            {
              dep: false,
              name: "jumpDrawablesToCurrentState",
              id: "jumpDrawablesToCurrentState()",
              dataTypeName: `void`,
              code: `<a href="#jumpDrawablesToCurrentState()">jumpDrawablesToCurrentState</a>)`,
  
              fullCode: `public void <a href="#jumpDrawablesToCurrentState()">jumpDrawablesToCurrentState</a>)`,

              des: `Ye method, AppCompatSeekBar view ke drawables (images) ko unke current state par jump karne ke liye hota hai.`,
  
              longDes: `
              <p>jumpDrawablesToCurrentState() method ka use seek bar ke drawables (thumb aur track) ke animation effect ko control karne ke liye hota hai. Jab user seek bar ko touch karta hai, tab thumb drawable normally ek press (touch) state mein display hota hai aur track drawable bhi ek active state mein display hota hai. Jab user touch ko release karta hai, tab thumb aur track drawable apne normal state mein wapas laut jate hain.</p>
              `,

            
              parameter: [],
            },

  

          ],
        },
  
        
      
        protectedMethod: {
          success: true,
          name: "Protected methods",
  
          method: [
            {
              dep: false,
              name: "drawableStateChanged",
              id: "drawableStateChanged()",
              dataTypeName: `void`,
              code: `<a href="#drawableStateChanged()">drawableStateChanged</a>()`,
  
              fullCode: `protected void <a href="#drawableStateChanged()">drawableStateChanged</a>()`,
  
              des: `Ye method, AppCompatSeekBar view ke drawables (images) ke state mein kisi bhi tarah ki change hone par call hota hai. Is method ka use seek bar ke drawables ke appearance ko dynamically update karne ke liye hota hai. `,
  
              longDes: `
                <p>drawableStateChanged() method ka use seek bar ke drawables (thumb aur track) ke appearance ko state changes ke anusaar customize karne ke liye hota hai. Seek bar ke state change hone par jaise user usko press karta hai (focused state), touch events ke anusaar thumb aur track ke drawables ki appearance change hoti hai. Is method ko override karke aap apne custom drawables ka use kar sakte hain ya fir seek bar ke default behavior ko modify kar sakte hain.</p>
                    `,
  
              parameter: [],
            },
  


            {
              dep: false,
              name: "onDraw",
              id: "onDraw()",
              dataTypeName: `synchronized void`,
              code: `<a href="#onDraw()">onDraw</a>(Canvas canvas)`,
  
              fullCode: `synchronized protected void <a href="#onDraw()">onDraw</a>(Canvas canvas)`,
  
              des: `Ye method, AppCompatSeekBar view ke drawables (images) aur track ko render karne ke liye hota hai. Is method ka use seek bar ke visual representation ko custom tarike se draw karne ke liye hota hai.`,
  
              longDes: `
                <p>onDraw(Canvas canvas) method ka use seek bar ke visual representation (drawables aur track) ko custom tarike se render karne ke liye hota hai. Jab AppCompatSeekBar view ko screen par display kiya jata hai, tab is method ka call hota hai. Is method ko override karke aap apne custom drawables aur track ka use karke seek bar ko customize kar sakte hain.</p>
                    `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Canvas canvas`,
                        des:`<p>Ye parameter ek Canvas object hai, jiske upar aap custom drawing operations perform kar sakte hain. Is parameter ki madad se aap seek bar ke current state aur properties ke hisab se graphics elements ko display kar sakte hain.</p>`,
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
  