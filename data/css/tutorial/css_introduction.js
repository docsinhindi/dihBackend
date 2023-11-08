module.exports.css_introduction = {
    name:`CSS Introduction`,

    title_img:`https://docsinhindi.s3.ap-south-1.amazonaws.com/csstutorial/css_banner%402x.png`,

    // des:{
    //     name:"CSS Tutorial",
    //     url:`https://docsinhindi.s3.ap-south-1.amazonaws.com/csstutorial/css_tutorial.png`
    // },


    des:`
    <h2>CSS Kya hai ?</h2>
    <p>CSS (Cascading Style Sheets) ek markup language hai jo web pages ko style (appearance) dene ke liye istemal hota hai. Ye language HTML aur XML jaise markup languages ke sath mil kar web pages ko aesthetically appealing aur user-friendly banane me madad karta hai.</p>
    `,


    tips:``,

    warn:``,

    notes:``,

syntax:[],

    points:[
        {
            
            name:`CSS se aap kya kya kar sakte hai?`,

            des:`
            <ul>
            <li>HTML elements ko colorize kar sakte hain.</li>
            <li>Text ka font, size, style, aur color change kar sakte hain.</li>
            <li>Background images aur colors add kar sakte hain.</li>
            <li>Page layout aur positioning customize kar sakte hain.</li>
            <li>Buttons, links, aur forms ko style kar sakte hain.</li>
            <li>Animations aur transitions create kar sakte hain.</li>
            <li>Flexbox aur Grid Layout se complex layouts design kar sakte hain.</li>
            <li>Responsive design implement kar sakte hain.</li>
            <li>Print-friendly styles set kar sakte hain.</li>
            <li>Opacity aur transparency control kar sakte hain.</li>
            <li>Web fonts aur icon fonts ka istemal kar sakte hain.</li>
            <li>Navigation menus aur dropdowns design kar sakte hain.</li>
            <li>Hover effects aur interactive elements create kar sakte hain.</li>
            <li>Shadows, borders, aur gradients add kar sakte hain.</li>
            <li>Web pages ke overall aesthetics ko enhance kar sakte hain.</li>
            <li>etc.</li>
            </ul>
`
        },


        {
            name:`CSS ka History!`,

            des:`
            <p>CSS (Cascading Style Sheets) ka vikas kaafi samay tak chala hai. Yahan tak ki CSS ko alag-alag versions me upgrade kiya gaya hai. Niche CSS ki history ka ek choti si overview diya gaya hai:</p>

            <h4>CSS1 (Cascading Style Sheets Level 1)</h4>
            <ul>
                <li>Release Year: 1996</li>
                <li>Pahla official CSS version tha.</li>
                <li>Basic styling features jaise colors, fonts, aur text formatting shamil the.</li>
                <li>Browser support me variations thi.</li>
            </ul>

            <h4>CSS2 (Cascading Style Sheets Level 2)</h4>
            <ul>
                <li>Release Year: 1998</li>
                <li>CSS1 ki shortcomings ko pura karne ke liye develop kiya gaya.</li>
                <li>Floats, positioning, aur z-index jaise layout properties shamil the.</li>
                <li>Aural style sheet features shamil the jinse visually impaired users ke liye audio output    customize ki ja sakti thi.</li>
            </ul>


            <h4>CSS2.1</h4>
            <ul>
                <li>Release Year: 2011</li>
                <li>CSS2 ka ek updated version tha, jise fully implement kiya gaya.</li>
                <li>CSS2.1 mostly CSS2 ke errata aur bug fixes ko handle karta hai.</li>
            </ul>

            <h4>CSS3 (Cascading Style Sheets Level 3)</h4>
            <ul>
                <li>Release Year: 1999 se lekar aaj tak alag-alag modules me release hue hai (flexible hota hai,    har module ko separately support kiya jaa sakta hai).</li>
                <li>CSS3 ek series ke modules hai jinme alag-alag features aur properties shamil hai.</li>
                <li>Transition, animation, gradients, shadows, flexible box layout (Flexbox), grid layout,  multi-column layout, aur more advanced styling options shamil hai.</li>
                <li>Responsive design aur mobile-friendly layouts ka development aasan hua.</li>
            </ul>
`
        },

        {
            name:`CSS Work kaese karta hai?`,

            des:`
            <p>CSS, HTML ke sath milkar web pages ko design karta hai. HTML elements ko CSS properties ke madhyam se style di jati hai. Har ek HTML element ke liye ek selector hota hai, jo us element ko identify karta hai aur uske liye apply hone wale styles ko define karta hai.</p>
`
        },

        {
            name:`CSS ka Advantage`,

            des:`
            <p>CSS ka istemal karne ke kai fayde hain jo web development ko behtar banate hain. Yahan kuch mukhya fayde hain:</p>

            <ol>
                <li>
                    <h4>Separation of Concerns:</h4>
                    <ul>
                        <li>CSS HTML se alag hota hai, isliye content aur presentation ko alag rakhne me madad karta hai. Isse code maintainable aur organized rehta hai.</li>
                    </ul>
                </li>
                <li>
                    <h4>Enhanced Control over Styling:</h4>
                    <ul>
                        <li>CSS aapko precise control deta hai har element ke style par, jaise colors, fonts, spacing, aur layout.</li>
                    </ul>
                </li>
                <li>
                    <h4>Responsive Design:</h4>
                    <ul>
                        <li>CSS ke madhyam se aap responsive designs create kar sakte hain jo alag-alag screen sizes aur devices ke liye optimize hote hain.</li>
                    </ul>
                </li>
                <li>
                    <h4>Improved Page Load Times:</h4>
                    <ul>
                        <li>CSS lightweight hoti hai, isliye web pages ko load karne me madad karti hai aur user experience ko sudharne me madad karti hai.</li>
                    </ul>
                </li>
                <li>
                    <h4>Consistency Across Pages:</h4>
                    <ul>
                        <li>Ek hi CSS file ka istemal karke aap apni website ke har page ka consistent look and feel maintain kar sakte hain.</li>
                    </ul>
                </li>
                <li>
                    <h4>Accessibility:</h4>
                    <ul>
                        <li>CSS ke madhyam se aap accessible user interfaces create kar sakte hain jo visually impaired users aur assistive technologies ke liye upyukt hote hain.</li>
                    </ul>
                </li>
                <li>
                    <h4>Flexibility:</h4>
                    <ul>
                        <li>CSS aapko flexibility deta hai elements ko position, size, alignment, aur spacing ke hisab se adjust karne ka.</li>
                    </ul>
                </li>
                <li>
                    <h4>Animations and Interactivity:</h4>
                    <ul>
                        <li>CSS ke madhyam se aap animations, transitions, hover effects, aur interactive elements create kar sakte hain jo user engagement ko badhate hain.</li>
                    </ul>
                </li>
                <li>
                    <h4>Print-Friendly Styles:</h4>
                    <ul>
                        <li>CSS aapke web pages ko print ke liye optimize karne me madad karta hai, jisse printed version visually appealing ho.</li>
                    </ul>
                </li>
                <li>
                    <h4>Browser Compatibility:</h4>
                    <ul>
                        <li>CSS properties ko use karke developers web pages ko cross-browser compatible bana sakte hain, yani ki different browsers me consistent appearance dikhata hai.</li>
                    </ul>
                </li>
                <li>
                    <h4>Frameworks and Libraries:</h4>
                    <ul>
                        <li>CSS ke frameworks aur libraries jaise Bootstrap, Foundation, aur FontAwesome aapko pre-designed styles aur components provide karte hain, jo development process ko accelerate karte hain.</li>
                    </ul>
                </li>
            </ol>
`
        },
    ]
}