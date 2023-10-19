module.exports.AppCompatViewInflater = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "AppCompatViewInflater",
      hCode: `public class <a href="#AppCompatViewInflater">AppCompatViewInflater</a>`,
  
      des: 
        `
        <p>AppCompatViewInflater class ka use, AppCompat library ke features aur backward compatibility ko support karne ke liye kiya jata hai. Is class ka main purpose, layout XML files se views inflate karne ke process me AppCompat library ka support add karna hai.</p>
        
  
        <p>AppCompatViewInflater class ka use karke, developers custom view inflation process me AppCompat library ka support add kar sakte hai. Is class ka use karte hue, backward compatibility ke sath AppCompat theme, styling, aur features ko views me integrate kiya ja sakta hai.</p>
  
       
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
              name: `AppCompatViewInflater`,
              id: "AppCompatViewInflater()",
              code: `AppCompatViewInflater()`,
              fullCode: `public AppCompatViewInflater()`,

              des: `Is constructor ka use AppCompatViewInflater object banane ke liye kiya jata hai.`,

              longDes: `<p>Is constructor ka use AppCompatViewInflater object banane ke liye kiya jata hai.</p>

              <p>Is constructor ka use, custom LayoutInflater.Factory2 implementation ke liye AppCompatViewInflater object create karne ke liye kiya jata hai. Ye constructor subclass ke objects ko instantiate karne me help karta hai, jisse LayoutInflater ke view inflation process me AppCompat library ka support mil sake.</p>
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
              name: "createView",
              id: "createView()",
              dataTypeName: `final @Nullable View`,
              code: `<a href="#createView()">createView</a>(
    @Nullable View parent,
    @NonNull String name,
    @NonNull Context context,
    @NonNull AttributeSet attrs,
    boolean inheritContext,
    boolean readAndroidTheme,
    boolean readAppTheme,
    boolean wrapContext
)`,
  
              fullCode: `public final @Nullable View <a href="#createView()">createView</a>(
    @Nullable View parent,
    @NonNull String name,
    @NonNull Context context,
    @NonNull AttributeSet attrs,
    boolean inheritContext,
    boolean readAndroidTheme,
    boolean readAppTheme,
    boolean wrapContext
)`,

              des: `createView() method ka use karke hum custom views ko inflate kar sakte hain.`,
  
              longDes: `
              <p>createView() method ka use karke hum custom views ko inflate kar sakte hain. Method ke parameters ke through hum layout inflation process ko customize kar sakte hain aur custom views ko desired behavior aur appearance ke saath inflate kar sakte hain.</p>

              <p>createView() method, layout inflation process ko control karta hai aur LayoutInflater class ke default behavior ko customize karne ki flexibility deta hai. Is method ke andar hum custom views ko inflate karne, unko customize karne, aur properties ko set karne ka code implement kar sakte hain.</p>
              `,

             

  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable View parent`,
                        des:`<p>Parent view, jisme inflated view ko attach karna hai. Is parameter ko null bhi rakh sakte hain, agar parent view nahi hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull String name`,
                        des:`<p>Inflate karne wale view ka fully qualified class name.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Context object, jisme view ko inflate karna hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull AttributeSet attrs`,
                        des:`<p>View ke XML attributes ko represent karne wala AttributeSet object.</p>`,
                      },
                      {
                        dataTypeName: `boolean inheritContext`,
                        des:`<p>Boolean value indicating whether view ko parent context se inherit karna hai ya nahi.</p>`,
                      },
                      {
                        dataTypeName: `boolean readAndroidTheme`,
                        des:`<p>Boolean value indicating whether view ko Android framework theme se attributes read karne hai ya nahi.</p>`,
                      },
                      {
                        dataTypeName: `boolean readAppTheme`,
                        des:`<p>Boolean value indicating whether view ko application theme se attributes read karne hai ya nahi.</p>`,
                      },
                      {
                        dataTypeName: `boolean wrapContext`,
                        des:`<p>Boolean value indicating whether view ko ContextWrapper se wrap karke inflate karna hai ya nahi.</p>`,
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
                name: "createAutoCompleteTextView",
                id: "createAutoCompleteTextView()",
                dataTypeName: `@NonNull AppCompatAutoCompleteTextView`,
                code: `<a href="#createAutoCompleteTextView()">createAutoCompleteTextView</a>(Context context, AttributeSet attrs)`,
    
                fullCode: `protected @NonNull AppCompatAutoCompleteTextView <a href="#createAutoCompleteTextView()">createAutoCompleteTextView</a>(Context context, AttributeSet attrs)`,

                des: `Ye method, AppCompatAutoCompleteTextView view object ko create karne aur initialize karne ke liye use hota hai.`,
    
                longDes: `
                <p>createAutoCompleteTextView() method ka use karke hum AppCompatAutoCompleteTextView view object ko create kar sakte hain. Is method ke through hum AppCompatAutoCompleteTextView view ko inflate kar sakte hain aur usko customize karne ke liye attributes aur context provide kar sakte hain.</p>

                <p>createAutoCompleteTextView() method, AppCompatAutoCompleteTextView view object ko create karta hai. Is method ke andar hum AppCompatAutoCompleteTextView object ko instantiate karke attributes aur context ke saath customize kar sakte hain.</p>
                    `,
    
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Context object, jisme view ko inflate karna hai.</p>`,
                      },
                      {
                        dataTypeName: `AttributeSet attrs`,
                        des:`<p>View ke XML attributes ko represent karne wala AttributeSet object.</p>`,
                      },
                    ],
                  },
                ],
              },



              {
                dep: false,
                name: "createButton",
                id: "createButton()",
                dataTypeName: `@NonNull AppCompatButton`,
                code: `<a href="#createButton()">createButton</a>(Context context, AttributeSet attrs)`,
    
                fullCode: `protected @NonNull AppCompatButton <a href="#createButton()">createButton</a>(Context context, AttributeSet attrs)`,

                des: `Ye method, AppCompatButton view object ko create karne aur initialize karne ke liye use hota hai.`,
    
                longDes: `
                <p>createButton() method ka use karke hum AppCompatButton view object ko create kar sakte hain. Is method ke through hum AppCompatButton view ko inflate kar sakte hain aur usko customize karne ke liye attributes aur context provide kar sakte hain.</p>

                <p>createButton() method, AppCompatButton view object ko create karta hai. Is method ke andar hum AppCompatButton object ko instantiate karke attributes aur context ke saath customize kar sakte hain.</p>
                    `,
    
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Context object, jisme view ko inflate karna hai.</p>`,
                      },
                      {
                        dataTypeName: `AttributeSet attrs`,
                        des:`<p>View ke XML attributes ko represent karne wala AttributeSet object.</p>`,
                      },
                    ],
                  },
                ],
              },



              {
                dep: false,
                name: "createCheckBox",
                id: "createCheckBox()",
                dataTypeName: `@NonNull AppCompatCheckBox`,
                code: `<a href="#createCheckBox()">createCheckBox</a>(Context context, AttributeSet attrs)`,
    
                fullCode: `protected @NonNull AppCompatCheckBox <a href="#createCheckBox()">createCheckBox</a>(Context context, AttributeSet attrs)`,

                des: `Ye method, AppCompatCheckBox view object ko create karne aur initialize karne ke liye use hota hai.`,
    
                longDes: `
                <p>createCheckBox() method ka use karke hum AppCompatCheckBox view object ko create kar sakte hain. Is method ke through hum AppCompatCheckBox view ko inflate kar sakte hain aur usko customize karne ke liye attributes aur context provide kar sakte hain.</p>

                <p>createCheckBox() method, AppCompatCheckBox view object ko create karta hai. Is method ke andar hum AppCompatCheckBox object ko instantiate karke attributes aur context ke saath customize kar sakte hain.</p>
                    `,
    
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Context object, jisme view ko inflate karna hai.</p>`,
                      },
                      {
                        dataTypeName: `AttributeSet attrs`,
                        des:`<p>View ke XML attributes ko represent karne wala AttributeSet object.</p>`,
                      },
                    ],
                  },
                ],
              },



              {
                dep: false,
                name: "createCheckedTextView",
                id: "createCheckedTextView()",
                dataTypeName: `@NonNull AppCompatCheckedTextView`,
                code: `<a href="#createCheckedTextView()">createCheckedTextView</a>(Context context, AttributeSet attrs)`,
    
                fullCode: `protected @NonNull AppCompatCheckedTextView <a href="#createCheckedTextView()">createCheckedTextView</a>(Context context, AttributeSet attrs)`,

                des: `Ye method, AppCompatCheckedTextView view object ko create aur initialize karne ke liye use hota hai.`,
    
                longDes: `
                <p>createCheckedTextView() method ka use karke hum AppCompatCheckedTextView view object ko inflate kar sakte hain. Is method ke through hum AppCompatCheckedTextView view ko create kar sakte hain aur usko customize karne ke liye attributes aur context provide kar sakte hain.</p>

                <p>createCheckedTextView() method, AppCompatCheckedTextView view object ko create karta hai. Is method ke andar hum AppCompatCheckedTextView object ko instantiate karke attributes aur context ke saath customize kar sakte hain.</p>
                    `,
    
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Context object, jisme view ko inflate karna hai.</p>`,
                      },
                      {
                        dataTypeName: `AttributeSet attrs`,
                        des:`<p>View ke XML attributes ko represent karne wala AttributeSet object.</p>`,
                      },
                    ],
                  },
                ],
              },



              {
                dep: false,
                name: "createEditText",
                id: "createEditText()",
                dataTypeName: `@NonNull AppCompatEditText`,
                code: `<a href="#createEditText()">createEditText</a>(Context context, AttributeSet attrs)`,
    
                fullCode: `protected @NonNull AppCompatEditText <a href="#createEditText()">createEditText</a>(Context context, AttributeSet attrs)`,

                des: `Ye method, AppCompatEditText view object ko create aur initialize karne ke liye use hota hai.`,
    
                longDes: `
                <p>createEditText() method ka use karke hum AppCompatEditText view object ko inflate kar sakte hain. Is method ke through hum AppCompatEditText view ko create kar sakte hain aur usko customize karne ke liye attributes aur context provide kar sakte hain.</p>

                <p>createEditText() method, AppCompatEditText view object ko create karta hai. Is method ke andar hum AppCompatEditText object ko instantiate karke attributes aur context ke saath customize kar sakte hain.</p>
                    `,
    
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Context object, jisme view ko inflate karna hai.</p>`,
                      },
                      {
                        dataTypeName: `AttributeSet attrs`,
                        des:`<p>View ke XML attributes ko represent karne wala AttributeSet object.</p>`,
                      },
                    ],
                  },
                ],
              },



              {
                dep: false,
                name: "createImageButton",
                id: "createImageButton()",
                dataTypeName: `@NonNull AppCompatImageButton`,
                code: `<a href="#createImageButton()">createImageButton</a>(Context context, AttributeSet attrs)`,
    
                fullCode: `protected @NonNull AppCompatImageButton <a href="#createImageButton()">createImageButton</a>(Context context, AttributeSet attrs)`,

                des: `Ye method, AppCompatImageButton view object ko create aur initialize karne ke liye use hota hai.`,
    
                longDes: `
                <p>createImageButton() method ka use karke hum AppCompatImageButton view object ko inflate kar sakte hain. Is method ke through hum AppCompatImageButton view ko create kar sakte hain aur usko customize karne ke liye attributes aur context provide kar sakte hain.</p>

                <p>createImageButton() method, AppCompatImageButton view object ko create karta hai. Is method ke andar hum AppCompatImageButton object ko instantiate karke attributes aur context ke saath customize kar sakte hain.</p>
                    `,
    
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Context object, jisme view ko inflate karna hai.</p>`,
                      },
                      {
                        dataTypeName: `AttributeSet attrs`,
                        des:`<p>View ke XML attributes ko represent karne wala AttributeSet object.</p>`,
                      },
                    ],
                  },
                ],
              },



              {
                dep: false,
                name: "createImageView",
                id: "createImageView()",
                dataTypeName: `@NonNull AppCompatImageView`,
                code: `<a href="#createImageView()">createImageView</a>(Context context, AttributeSet attrs)`,
    
                fullCode: `protected @NonNull AppCompatImageView <a href="#createImageView()">createImageView</a>(Context context, AttributeSet attrs)`,

                des: `Ye method, AppCompatImageView view object ko create aur initialize karne ke liye use hota hai.`,
    
                longDes: `
                <p>createImageView() method ka use karke hum AppCompatImageView view object ko inflate kar sakte hain. Is method ke through hum AppCompatImageView view ko create kar sakte hain aur usko customize karne ke liye attributes aur context provide kar sakte hain.</p>

                <p>createImageView() method, AppCompatImageView view object ko create karta hai. Is method ke andar hum AppCompatImageView object ko instantiate karke attributes aur context ke saath customize kar sakte hain.</p>
                    `,
    
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Context object, jisme view ko inflate karna hai.</p>`,
                      },
                      {
                        dataTypeName: `AttributeSet attrs`,
                        des:`<p>View ke XML attributes ko represent karne wala AttributeSet object.</p>`,
                      },
                    ],
                  },
                ],
              },



              {
                dep: false,
                name: "createMultiAutoCompleteTextView",
                id: "createMultiAutoCompleteTextView()",
                dataTypeName: `@NonNull AppCompatMultiAutoCompleteTextView`,
                code: `<a href="#createMultiAutoCompleteTextView()">createMultiAutoCompleteTextView</a>(Context context, AttributeSet attrs)`,
    
                fullCode: `protected @NonNull AppCompatMultiAutoCompleteTextView <a href="#createMultiAutoCompleteTextView()">createMultiAutoCompleteTextView</a>(Context context, AttributeSet attrs)`,

                des: `Ye method, AppCompatMultiAutoCompleteTextView view object ko create aur initialize karne ke liye use hota hai.`,
    
                longDes: `
                <p>createMultiAutoCompleteTextView() method ka use karke hum AppCompatMultiAutoCompleteTextView view object ko inflate kar sakte hain. Is method ke through hum AppCompatMultiAutoCompleteTextView view ko create kar sakte hain aur usko customize karne ke liye attributes aur context provide kar sakte hain.</p>

                <p>createMultiAutoCompleteTextView() method, AppCompatMultiAutoCompleteTextView view object ko create karta hai. Is method ke andar hum AppCompatMultiAutoCompleteTextView object ko instantiate karke attributes aur context ke saath customize kar sakte hain.</p>
                    `,
    
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Context object, jisme view ko inflate karna hai.</p>`,
                      },
                      {
                        dataTypeName: `AttributeSet attrs`,
                        des:`<p>View ke XML attributes ko represent karne wala AttributeSet object.</p>`,
                      },
                    ],
                  },
                ],
              },



              {
                dep: false,
                name: "createRadioButton",
                id: "createRadioButton()",
                dataTypeName: `@NonNull AppCompatRadioButton`,
                code: `<a href="#createRadioButton()">createRadioButton</a>(Context context, AttributeSet attrs)`,
    
                fullCode: `protected @NonNull AppCompatRadioButton <a href="#createRadioButton()">createRadioButton</a>(Context context, AttributeSet attrs)`,

                des: `Ye method, AppCompatRadioButton view object ko create aur initialize karne ke liye use hota hai.`,
    
                longDes: `
                <p>createRadioButton() method ka use karke hum AppCompatRadioButton view object ko inflate kar sakte hain. Is method ke through hum AppCompatRadioButton view ko create kar sakte hain aur usko customize karne ke liye attributes aur context provide kar sakte hain.</p>

                <p>createRadioButton() method, AppCompatRadioButton view object ko create karta hai. Is method ke andar hum AppCompatRadioButton object ko instantiate karke attributes aur context ke saath customize kar sakte hain.</p>
                    `,
    
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Context object, jisme view ko inflate karna hai.</p>`,
                      },
                      {
                        dataTypeName: `AttributeSet attrs`,
                        des:`<p>View ke XML attributes ko represent karne wala AttributeSet object.</p>`,
                      },
                    ],
                  },
                ],
              },



              {
                dep: false,
                name: "createRatingBar",
                id: "createRatingBar()",
                dataTypeName: `@NonNull AppCompatRatingBar`,
                code: `<a href="#createRatingBar()">createRatingBar</a>(Context context, AttributeSet attrs)`,
    
                fullCode: `protected @NonNull AppCompatRatingBar <a href="#createRatingBar()">createRatingBar</a>(Context context, AttributeSet attrs)`,

                des: `Ye method, AppCompatRatingBar view object ko create aur initialize karne ke liye use hota hai.`,
    
                longDes: `
                <p>createRatingBar() method ka use karke hum AppCompatRatingBar view object ko inflate kar sakte hain. Is method ke through hum AppCompatRatingBar view ko create kar sakte hain aur usko customize karne ke liye attributes aur context provide kar sakte hain.</p>

                <p>createRatingBar() method, AppCompatRatingBar view object ko create karta hai. Is method ke andar hum AppCompatRatingBar object ko instantiate karke attributes aur context ke saath customize kar sakte hain.</p>
                    `,
    
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Context object, jisme view ko inflate karna hai.</p>`,
                      },
                      {
                        dataTypeName: `AttributeSet attrs`,
                        des:`<p>View ke XML attributes ko represent karne wala AttributeSet object.</p>`,
                      },
                    ],
                  },
                ],
              },



              {
                dep: false,
                name: "createSeekBar",
                id: "createSeekBar()",
                dataTypeName: `@NonNull AppCompatSeekBar`,
                code: `<a href="#createSeekBar()">createSeekBar</a>(Context context, AttributeSet attrs)`,
    
                fullCode: `protected @NonNull AppCompatSeekBar <a href="#createSeekBar()">createSeekBar</a>(Context context, AttributeSet attrs)`,

                des: `Ye method, AppCompatSeekBar view object ko create aur initialize karne ke liye use hota hai.`,
    
                longDes: `
                <p>createSeekBar() method ka use karke hum AppCompatSeekBar view object ko inflate kar sakte hain. Is method ke through hum AppCompatSeekBar view ko create kar sakte hain aur usko customize karne ke liye attributes aur context provide kar sakte hain.</p>

                <p>createSeekBar() method, AppCompatSeekBar view object ko create karta hai. Is method ke andar hum AppCompatSeekBar object ko instantiate karke attributes aur context ke saath customize kar sakte hain.</p>
                    `,
    
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Context object, jisme view ko inflate karna hai.</p>`,
                      },
                      {
                        dataTypeName: `AttributeSet attrs`,
                        des:`<p>View ke XML attributes ko represent karne wala AttributeSet object.</p>`,
                      },
                    ],
                  },
                ],
              },



              {
                dep: false,
                name: "createSpinner",
                id: "createSpinner()",
                dataTypeName: `@NonNull AppCompatSpinner`,
                code: `<a href="#createSpinner()">createSpinner</a>(Context context, AttributeSet attrs)`,
    
                fullCode: `protected @NonNull AppCompatSpinner <a href="#createSpinner()">createSpinner</a>(Context context, AttributeSet attrs)`,

                des: `Ye method, AppCompatSpinner view object ko create aur initialize karne ke liye use hota hai.`,
    
                longDes: `
                <p>createSpinner() method ka use karke hum AppCompatSpinner view object ko inflate kar sakte hain. Is method ke through hum AppCompatSpinner view ko create kar sakte hain aur usko customize karne ke liye attributes aur context provide kar sakte hain.</p>

                <p>createSpinner() method, AppCompatSpinner view object ko create karta hai. Is method ke andar hum AppCompatSpinner object ko instantiate karke attributes aur context ke saath customize kar sakte hain.</p>
                    `,
    
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Context object, jisme view ko inflate karna hai.</p>`,
                      },
                      {
                        dataTypeName: `AttributeSet attrs`,
                        des:`<p>View ke XML attributes ko represent karne wala AttributeSet object.</p>`,
                      },
                    ],
                  },
                ],
              },



              {
                dep: false,
                name: "createTextView",
                id: "createTextView()",
                dataTypeName: `@NonNull AppCompatTextView`,
                code: `<a href="#createTextView()">createTextView</a>(Context context, AttributeSet attrs)`,
    
                fullCode: `protected @NonNull AppCompatTextView <a href="#createTextView()">createTextView</a>(Context context, AttributeSet attrs)`,

                des: `Ye method, AppCompatTextView view object ko create aur initialize karne ke liye use hota hai.`,
    
                longDes: `
                <p>createTextView() method ka use karke hum AppCompatTextView view object ko inflate kar sakte hain. Is method ke through hum AppCompatTextView view ko create kar sakte hain aur usko customize karne ke liye attributes aur context provide kar sakte hain.</p>

                <p>createTextView() method, AppCompatTextView view object ko create karta hai. Is method ke andar hum AppCompatTextView object ko instantiate karke attributes aur context ke saath customize kar sakte hain.</p>
                    `,
    
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Context object, jisme view ko inflate karna hai.</p>`,
                      },
                      {
                        dataTypeName: `AttributeSet attrs`,
                        des:`<p>View ke XML attributes ko represent karne wala AttributeSet object.</p>`,
                      },
                    ],
                  },
                ],
              },



              {
                dep: false,
                name: "createToggleButton",
                id: "createToggleButton()",
                dataTypeName: `@NonNull AppCompatToggleButton`,
                code: `<a href="#createToggleButton()">createToggleButton</a>(Context context, AttributeSet attrs)`,
    
                fullCode: `protected @NonNull AppCompatToggleButton <a href="#createToggleButton()">createToggleButton</a>(Context context, AttributeSet attrs)`,

                des: `Ye method, AppCompatToggleButton view object ko create aur initialize karne ke liye use hota hai.`,
    
                longDes: `
                <p>createToggleButton() method ka use karke hum AppCompatToggleButton view object ko inflate kar sakte hain. Is method ke through hum AppCompatToggleButton view ko create kar sakte hain aur usko customize karne ke liye attributes aur context provide kar sakte hain.</p>

                <p>createToggleButton() method, AppCompatToggleButton view object ko create karta hai. Is method ke andar hum AppCompatToggleButton object ko instantiate karke attributes aur context ke saath customize kar sakte hain.</p>
                    `,
    
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Context object, jisme view ko inflate karna hai.</p>`,
                      },
                      {
                        dataTypeName: `AttributeSet attrs`,
                        des:`<p>View ke XML attributes ko represent karne wala AttributeSet object.</p>`,
                      },
                    ],
                  },
                ],
              },


              {
                dep: false,
                name: "createView",
                id: "createView()",
                dataTypeName: `@Nullable View`,
                code: `<a href="#createView()">createView</a>(Context context, String name, AttributeSet attrs)`,
    
                fullCode: `protected @Nullable View <a href="#createView()">createView</a>(Context context, String name, AttributeSet attrs)`,

                des: `Ye method, XML layout file mein specify kiye gaye view element ko inflate karne ke liye use hota hai.`,
    
                longDes: `
                <p>createView() method ka use karke hum kisi bhi view element ko inflate kar sakte hain, jaise TextView, Button, ImageView, LinearLayout, RelativeLayout, etc. Is method ke through hum specified name parameter ke corresponding view element ko create kar sakte hain aur usko customize karne ke liye attributes aur context provide kar sakte hain.</p>

                <p>createView() method, specified name parameter ke corresponding view element ko create karta hai. Is method ke andar hum View object ko instantiate karke attributes aur context ke saath customize kar sakte hain.</p>
                    `,
    
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Context object, jisme view ko inflate karna hai.</p>`,
                      },
                      {
                        dataTypeName: `String name`,
                        des:`<p>View element ka name, jaise "TextView", "Button", "ImageView", "LinearLayout", etc.</p>`,
                      },
                      {
                        dataTypeName: `AttributeSet attrs`,
                        des:`<p>View ke XML attributes ko represent karne wala AttributeSet object.</p>`,
                      },
                    ],
                  },
                ],
              },
//

            ]
        }
    
  

      },
    });
  };
  