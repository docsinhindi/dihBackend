module.exports.Function = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "Function",
      hCode: "@FunctionalInterface</br>public interface <a href='#Function'>Function</a>&ltT, R&gt;",
  
      des:`
      <p>Function interface ka use hota hai jab aap ek function ko represent karna chahte hain jo ek input value ko accept karega aur usse kuch output value generate karega. Is interface ka use mainly data transformation aur manipulation me hota hai, jahan ek value ko dusre value me convert ya transform kiya jata hai.</p>

      <p>Java me, Function interface ke sath aksar lambdas ka use hota hai jo ek concise tarike se functionality ko represent karte hain. Yeh lambdas streams me data transformation ko flexible aur readable banane me madad karte hain.</p>
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
              name: "apply",
              id: "apply()",
              dataTypeName: `abstract R`,
              code: `<a href="#apply()">apply</a>(T t)`,
  
              fullCode: `abstract R <a href="#apply()">apply</a>(T t)`,

              des: `Is method ka use ek input value (T) ko ek output value (R) mein transform karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use ek input value (T) ko ek output value (R) mein transform karne ke liye hota hai.</p>
              
              <p>Function interface ka use primarily values ko ek type se doosre type mein transform karne ke liye hota hai. Yani, agar aapko ek value ko lekar kuch calculations ya transformations karke doosre type ki value hasil karni hai, to Function ka use kiya ja sakta hai.</p>

              <p>Yeh method ek output value return karta hai jo input value t ko process karne se hasil hota hai.</p>
              `
              ,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `T t`,
                      des: `<p>Yeh parameter ek input value hai, jise Function object ke through process kiya jayega.</p>`,
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
  