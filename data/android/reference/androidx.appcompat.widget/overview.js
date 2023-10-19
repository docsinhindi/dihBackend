

module.exports.androidx_appcompat_widget = (req, res)=>{
    res.status(200).send({
      overview:{
        name:"androidx.appcompat.widget",
        overview: [
          {
            name: "Interfaces",
            success: false,
    
            arr: [
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/interface/ActionMenuView.OnMenuItemClickListener`,
                name: `ActionMenuView.OnMenuItemClickListener`,
                id: "",
                des: `<p>Ye interface, ActionMenuView mein implement kiya jata hai aur action menu items ke click events ko handle karne ke liye use hota hai.</p>`,
              },
              {
                dep: true,
                url:`/android/reference/androidx.appcompat.widget/interface/EmojiCompatConfigurationView`,
                name: `EmojiCompatConfigurationView`,
                id: "",
                des: `<p>Ye class, Android ka built-in emoji support aur customization ke liye use hoti hai.</p>`,
              },
              {
                dep: true,
                url:`/android/reference/androidx.appcompat.widget/interface/PopupMenu.OnDismissListener`,
                name: `PopupMenu.OnDismissListener`,
                id: "",
                des: `<p>Ye interface, PopupMenu class ke saath juda hota hai aur popup menu dismiss hone par uski avadharna karne ke liye use hota hai.</p>`,
              },
              {
                dep: true,
                url:`/android/reference/androidx.appcompat.widget/interface/PopupMenu.OnMenuItemClickListener`,
                name: `PopupMenu.OnMenuItemClickListener`,
                id: "",
                des: `<p>Ye interface, PopupMenu class ke saath juda hota hai aur popup menu ke menu items par click events ko handle karne ke liye use hota hai.</p>`,
              },
              {
                dep: true,
                url:`/android/reference/androidx.appcompat.widget/interface/SearchView.OnCloseListener`,
                name: `SearchView.OnCloseListener`,
                id: "",
                des: `<p>Ye interface, SearchView class ke saath juda hota hai aur search view ke close event ko handle karne ke liye use hota hai.</p>`,
              },
              {
                dep: true,
                url:`/android/reference/androidx.appcompat.widget/interface/SearchView.OnQueryTextListener`,
                name: `SearchView.OnQueryTextListener`,
                id: "",
                des: `<p>Ye interface, SearchView class ke saath juda hota hai aur search view ke query text ke events ko handle karne ke liye use hota hai.</p>`,
              },
              {
                dep: true,
                url:`/android/reference/androidx.appcompat.widget/interface/SearchView.OnSuggestionListener`,
                name: `SearchView.OnSuggestionListener`,
                id: "",
                des: `<p>Ye interface, SearchView class ke saath juda hota hai aur search view ke suggestion events ko handle karne ke liye use hota hai.</p>`,
              },
              {
                dep: true,
                url:`/android/reference/androidx.appcompat.widget/interface/ShareActionProvider.OnShareTargetSelectedListener`,
                name: `ShareActionProvider.OnShareTargetSelectedListener`,
                id: "",
                des: `<p>Ye interface, ShareActionProvider class ke saath juda hota hai aur share action provider ke share target selected events ko handle karne ke liye use hota hai.</p>`,
              },
              {
                dep: true,
                url:`/android/reference/androidx.appcompat.widget/interface/ThemedSpinnerAdapter`,
                name: `ThemedSpinnerAdapter`,
                id: "",
                des: `<p>Ye interface, SpinnerAdapter interface se extend hota hai aur themable (theme ke anuroop) spinner adapters ke liye use hota hai.</p>`,
              },
              {
                dep: true,
                url:`/android/reference/androidx.appcompat.widget/interface/Toolbar.OnMenuItemClickListener`,
                name: `Toolbar.OnMenuItemClickListener`,
                id: "",
                des: `<p>Ye interface, Toolbar class ke saath juda hota hai aur toolbar ke menu item click events ko handle karne ke liye use hota hai.</p>`,
              },
            ],
          },

          {
            name: "Classes",
            success: false,
    
            arr: [
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/ActionMenuView`,
                name: `ActionMenuView`,
                id: "",
                des: `<p>Ye class, Android application ke action bar mein menu items ko display karne ke liye use hoti hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/ActionMenuView.LayoutParams`,
                name: `ActionMenuView.LayoutParams`,
                id: "",
                des: `<p>Ye class, ActionMenuView ke child views (menu items) ke layout parameters ko define karne ke liye use hoti hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/AppCompatAutoCompleteTextView`,
                name: `AppCompatAutoCompleteTextView`,
                id: "",
                des: `<p>Ye class, AutoCompleteTextView widget ka AppCompat version hai, jo backward compatibility ko support karta hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/AppCompatButton`,
                name: `AppCompatButton`,
                id: "",
                des: `<p>Ye class, Button widget ka AppCompat version hai, jo backward compatibility ko support karta hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/AppCompatCheckBox`,
                name: `AppCompatCheckBox`,
                id: "",
                des: `<p>Ye class, CheckBox widget ka AppCompat version hai, jo backward compatibility ko support karta hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/AppCompatCheckedTextView`,
                name: `AppCompatCheckedTextView`,
                id: "",
                des: `<p>Ye class, CheckedTextView widget ka AppCompat version hai, jo backward compatibility ko support karta hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/AppCompatEditText`,
                name: `AppCompatEditText`,
                id: "",
                des: `<p>Ye class, EditText widget ka AppCompat version hai, jo backward compatibility ko support karta hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/AppCompatImageButton`,
                name: `AppCompatImageButton`,
                id: "",
                des: `<p>Ye class, ImageButton widget ka AppCompat version hai, jo backward compatibility ko support karta hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/AppCompatImageView`,
                name: `AppCompatImageView`,
                id: "",
                des: `<p>Ye class, ImageView widget ka AppCompat version hai, jo backward compatibility ko support karta hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/AppCompatMultiAutoCompleteTextView`,
                name: `AppCompatMultiAutoCompleteTextView`,
                id: "",
                des: `<p>Ye class, MultiAutoCompleteTextView widget ka AppCompat version hai, jo backward compatibility ko support karta hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/AppCompatRadioButton`,
                name: `AppCompatRadioButton`,
                id: "",
                des: `<p>Ye class, RadioButton widget ka AppCompat version hai, jo backward compatibility ko support karta hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/AppCompatRatingBar`,
                name: `AppCompatRatingBar`,
                id: "",
                des: `<p>Ye class, RatingBar widget ka AppCompat version hai, jo backward compatibility ko support karta hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/AppCompatSeekBar`,
                name: `AppCompatSeekBar`,
                id: "",
                des: `<p>Ye class, SeekBar widget ka AppCompat version hai, jo backward compatibility ko support karta hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/AppCompatSpinner`,
                name: `AppCompatSpinner`,
                id: "",
                des: `<p>Ye class, Spinner widget ka AppCompat version hai, jo backward compatibility ko support karta hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/AppCompatTextView`,
                name: `AppCompatTextView`,
                id: "",
                des: `<p>Ye class, TextView widget ka AppCompat version hai, jo backward compatibility ko support karta ha</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/AppCompatToggleButton`,
                name: `AppCompatToggleButton`,
                id: "",
                des: `<p>Ye class ToggleButton class ka ek subclass hai, jo AppCompat styling aur compatibility features ko support karta hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/LinearLayoutCompat`,
                name: `LinearLayoutCompat`,
                id: "",
                des: `<p>Ye class LinearLayout class ka ek subclass hai, jo AppCompat styling aur compatibility features ko support karta hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/LinearLayoutCompat.LayoutParams`,
                name: `LinearLayoutCompat.LayoutParams`,
                id: "",
                des: `<p>Ye class LinearLayout.LayoutParams class ka ek subclass hai, jo AppCompat styling aur compatibility features ko support karta hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/ListPopupWindow`,
                name: `ListPopupWindow`,
                id: "",
                des: `<p>Ye class, pop-up window (drop-down menu) ko implement karne ke liye use hoti hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/PopupMenu`,
                name: `PopupMenu`,
                id: "",
                des: `<p>Ye class, pop-up menu ko implement karne ke liye use hoti hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/SearchView`,
                name: `SearchView`,
                id: "",
                des: `<p>Ye class, search functionality ko implement karne ke liye use hoti hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/ShareActionProvider`,
                name: `ShareActionProvider`,
                id: "",
                des: `<p>Ye class, share functionality ko implement karne ke liye use hoti hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/SwitchCompat`,
                name: `SwitchCompat`,
                id: "",
                des: `<p>Ye class, switch UI element ko implement karne ke liye use hoti hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/ThemedSpinnerAdapter.Helper`,
                name: `ThemedSpinnerAdapter.Helper`,
                id: "",
                des: `<p>Ye class, ThemedSpinnerAdapter interface ke saath associated helper class hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/Toolbar`,
                name: `Toolbar`,
                id: "",
                des: `<p>Ye class, action bar ke liye custom toolbar implementation ko provide karti hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/Toolbar.LayoutParams`,
                name: `Toolbar.LayoutParams`,
                id: "",
                des: `<p>Ye class, Toolbar class ke liye layout parameters (layout properties) ko set karne ke liye use hoti hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/Toolbar.SavedState`,
                name: `Toolbar.SavedState`,
                id: "",
                des: `<p>Ye class, Toolbar ke state ko save aur restore karne ke liye use hoti hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.widget/class/TooltipCompat`,
                name: `TooltipCompat`,
                id: "",
                des: `<p>Ye class, tooltip functionality ko implement karne ke liye use hoti hai.</p>`,
              },
            ],
          },
        ]
          }
    })
    console.log("okh");
}