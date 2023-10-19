module.exports.Predicate = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "Predicate",
      hCode: "@FunctionalInterface</br>public interface <a href='#Predicate'>Predicate</a>&lt;T&gt;",
  
      des:`
      <p>Predicate interface ka use hota hai jab aap ek function ko represent karna chahte hain jo ek value ya object ko test karega aur uske basis par true ya false return karega. Is interface ka use mainly filtering aur validation me hota hai, jahan aapko ek list of elements me se un elements ko select karna hai jo kisi condition ko satisfy karte hain.</p>

      <p>Java me, Predicate interface ke sath aksar lambdas ka use hota hai jo ek concise tarike se functionality ko represent karte hain. Yeh lambdas streams me data filtering aur selection ko flexible aur readable banane me madad karte hain.</p>
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
              name: "test",
              id: "test()",
              dataTypeName: `abstract boolean`,
              code: `<a href="#test()">test</a>(T t)`,
  
              fullCode: `abstract boolean <a href="#test()">test</a>(T t)`,

              des: `Is method ka use ek value ko test karne ke liye hota hai aur result mein true ya false return karta hai.`,
  
              longDes: `
              <p>Predicate interface ka use primarily values ke specific conditions ko check karne ke liye hota hai. Yani, agar aapko kisi value ko lekar kuch conditions check karni hain aur uske base par kuch actions lene hain, to Predicate ka use kiya ja sakta hai.</p>

              <p>Yeh method ek boolean value return karta hai. Agar value t test ko pass karta hai, to true return hota hai. Agar nahi, to false return hota hai.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `T t`,
                      des: `<p>Yeh parameter ek value hai, jise Predicate object ke through test kiya jata hai.</p>`,
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
  