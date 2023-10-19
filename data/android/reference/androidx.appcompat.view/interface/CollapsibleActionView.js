module.exports.CollapsibleActionView = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "CollapsibleActionView",
      hCode: "public interface <a href='#CollapsibleActionView'>CollapsibleActionView</a>",
  
      des: 
        `
        <aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Android dwara upalabdh kiye gaye platform-provided android.view.CollapsibleActionView interface ka upyog karein.</p></aside>

        <p>Ye interface, ActionBar mein collapsible (jhuke) hone wale action views ke liye support pradan karta hai.</p>

        <p>CollapsibleActionView interface, kisi action view ko collapsible (jhuke) banane ke liye required methods define karta hai. Collapsible action view, normal state mein ek compact version mein dikhaya jaata hai, jisse kam space occupied hota hai. Jab user collapsible action view par click karta hai, tab uska expanded version, jahan par jyada options ya interactivity available ho, dikhaya jaata hai.</p>
        `,

        //
      
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
              name: "onActionViewCollapsed",
              id: "onActionViewCollapsed()",
              dataTypeName: `abstract void`,
              code: `<a href="#onActionViewCollapsed()">onActionViewCollapsed</a>()`,
  
              fullCode: `abstract void <a href="#onActionViewCollapsed()">onActionViewCollapsed</a>()`,

              des: `Ye method, collapsible action view ka collapsed state ke callback ke roop mein invoke kiya jata hai.`,
  
              longDes: `
              <p>Is method ka upayog hum collapsible action view ka collapsed state ko handle karne ke liye karte hain. Jab collapsible action view apne collapsed state mein hota hai, tab onActionViewCollapsed() method invoke hota hai.</p>

              <p>Hum onActionViewCollapsed() method ko override karke, collapsible action view ka collapsed state ke saath sambandhit tasks ko perform kar sakte hain. Is method mein hum collapsed state ke saath sambandhit UI updates, cleanup tasks, aur anya customization tasks ko handle kar sakte hain.</p>

              `,
  
              parameter: [],
            },


            {
              dep: false,
              name: "onActionViewExpanded",
              id: "onActionViewExpanded()",
              dataTypeName: `abstract void`,
              code: `<a href="#onActionViewExpanded()">onActionViewExpanded</a>()`,
  
              fullCode: `abstract void <a href="#onActionViewExpanded()">onActionViewExpanded</a>()`,

              des: `Ye method, collapsible action view ka expanded state ke callback ke roop mein invoke kiya jata hai.`,
  
              longDes: `
              <p>Is method ka upayog hum collapsible action view ka expanded state ko handle karne ke liye karte hain. Jab collapsible action view apne expanded state mein hota hai, tab onActionViewExpanded() method invoke hota hai.</p>

              <p>Hum onActionViewExpanded() method ko override karke, collapsible action view ka expanded state ke saath sambandhit tasks ko perform kar sakte hain. Is method mein hum expanded state ke saath sambandhit UI updates, additional options ko show karna, aur anya customization tasks ko handle kar sakte hain.</p>

              `,
  
              parameter: [],
            },



          ],
        },


        
  
     
      },
    });
  };
  