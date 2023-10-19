module.exports.WindowAreaPresentationSessionCallback = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "WindowAreaPresentationSessionCallback",
      hCode: "@ExperimentalWindowApi</br>public interface <a href='#WindowAreaPresentationSessionCallback'>WindowAreaPresentationSessionCallback</a>",
  
      des:`
      <p>Is interface ka use, Window Area API ke through Window Area Presentation Session ke events aur states ko monitor karne ke liye hota hai.</p>

      <p>Window Area Presentation Session, Android devices ke multiple physical areas (jaise ki foldable devices ke different screen segments) ko represent karta hai. Ye API, devices ke alag-alag areas ke liye alag-alag windows aur layouts ko control karne aur render karne ke liye use hota hai.</p>

      <p>Is interface ka use, Window Area Presentation Session ke events aur states ko monitor karne aur handle karne ke liye hota hai. Aap is interface ko implement karke apne app ke specific requirements ke according Window Area Presentation Session ke behavior ko customize kar sakte hain.</p>
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
              name: "onContainerVisibilityChanged",
              id: "onContainerVisibilityChanged()",
              dataTypeName: `abstract void`,
              code: `<a href="#onContainerVisibilityChanged()">onContainerVisibilityChanged</a>(boolean isVisible)`,
  
              fullCode: `abstract void <a href="#onContainerVisibilityChanged()">onContainerVisibilityChanged</a>(boolean isVisible)`,

              des: `onContainerVisibilityChanged() method ka use karke aap window area presentation session ke container ke visibility mein change ka notification receive kar sakte hain.`,
  
              longDes: `<p>onContainerVisibilityChanged() method ka use karke aap window area presentation session ke container ke visibility mein change ka notification receive kar sakte hain. Ye method window area presentation session ke container ka visibility real time mein reflect karta hai.</p>`,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `boolean isVisible`,
                      des: `<p>Ye parameter ek boolean value leta hai, jo window area presentation session ke container ke visibility ko represent karta hai.</p>`,
                    },
                  ],
                },
              ],
            },



            {
              dep: false,
              name: "onSessionEnded",
              id: "onSessionEnded()",
              dataTypeName: `abstract void`,
              code: `<a href="#onSessionEnded()">onSessionEnded</a>(Throwable t)`,
  
              fullCode: `abstract void <a href="#onSessionEnded()">onSessionEnded</a>(Throwable t)`,

              des: `onSessionEnded() method ka use karke aap window area presentation session ke end hone par callback ko call kar sakte hain.`,
  
              longDes: `<p>onSessionEnded() method ka use karke aap window area presentation session ke end hone par callback ko call kar sakte hain. Ye method window area presentation session ke end ka reason indicate karne ke liye use hota hai.</p>`,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `Throwable t`,
                      des: `<p>Ye parameter ek Throwable object leta hai, jo window area presentation session ke end ka reason represent karta hai.</p>`,
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
              code: `<a href="#onSessionStarted()">onSessionStarted</a>(@NonNull WindowAreaSessionPresenter session)`,
  
              fullCode: `abstract void <a href="#onSessionStarted()">onSessionStarted</a>(@NonNull WindowAreaSessionPresenter session)`,

              des: `onSessionStarted() method ka use karke aap window area presentation session ke start hone par callback ko handle kar sakte hain.`,
  
              longDes: `<p>onSessionStarted() method ka use karke aap window area presentation session ke start hone par callback ko handle kar sakte hain. Ye method window area presentation session ke presenter object ko pass karta hai, jisse ki aap window area presentation session ko handle kar sakte hain.</p>`,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull WindowAreaSessionPresenter session`,
                      des: `<p>Ye parameter ek WindowAreaSessionPresenter object leta hai, jo window area presentation session ko represent karta hai.</p>`,
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
  