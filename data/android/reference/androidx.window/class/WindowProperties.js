module.exports.WindowProperties = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "WindowProperties",
      hCode: `public static class <a href="#WindowProperties">WindowProperties</a>`,
  
      des: 
        `
        <p>Is class ka use Window Manager ke properties aur states ko access karne ke liye hota hai. Window Manager, Android OS ke underlaying system component hai, jo device screen par dikh rahe windows (jaise ki activities, dialogs, toasts) ko manage karta hai. WindowProperties class, WindowManager dwara manage kiye ja rahe windows ke properties ko represent karti hai.</p>
        
       
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
            name: "PROPERTY_ACTIVITY_EMBEDDING_ALLOW_SYSTEM_OVERRIDE",
            id: "",
            dataTypeName: `public static final @NonNull String`,
            code: `PROPERTY_ACTIVITY_EMBEDDING_ALLOW_SYSTEM_OVERRIDE`,

            fullCode: `public static final @NonNull String PROPERTY_ACTIVITY_EMBEDDING_ALLOW_SYSTEM_OVERRIDE`,

            des:`ye constant ka use karke, aap decide kar sakte ho ki system ko activity embedding ko override karne ki permission deni hai ya nahi.`,

            longDes:`
            <p>PROPERTY_ACTIVITY_EMBEDDING_ALLOW_SYSTEM_OVERRIDE constant ka use karke, aap decide kar sakte ho ki system ko activity embedding ko override karne ki permission deni hai ya nahi. Agar is constant ko true kar diya jaata hai, toh system activity embedding ko override nahi kar sakta. Agar is constant ko false kar diya jaata hai, toh system activity embedding ko override kar sakta hai.</p>
            `,

            parameter: [],
          },
          



          {
            dep: false,
            name: "PROPERTY_ACTIVITY_EMBEDDING_SPLITS_ENABLED",
            id: "",
            dataTypeName: `public static final @NonNull String`,
            code: `PROPERTY_ACTIVITY_EMBEDDING_SPLITS_ENABLED`,

            fullCode: `public static final @NonNull String PROPERTY_ACTIVITY_EMBEDDING_SPLITS_ENABLED`,

            des:`ye constant ka use karke, aap decide kar sakte ho ki activity embedding ke liye splits enable karna hai ya nahi.`,

            longDes:`
            <p>PROPERTY_ACTIVITY_EMBEDDING_SPLITS_ENABLED constant ka use karke, aap decide kar sakte ho ki activity embedding ke liye splits enable karna hai ya nahi. Agar is constant ko true kar diya jaata hai, toh splits enable ho jaate hain. Agar is constant ko false kar diya jaata hai, toh splits disable ho jaate hain.</p>
            `,

            parameter: [],
          },
          



          {
            dep: false,
            name: "PROPERTY_COMPAT_ALLOW_IGNORING_ORIENTATION_REQUEST_WHEN_LOOP_DETECTED",
            id: "",
            dataTypeName: `public static final @NonNull String`,
            code: `PROPERTY_COMPAT_ALLOW_IGNORING_ORIENTATION_REQUEST_WHEN_LOOP_DETECTED`,

            fullCode: `public static final @NonNull String PROPERTY_COMPAT_ALLOW_IGNORING_ORIENTATION_REQUEST_WHEN_LOOP_DETECTED`,

            des:`ye constant ka use karke, aap decide kar sakte ho ki loop detect hone par orientation request ignore karna hai ya nahi.`,

            longDes:`
            <p>PROPERTY_COMPAT_ALLOW_IGNORING_ORIENTATION_REQUEST_WHEN_LOOP_DETECTED constant ka use karke, aap decide kar sakte ho ki loop detect hone par orientation request ignore karna hai ya nahi. Agar is constant ko true kar diya jaata hai, toh orientation request ignore ho jaati hai. Agar is constant ko false kar diya jaata hai, toh orientation request nahi ignore hoti hai.</p>
            `,

            parameter: [],
          },
         



          {
            dep: false,
            name: "PROPERTY_COMPAT_ALLOW_MIN_ASPECT_RATIO_OVERRIDE",
            id: "",
            dataTypeName: `public static final @NonNull String`,
            code: `PROPERTY_COMPAT_ALLOW_MIN_ASPECT_RATIO_OVERRIDE`,

            fullCode: `public static final @NonNull String PROPERTY_COMPAT_ALLOW_MIN_ASPECT_RATIO_OVERRIDE`,

            des:`ye constant ka use karke, aap decide kar sakte ho ki minimum aspect ratio override karna hai ya nahi.`,

            longDes:`
            <p>PROPERTY_COMPAT_ALLOW_MIN_ASPECT_RATIO_OVERRIDE constant ka use karke, aap decide kar sakte ho ki minimum aspect ratio override karna hai ya nahi. Agar is constant ko true kar diya jaata hai, toh minimum aspect ratio override ho jaati hai. Agar is constant ko false kar diya jaata hai, toh minimum aspect ratio override nahi hoti hai.</p>
            `,

            parameter: [],
          },
          


          {
            dep: false,
            name: "PROPERTY_COMPAT_ALLOW_RESIZEABLE_ACTIVITY_OVERRIDES",
            id: "",
            dataTypeName: `public static final @NonNull String`,
            code: `PROPERTY_COMPAT_ALLOW_RESIZEABLE_ACTIVITY_OVERRIDES`,

            fullCode: `public static final @NonNull String PROPERTY_COMPAT_ALLOW_RESIZEABLE_ACTIVITY_OVERRIDES`,

            des:`ye constant ka use karke, aap decide kar sakte ho ki resizable activity overrides karna hai ya nahi.`,

            longDes:`
            <p>PROPERTY_COMPAT_ALLOW_RESIZEABLE_ACTIVITY_OVERRIDES constant ka use karke, aap decide kar sakte ho ki resizable activity overrides karna hai ya nahi. Agar is constant ko true kar diya jaata hai, toh resizable activity overrides ho jaati hai. Agar is constant ko false kar diya jaata hai, toh resizable activity overrides nahi hoti hai.</p>
            `,

            parameter: [],
          },
          




        ],
      },
  

      },
    });
  };
  