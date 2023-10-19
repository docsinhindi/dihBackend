module.exports.DisplayFeature = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "DisplayFeature",
      hCode: "public interface <a href='#DisplayFeature'>DisplayFeature</a>",
  
      des:`
      <p>DisplayFeature interface ka use display ke specific features ko represent karne aur unke attributes ko access karne ke liye hota hai. Iska use display ke geometry aur layout information ko accurately describe karne ke liye hota hai, jisse aap display ke alag-alag areas ko identify aur handle kar sakte hain. Isse aap device ke unique design elements jaise ki notches, cutouts, folds, etc., ko consider karke UI layout ko optimize kar sakte hain.</p>
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
              name: "getBounds",
              id: "getBounds()",
              dataTypeName: `abstract @NonNull Rect`,
              code: `<a href="#getBounds()">getBounds</a>()`,
  
              fullCode: `abstract @NonNull Rect <a href="#getBounds()">getBounds</a>()`,

              des: `Is method ka use display feature ke bounds (area) ko retrieve karne ke liye hota hai. Display feature kuch specific screen area ko represent karta hai, jaise ki notch, cutout, ya koi bhi irregular screen shape.`,
  
              longDes: `
              <p>Is method ka use DisplayFeature interface ke implementers (classes) mein hota hai, jaise ki notch ya cutout areas ko represent karne wali classes. Implementers ko getBounds() method ko override karna hota hai taki woh apne specific display feature ke bounds ko provide kar sake.</p>

              <p>Yeh method Rect object return karta hai, jo display feature ke bounds (area) ko represent karta hai. Rect class ek rectangle ki geometric representation provide karta hai, jisme left, top, right, aur bottom coordinates hote hain.</p>`,
  
              parameter: [],
            },
          ],
        },
      },
    });
  };
  