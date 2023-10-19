module.exports.EmojiCompatConfigurationView = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "EmojiCompatConfigurationView",
      hCode: "public interface <a href='#EmojiCompatConfigurationView'>EmojiCompatConfigurationView</a>",
  
      des: 
        `
        <p>Ye class, Android ka built-in emoji support aur customization ke liye use hoti hai.</p>
        
        <p>EmojiCompatConfigurationView class, AppCompatTextView aur AppCompatEditText classes ke liye extend hoti hai. Iska mukhya uddeshya EmojiCompat configuration settings ko apply karne ka hai, jisse textviews aur edittexts emojis ko render karne aur customize karne ke liye taiyar ho jate hain</p>
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
              name: "isEmojiCompatEnabled",
              id: "isEmojiCompatEnabled()",
              dataTypeName: `abstract boolean`,
              code: `<a href="#isEmojiCompatEnabled()">isEmojiCompatEnabled</a>()`,
  
              fullCode: `abstract boolean <a href="#isEmojiCompatEnabled()">isEmojiCompatEnabled</a>()`,

              des: `Ye method, EmojiCompat configuration settings mein emoji compatibility mode ki availability ko check karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, EmojiCompat configuration settings mein emoji compatibility mode ki availability ko check karne ke liye use hota hai.</p>
              
              <p>Ye method boolean value return karta hai, jiske dwara hum emoji compatibility mode ki availability ko represent karte hain. Agar method true return karta hai, to ye indicate karta hai ki emoji compatibility mode enabled hai aur emoji ke liye compatibility transformations apply ho rahi hai. Agar false return kiya jata hai, to ye indicate karta hai ki emoji compatibility mode disabled hai aur compatibility transformations nahi lagu ho rahi hai.</p>`,
  
              parameter: [],
            },



            {
              dep: false,
              name: "setEmojiCompatEnabled",
              id: "setEmojiCompatEnabled()",
              dataTypeName: `abstract void`,
              code: `<a href="#setEmojiCompatEnabled()">setEmojiCompatEnabled</a>(boolean enabled)`,
  
              fullCode: `abstract void <a href="#setEmojiCompatEnabled()">setEmojiCompatEnabled</a>(boolean enabled)`,

              des: `Ye method, EmojiCompat configuration settings mein emoji compatibility mode ko enable ya disable karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, EmojiCompat configuration settings mein emoji compatibility mode ko enable ya disable karne ke liye use hota hai.</p>

              <p>setEmojiCompatEnabled() method ke through hum emoji compatibility mode ko configuration settings mein enable ya disable kar sakte hain. Jab hum emoji compatibility mode ko enable karte hain, to EmojiCompat library emoji ke liye compatibility transformations apply karta hai aur emoji characters ko support karta hai. Jab hum ise disable karte hain, to compatibility transformations nahi lagu hote aur emoji characters as is render hote hain.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `boolean enabled`,
                      des: `Emoji compatibility mode ko enable ya disable karne ke liye boolean value. Agar enabled true hai, to emoji compatibility mode enable hoga, aur agar enabled false hai, to emoji compatibility mode disable hoga.`,
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
  