

module.exports.androidx_appcompat_app = (req, res)=>{
    res.status(200).json({
      overview:{
        name:"androidx.appcompat.app",
        overview: [
          {
            name: "Interfaces",
            success: false,
    
            arr: [
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.app/interface/ActionBar.OnMenuVisibilityListener`,
                name: `ActionBar.OnMenuVisibilityListener`,
                id: "",
                des: `<p>Action bar menus dikhaye jaate hain ya chhupaye jaate hain, jab unki events ko receive karne ke liye listener.</p>`,
              },
              {
                dep: true,
                url:`/android/reference/androidx.appcompat.app/interface/ActionBar.OnNavigationListener`,
                name: `ActionBar.OnNavigationListener`,
                id: "",
                des: `<p>Action bar navigation modes ab deprecated hain aur inline toolbar action bars dwara support nahi kiye jaate hain.</p>`,
              },
              {
                dep: true,
                url:`/android/reference/androidx.appcompat.app/interface/ActionBar.TabListener`,
                name: `ActionBar.TabListener`,
                id: "",
                des: `<p>Action bar navigation modes ab deprecated hain aur inline toolbar action bars dwara support nahi kiye jaate hain.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.app/interface/ActionBarDrawerToggle.Delegate`,
                name: `ActionBarDrawerToggle.Delegate`,
                id: "",
                des: ``,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.app/interface/ActionBarDrawerToggle.DelegateProvider`,
                name: `ActionBarDrawerToggle.DelegateProvider`,
                id: "",
                des: `<p>Implementing Activity ko ActionBarDrawerToggle ke saath use karne ke liye ActionBarDrawerToggle.Delegate return karne ki anumati.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.app/interface/AppCompatCallback`,
                name: `AppCompatCallback`,
                id: "",
                des: `<p>Kuch situations me callback ke liye AppCompat ko capable banana ke liye isko implement kiya gaya hai.</p>`,
              },
            ],
          },

          {
            name: "Classes",
            success: false,
    
            arr: [
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.app/class/ActionBar`,
                name: `ActionBar`,
                id: "",
                des: `<p>Activity ke andar ek primary toolbar jo activity title, application-level navigation affordances aur doosre interactive items ko display kar sakta hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.app/class/ActionBar.LayoutParams`,
                name: `ActionBar.LayoutParams`,
                id: "",
                des: `<p>Action bar ke custom views ke saath jude har child ka layout information.</p>`,
              },
              {
                dep: true,
                url:`/android/reference/androidx.appcompat.app/class/ActionBar.Tab`,                
                name: `ActionBar.Tab`,
                id: "",
                des: `<p>Action bar navigation modes ab deprecated hain aur inline toolbar action bars dwara support nahi kiye jaate hain.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.app/class/ActionBarDrawerToggle`, 
                name: `ActionBarDrawerToggle`,
                id: "",
                des: `<p>Yah class DrawerLayout aur framework ActionBar ki functionality ko ek saath jodne ka ek upyogi tareeka pradaan karta hai, jisse navigation drawers ke liye recommended design ko implement kiya ja sakta hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.app/class/AlertDialog`, 
                name: `AlertDialog`,
                id: "",
                des: `<p>Dialog ka ek subclass jo ek, do ya teen buttons ko display kar sakta hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.app/class/AlertDialog.Builder`, 
                name: `AlertDialog.Builder`,
                id: "",
                des: ``,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.app/class/AppCompatActivity`, 
                name: `AppCompatActivity`,
                id: "",
                des: `<p>Purane Android devices par kuch naye platform features ka upyog karna chahte hain to un activities ke liye base class.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.app/class/AppCompatDelegate`, 
                name: `AppCompatDelegate`,
                id: "",
                des: `<p>Yah class ek delegate ko represent karta hai, jiski madad se aap AppCompat ke support ko kisi bhi android.app.Activity par extend kar sakte hain.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.app/class/AppCompatDialog`, 
                name: `AppCompatDialog`,
                id: "",
                des: `<p>AppCompat themed android.app.Dialogs ke liye base class.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.app/class/AppCompatDialogFragment`, 
                name: `AppCompatDialogFragment`,
                id: "",
                des: `<p>DialogFragment ka ek vishesh version jo platform-styled dialog ki jagah AppCompatDialog ka upyog karta hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.app/class/AppCompatViewInflater`, 
                name: `AppCompatViewInflater`,
                id: "",
                des: `<p>AppCompat dwara is class ka upyog core Android widgets ke sabhi usages ko "substitute" karne ke liye kiya jata hai, jo ki AppCompat ke extensions dwara inflate kiye gaye hain.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.app/class/AppLocalesMetadataHolderService`, 
                name: `AppLocalesMetadataHolderService`,
                id: "",
                des: `<p>Application-level metadata ko add karne se bachne ke liye ek placeholder service.</p>`,
              },
            ],
          },
        ]
          }
    })
    console.log("okh");
}