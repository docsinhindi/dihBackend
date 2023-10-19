module.exports.WindowAreaSession = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "WindowAreaSession",
      hCode: "@ExperimentalWindowApi</br>public interface <a href='#WindowAreaSession'>WindowAreaSession</a>",
  
      des:`
      <p>Is interface ka use, Window Area API ke through Window Area Session ke behavior ko control karne aur manage karne ke liye hota hai.</p>

      <p>Window Area Session, Android devices ke multiple physical areas (jaise ki foldable devices ke different screen segments) ko represent karta hai. Ye API, devices ke alag-alag areas ke liye alag-alag windows aur layouts ko control karne aur render karne ke liye use hota hai.</p>

      <p>Is interface ka use, Window Area Session ke state ko track karna aur uske behavior ko customize karne ke liye hota hai. Aap is interface ke methods ka use karke Window Area Session ke state changes ko monitor kar sakte hain, aur layout aur transformations ko control kar sakte hain.</p>
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
              name: "close",
              id: "close()",
              dataTypeName: `abstract void`,
              code: `<a href="#close()">close</a>()`,
  
              fullCode: `abstract void <a href="#close()">close</a>()`,

              des: `close() method ka use karke aap window area session ko close kar sakte hain.`,
  
              longDes: `<p>close() method ka use karke aap window area session ko close kar sakte hain. Ye method window area session ko close kar deta hai, aur window area session se related sabhi resources ko free kar deta hai.</p>`,
  
              parameter: [],
            },
          ],
        },
      },
    });
  };
  