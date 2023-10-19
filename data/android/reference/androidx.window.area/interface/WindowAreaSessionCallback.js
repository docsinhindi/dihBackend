module.exports.WindowAreaSessionCallback = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "WindowAreaSessionCallback",
      hCode: "@ExperimentalWindowApi</br>public interface <a href='#WindowAreaSessionCallback'>WindowAreaSessionCallback</a>",
  
      des:`
      <p>Is interface ka use, Window Area Session ke events aur states ko monitor karne aur handle karne ke liye hota hai.</p>

      <p>Window Area Session, Android devices ke multiple physical areas (jaise ki foldable devices ke different screen segments) ko represent karta hai. Ye API, devices ke alag-alag areas ke liye alag-alag windows aur layouts ko control karne aur render karne ke liye use hota hai.</p>

      <p>Is interface ka use, Window Area Session ke events aur states ko monitor karne aur handle karne ke liye hota hai. Aap is interface ko implement karke apne app ke specific requirements ke according Window Area Session ke behavior ko customize kar sakte hain.</p>
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
              name: "onSessionEnded",
              id: "onSessionEnded()",
              dataTypeName: `abstract void`,
              code: `<a href="#onSessionEnded()">onSessionEnded</a>(Throwable t)`,
  
              fullCode: `abstract void <a href="#onSessionEnded()">onSessionEnded</a>(Throwable t)`,

              des: `onSessionEnded() method ka use karke aap window area session ke end hone par callback ko handle kar sakte hain.`,
  
              longDes: `<p>onSessionEnded() method ka use karke aap window area session ke end hone par callback ko handle kar sakte hain. Ye method window area session ke end hone ke reason ko represent karne ke liye ek Throwable object pass karta hai, jisse ki aap window area session ke end hone ke reason ko handle kar sakte hain.</p>`,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `Throwable t`,
                      des: `<p>Ye parameter ek Throwable object leta hai, jo window area session ke end hone ke reason ko represent karta hai.</p>`,
                    },
                  ],
                },
              ],
            },



            {
              dep: false,
              name: "onSessionStarted",
              id: "onSessionStarted()",
              dataTypeName: `abstract void`,
              code: `<a href="#onSessionStarted()">onSessionStarted</a>(@NonNull WindowAreaSession session)`,
  
              fullCode: `abstract void <a href="#onSessionStarted()">onSessionStarted</a>(@NonNull WindowAreaSession session)`,

              des: `onSessionStarted() method ka use karke aap window area session ke start hone par callback ko handle kar sakte hain.`,
  
              longDes: `<p>onSessionStarted() method ka use karke aap window area session ke start hone par callback ko handle kar sakte hain. Ye method window area session ke presenter object ko pass karta hai, jisse ki aap window area session ko handle kar sakte hain.</p>`,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull WindowAreaSession session`,
                      des: `<p>Ye parameter ek WindowAreaSession object leta hai, jo window area presentation session ko represent karta hai.</p>`,
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
  