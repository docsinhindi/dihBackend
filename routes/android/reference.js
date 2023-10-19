const router = require('express').Router();


// androidx.appcompat.app ----------------start

// import overview
const {androidx_appcompat_app} = require('../../data/android/reference/androidx.appcompat.app/overview')

// import all class --
const {ActionBar} = require('../../data/android/reference/androidx.appcompat.app/class/ActionBar');
const {ActionBar_LayoutParams} = require('../../data/android/reference/androidx.appcompat.app/class/ActionBar.LayoutParams');
const {ActionBar_Tab} = require('../../data/android/reference/androidx.appcompat.app/class/ActionBar.Tab');
const {ActionBarDrawerToggle} = require('../../data/android/reference/androidx.appcompat.app/class/ActionBarDrawerToggle');
const {AlertDialog_Builder} = require('../../data/android/reference/androidx.appcompat.app/class/AlertDialog.Builder');
const {AlertDialog} = require('../../data/android/reference/androidx.appcompat.app/class/AlertDialog');
const {AppCompatActivity} = require('../../data/android/reference/androidx.appcompat.app/class/AppCompatActivity');
const {AppCompatDelegate} = require('../../data/android/reference/androidx.appcompat.app/class/AppCompatDelegate');
const {AppCompatDialog} = require('../../data/android/reference/androidx.appcompat.app/class/AppCompatDialog');
const {AppCompatDialogFragment} = require('../../data/android/reference/androidx.appcompat.app/class/AppCompatDialogFragment');
const {AppCompatViewInflater} = require('../../data/android/reference/androidx.appcompat.app/class/AppCompatViewInflater');
const {AppLocalesMetadataHolderService} = require('../../data/android/reference/androidx.appcompat.app/class/AppLocalesMetadataHolderService');


// import all interface --
const  {ActionBar_OnMenuVisibilityListener} = require('../../data/android/reference/androidx.appcompat.app/interface/ActionBar.OnMenuVisibilityListener');
const  {ActionBar_OnNavigationListener} = require('../../data/android/reference/androidx.appcompat.app/interface/ActionBar.OnNavigationListener');
const  {ActionBar_TabListener} = require('../../data/android/reference/androidx.appcompat.app/interface/ActionBar.TabListener');
const  {ActionBarDrawerToggle_Delegate} = require('../../data/android/reference/androidx.appcompat.app/interface/ActionBarDrawerToggle.Delegate');
const  {ActionBarDrawerToggle_DelegateProvider} = require('../../data/android/reference/androidx.appcompat.app/interface/ActionBarDrawerToggle.DelegateProvider');
const  {AppCompatCallback} = require('../../data/android/reference/androidx.appcompat.app/interface/AppCompatCallback');



//overview
router.get("/androidx.appcompat.app/overview",androidx_appcompat_app);


//class
router.get("/androidx.appcompat.app/class/ActionBar",ActionBar);
router.get("/androidx.appcompat.app/class/ActionBar.LayoutParams",ActionBar_LayoutParams);
router.get("/androidx.appcompat.app/class/ActionBar.Tab",ActionBar_Tab);
router.get("/androidx.appcompat.app/class/ActionBarDrawerToggle",ActionBarDrawerToggle);
router.get("/androidx.appcompat.app/class/AlertDialog.Builder",AlertDialog_Builder);
router.get("/androidx.appcompat.app/class/AlertDialog",AlertDialog);
router.get("/androidx.appcompat.app/class/AppCompatActivity",AppCompatActivity);
router.get("/androidx.appcompat.app/class/AppCompatDelegate",AppCompatDelegate);
router.get("/androidx.appcompat.app/class/AppCompatDialog",AppCompatDialog);
router.get("/androidx.appcompat.app/class/AppCompatDialogFragment",AppCompatDialogFragment);
router.get("/androidx.appcompat.app/class/AppCompatViewInflater",AppCompatViewInflater);
router.get("/androidx.appcompat.app/class/AppLocalesMetadataHolderService",AppLocalesMetadataHolderService);


//inteface --
router.get('/androidx.appcompat.app/interface/ActionBar.OnMenuVisibilityListener',ActionBar_OnMenuVisibilityListener)
router.get('/androidx.appcompat.app/interface/ActionBar.OnNavigationListener',ActionBar_OnNavigationListener)
router.get('/androidx.appcompat.app/interface/ActionBar.TabListener',ActionBar_TabListener)
router.get('/androidx.appcompat.app/interface/ActionBarDrawerToggle.Delegate',ActionBarDrawerToggle_Delegate)
router.get('/androidx.appcompat.app/interface/ActionBarDrawerToggle.DelegateProvider',ActionBarDrawerToggle_DelegateProvider)
router.get('/androidx.appcompat.app/interface/AppCompatCallback',AppCompatCallback)










//androidx.appcompat.content.res

//import overview

 const {androidx_appcompat_content_res} = require("../../data/android/reference/androidx.appcompat.content.res/overview")

//import class
const {AppCompatResources} = require("../../data/android/reference/androidx.appcompat.content.res/class/AppCompatResources");




// overview

router.get("/androidx.appcompat.content.res/overview",androidx_appcompat_content_res);


//class
router.get("/androidx.appcompat.content.res/class/AppCompatResources",AppCompatResources);






//androidx.appcompat.graphics.drawable

//import overview

const {androidx_appcompat_graphics_drawable} = require("../../data/android/reference/androidx.appcompat.graphics.drawable/overview")

//import class
const {AnimatedStateListDrawableCompat} = require("../../data/android/reference/androidx.appcompat.graphics.drawable/class/AnimatedStateListDrawableCompat");
const {DrawableContainerCompat} = require("../../data/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat");
const {DrawableWrapperCompat} = require("../../data/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat");
const {DrawerArrowDrawable} = require("../../data/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable");
const {StateListDrawableCompat} = require("../../data/android/reference/androidx.appcompat.graphics.drawable/class/StateListDrawableCompat");




// overview

router.get("/androidx.appcompat.graphics.drawable/overview",androidx_appcompat_graphics_drawable);


//class
router.get("/androidx.appcompat.graphics.drawable/class/AnimatedStateListDrawableCompat",AnimatedStateListDrawableCompat);
router.get("/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat",DrawableContainerCompat);
router.get("/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat",DrawableWrapperCompat);
router.get("/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable",DrawerArrowDrawable);
router.get("/androidx.appcompat.graphics.drawable/class/StateListDrawableCompat",StateListDrawableCompat);








//androidx.appcompat.view

//import overview

const {androidx_appcompat_view} = require("../../data/android/reference/androidx.appcompat.view/overview")

//import class
const {ActionMode} = require("../../data/android/reference/androidx.appcompat.view/class/ActionMode");
const {ContextThemeWrapper} = require("../../data/android/reference/androidx.appcompat.view/class/ContextThemeWrapper");

//import interface
const {ActionMode_Callback} = require("../../data/android/reference/androidx.appcompat.view/interface/ActionMode.Callback");
const {CollapsibleActionView} = require("../../data/android/reference/androidx.appcompat.view/interface/CollapsibleActionView");





// overview

router.get("/androidx.appcompat.view/overview",androidx_appcompat_view);


//class
router.get("/androidx.appcompat.view/class/ActionMode",ActionMode);
router.get("/androidx.appcompat.view/class/ContextThemeWrapper",ContextThemeWrapper);



//interface
router.get("/androidx.appcompat.view/interface/ActionMode.Callback",ActionMode_Callback);
router.get("/androidx.appcompat.view/interface/CollapsibleActionView",CollapsibleActionView);






//androidx.appcompat.widget

//import overview

const {androidx_appcompat_widget} = require("../../data/android/reference/androidx.appcompat.widget/overview")

//import class
const {ActionMenuView} = require("../../data/android/reference/androidx.appcompat.widget/class/ActionMenuView");
const {ActionMenuView_LayoutParams} = require("../../data/android/reference/androidx.appcompat.widget/class/ActionMenuView.LayoutParams");
const {AppCompatAutoCompleteTextView} = require("../../data/android/reference/androidx.appcompat.widget/class/AppCompatAutoCompleteTextView");
const {AppCompatButton} = require("../../data/android/reference/androidx.appcompat.widget/class/AppCompatButton");
const {AppCompatCheckBox} = require("../../data/android/reference/androidx.appcompat.widget/class/AppCompatCheckBox");
const {AppCompatCheckedTextView} = require("../../data/android/reference/androidx.appcompat.widget/class/AppCompatCheckedTextView");
const {AppCompatEditText} = require("../../data/android/reference/androidx.appcompat.widget/class/AppCompatEditText");
const {AppCompatImageButton} = require("../../data/android/reference/androidx.appcompat.widget/class/AppCompatImageButton");
const {AppCompatImageView} = require("../../data/android/reference/androidx.appcompat.widget/class/AppCompatImageView");
const {AppCompatMultiAutoCompleteTextView} = require("../../data/android/reference/androidx.appcompat.widget/class/AppCompatMultiAutoCompleteTextView");
const {AppCompatRadioButton} = require("../../data/android/reference/androidx.appcompat.widget/class/AppCompatRadioButton");
const {AppCompatRatingBar} = require("../../data/android/reference/androidx.appcompat.widget/class/AppCompatRatingBar");
const {AppCompatSeekBar} = require("../../data/android/reference/androidx.appcompat.widget/class/AppCompatSeekBar");
const {AppCompatSpinner} = require("../../data/android/reference/androidx.appcompat.widget/class/AppCompatSpinner");
const {AppCompatTextView} = require("../../data/android/reference/androidx.appcompat.widget/class/AppCompatTextView");
const {AppCompatToggleButton} = require("../../data/android/reference/androidx.appcompat.widget/class/AppCompatToggleButton");
const {LinearLayoutCompat} = require("../../data/android/reference/androidx.appcompat.widget/class/LinearLayoutCompat");
const {LinearLayoutCompat_LayoutParams} = require("../../data/android/reference/androidx.appcompat.widget/class/LinearLayoutCompat.LayoutParams");
const {ListPopupWindow} = require("../../data/android/reference/androidx.appcompat.widget/class/ListPopupWindow");
const {PopupMenu} = require("../../data/android/reference/androidx.appcompat.widget/class/PopupMenu");
const {SearchView} = require("../../data/android/reference/androidx.appcompat.widget/class/SearchView");
const {ShareActionProvider} = require("../../data/android/reference/androidx.appcompat.widget/class/ShareActionProvider");
const {SwitchCompat} = require("../../data/android/reference/androidx.appcompat.widget/class/SwitchCompat");
const {ThemedSpinnerAdapter_Helper} = require("../../data/android/reference/androidx.appcompat.widget/class/ThemedSpinnerAdapter.Helper");
const {Toolbar} = require("../../data/android/reference/androidx.appcompat.widget/class/Toolbar");
const {Toolbar_LayoutParams} = require("../../data/android/reference/androidx.appcompat.widget/class/Toolbar.LayoutParams");
const {Toolbar_SavedState} = require("../../data/android/reference/androidx.appcompat.widget/class/Toolbar.SavedState");
const {TooltipCompat} = require("../../data/android/reference/androidx.appcompat.widget/class/TooltipCompat");



//import interface
const {ActionMenuView_OnMenuItemClickListener} = require("../../data/android/reference/androidx.appcompat.widget/interface/ActionMenuView.OnMenuItemClickListener");
const {EmojiCompatConfigurationView} = require("../../data/android/reference/androidx.appcompat.widget/interface/EmojiCompatConfigurationView");
const {PopupMenu_OnDismissListener} = require("../../data/android/reference/androidx.appcompat.widget/interface/PopupMenu.OnDismissListener");
const {PopupMenu_OnMenuItemClickListener} = require("../../data/android/reference/androidx.appcompat.widget/interface/PopupMenu.OnMenuItemClickListener");
const {SearchView_OnCloseListener} = require("../../data/android/reference/androidx.appcompat.widget/interface/SearchView.OnCloseListener");
const {SearchView_OnQueryTextListener} = require("../../data/android/reference/androidx.appcompat.widget/interface/SearchView.OnQueryTextListener");
const {SearchView_OnSuggestionListener} = require("../../data/android/reference/androidx.appcompat.widget/interface/SearchView.OnSuggestionListener");
const {ShareActionProvider_OnShareTargetSelectedListener} = require("../../data/android/reference/androidx.appcompat.widget/interface/ShareActionProvider.OnShareTargetSelectedListener");
const {ThemedSpinnerAdapter} = require("../../data/android/reference/androidx.appcompat.widget/interface/ThemedSpinnerAdapter");
const {Toolbar_OnMenuItemClickListener} = require("../../data/android/reference/androidx.appcompat.widget/interface/Toolbar.OnMenuItemClickListener");





// overview

router.get("/androidx.appcompat.widget/overview",androidx_appcompat_widget);


//class
router.get("/androidx.appcompat.widget/class/ActionMenuView",ActionMenuView);
router.get("/androidx.appcompat.widget/class/ActionMenuView.LayoutParams",ActionMenuView_LayoutParams);
router.get("/androidx.appcompat.widget/class/AppCompatAutoCompleteTextView",AppCompatAutoCompleteTextView);
router.get("/androidx.appcompat.widget/class/AppCompatButton",AppCompatButton);
router.get("/androidx.appcompat.widget/class/AppCompatCheckBox",AppCompatCheckBox);
router.get("/androidx.appcompat.widget/class/AppCompatCheckedTextView",AppCompatCheckedTextView);
router.get("/androidx.appcompat.widget/class/AppCompatEditText",AppCompatEditText);
router.get("/androidx.appcompat.widget/class/AppCompatImageButton",AppCompatImageButton);
router.get("/androidx.appcompat.widget/class/AppCompatImageView",AppCompatImageView);
router.get("/androidx.appcompat.widget/class/AppCompatMultiAutoCompleteTextView",AppCompatMultiAutoCompleteTextView);
router.get("/androidx.appcompat.widget/class/AppCompatRadioButton",AppCompatRadioButton);
router.get("/androidx.appcompat.widget/class/AppCompatRatingBar",AppCompatRatingBar);
router.get("/androidx.appcompat.widget/class/AppCompatSeekBar",AppCompatSeekBar);
router.get("/androidx.appcompat.widget/class/AppCompatSpinner",AppCompatSpinner);
router.get("/androidx.appcompat.widget/class/AppCompatTextView",AppCompatTextView);
router.get("/androidx.appcompat.widget/class/AppCompatToggleButton",AppCompatToggleButton);
router.get("/androidx.appcompat.widget/class/LinearLayoutCompat",LinearLayoutCompat);
router.get("/androidx.appcompat.widget/class/LinearLayoutCompat.LayoutParams",LinearLayoutCompat_LayoutParams);
router.get("/androidx.appcompat.widget/class/ListPopupWindow",ListPopupWindow);
router.get("/androidx.appcompat.widget/class/PopupMenu",PopupMenu);
router.get("/androidx.appcompat.widget/class/SearchView",SearchView);
router.get("/androidx.appcompat.widget/class/ShareActionProvider",ShareActionProvider);
router.get("/androidx.appcompat.widget/class/SwitchCompat",SwitchCompat);
router.get("/androidx.appcompat.widget/class/ThemedSpinnerAdapter.Helper",ThemedSpinnerAdapter_Helper);
router.get("/androidx.appcompat.widget/class/Toolbar",Toolbar);
router.get("/androidx.appcompat.widget/class/Toolbar.LayoutParams",Toolbar_LayoutParams);
router.get("/androidx.appcompat.widget/class/Toolbar.SavedState",Toolbar_SavedState);
router.get("/androidx.appcompat.widget/class/TooltipCompat",TooltipCompat);





//interface
router.get("/androidx.appcompat.widget/interface/ActionMenuView.OnMenuItemClickListener",ActionMenuView_OnMenuItemClickListener);
router.get("/androidx.appcompat.widget/interface/EmojiCompatConfigurationView",EmojiCompatConfigurationView);
router.get("/androidx.appcompat.widget/interface/PopupMenu.OnDismissListener",PopupMenu_OnDismissListener);
router.get("/androidx.appcompat.widget/interface/PopupMenu.OnMenuItemClickListener",PopupMenu_OnMenuItemClickListener);
router.get("/androidx.appcompat.widget/interface/SearchView.OnCloseListener",SearchView_OnCloseListener);
router.get("/androidx.appcompat.widget/interface/SearchView.OnQueryTextListener",SearchView_OnQueryTextListener);
router.get("/androidx.appcompat.widget/interface/SearchView.OnSuggestionListener",SearchView_OnSuggestionListener);
router.get("/androidx.appcompat.widget/interface/ShareActionProvider.OnShareTargetSelectedListener",ShareActionProvider_OnShareTargetSelectedListener);
router.get("/androidx.appcompat.widget/interface/ThemedSpinnerAdapter",ThemedSpinnerAdapter);
router.get("/androidx.appcompat.widget/interface/Toolbar.OnMenuItemClickListener",Toolbar_OnMenuItemClickListener);





//androidx.window

//import overview

const {androidx_window} = require("../../data/android/reference/androidx.window/overview")

//import class
const {WindowProperties} = require("../../data/android/reference/androidx.window/class/WindowProperties");



// overview

router.get("/androidx.window/overview",androidx_window);


//class
router.get("/androidx.window/class/WindowProperties",WindowProperties);




//androidx.window.area

//import overview

const {androidx_window_area} = require("../../data/android/reference/androidx.window.area/overview")


//import class
const {WindowAreaCapability} = require("../../data/android/reference/androidx.window.area/class/WindowAreaCapability");
const {WindowAreaCapability_Operation} = require("../../data/android/reference/androidx.window.area/class/WindowAreaCapability.Operation");
const {WindowAreaCapability_Status} = require("../../data/android/reference/androidx.window.area/class/WindowAreaCapability.Status");
const {WindowAreaInfo} = require("../../data/android/reference/androidx.window.area/class/WindowAreaInfo");
const {WindowAreaInfo_Type} = require("../../data/android/reference/androidx.window.area/class/WindowAreaInfo.Type");


//import inteface
const {WindowAreaController} = require("../../data/android/reference/androidx.window.area/interface/WindowAreaController");
const {WindowAreaPresentationSessionCallback} = require("../../data/android/reference/androidx.window.area/interface/WindowAreaPresentationSessionCallback");
const {WindowAreaSession} = require("../../data/android/reference/androidx.window.area/interface/WindowAreaSession");
const {WindowAreaSessionCallback} = require("../../data/android/reference/androidx.window.area/interface/WindowAreaSessionCallback");
const {WindowAreaSessionPresenter} = require("../../data/android/reference/androidx.window.area/interface/WindowAreaSessionPresenter");



// overview

router.get("/androidx.window.area/overview",androidx_window_area);


//class
router.get("/androidx.window.area/class/WindowAreaCapability",WindowAreaCapability);
router.get("/androidx.window.area/class/WindowAreaCapability.Operation",WindowAreaCapability_Operation);
router.get("/androidx.window.area/class/WindowAreaCapability.Status",WindowAreaCapability_Status);
router.get("/androidx.window.area/class/WindowAreaInfo",WindowAreaInfo);
router.get("/androidx.window.area/class/WindowAreaInfo.Type",WindowAreaInfo_Type);


//interface
router.get("/androidx.window.area/interface/WindowAreaController",WindowAreaController);
router.get("/androidx.window.area/interface/WindowAreaPresentationSessionCallback",WindowAreaPresentationSessionCallback);
router.get("/androidx.window.area/interface/WindowAreaSession",WindowAreaSession);
router.get("/androidx.window.area/interface/WindowAreaSessionCallback",WindowAreaSessionCallback);
router.get("/androidx.window.area/interface/WindowAreaSessionPresenter",WindowAreaSessionPresenter);





//androidx.window.core

//import overview

const {androidx_window_core} = require("../../data/android/reference/androidx.window.core/overview")


//import annotations
const {ExperimentalWindowApi} = require("../../data/android/reference/androidx.window.core/Annotations/ExperimentalWindowApi");




// overview

router.get("/androidx.window.core/overview",androidx_window_core);


//annotaions
router.get("/androidx.window.core/Annotations/ExperimentalWindowApi",ExperimentalWindowApi);




//androidx.window.core.layout

//import overview

const {androidx_window_core_layout} = require("../../data/android/reference/androidx.window.core.layout/overview")


//import class
const {WindowHeightSizeClass} = require("../../data/android/reference/androidx.window.core.layout/class/WindowHeightSizeClass");
const {WindowSizeClass} = require("../../data/android/reference/androidx.window.core.layout/class/WindowSizeClass");
const {WindowWidthSizeClass} = require("../../data/android/reference/androidx.window.core.layout/class/WindowWidthSizeClass");




// overview

router.get("/androidx.window.core.layout/overview",androidx_window_core_layout);


//class
router.get("/androidx.window.core.layout/class/WindowHeightSizeClass",WindowHeightSizeClass);
router.get("/androidx.window.core.layout/class/WindowSizeClass",WindowSizeClass);
router.get("/androidx.window.core.layout/class/WindowWidthSizeClass",WindowWidthSizeClass);



//androidx.window.embedding

//import overview

const {androidx_window_embedding} = require("../../data/android/reference/androidx.window.embedding/overview")


//import class
const {ActivityEmbeddingController} = require("../../data/android/reference/androidx.window.embedding/class/ActivityEmbeddingController");
const {ActivityEmbeddingOptions} = require("../../data/android/reference/androidx.window.embedding/class/ActivityEmbeddingOptions");
const {ActivityFilter} = require("../../data/android/reference/androidx.window.embedding/class/ActivityFilter");
const {ActivityRule_Builder} = require("../../data/android/reference/androidx.window.embedding/class/ActivityRule.Builder");
const {ActivityRule} = require("../../data/android/reference/androidx.window.embedding/class/ActivityRule");
const {ActivityStack} = require("../../data/android/reference/androidx.window.embedding/class/ActivityStack");
const {EmbeddingAspectRatio} = require("../../data/android/reference/androidx.window.embedding/class/EmbeddingAspectRatio");
const {EmbeddingRule} = require("../../data/android/reference/androidx.window.embedding/class/EmbeddingRule");
const {RuleController} = require("../../data/android/reference/androidx.window.embedding/class/RuleController");
const {SplitAttributes_Builder} = require("../../data/android/reference/androidx.window.embedding/class/SplitAttributes.Builder");
const {SplitAttributes} = require("../../data/android/reference/androidx.window.embedding/class/SplitAttributes");
const {SplitAttributes_LayoutDirection} = require("../../data/android/reference/androidx.window.embedding/class/SplitAttributes.LayoutDirection");
const {SplitAttributes_SplitType} = require("../../data/android/reference/androidx.window.embedding/class/SplitAttributes.SplitType");
const {SplitAttributesCalculatorParams} = require("../../data/android/reference/androidx.window.embedding/class/SplitAttributesCalculatorParams");
const {SplitController} = require("../../data/android/reference/androidx.window.embedding/class/SplitController");
const {SplitController_SplitSupportStatus} = require("../../data/android/reference/androidx.window.embedding/class/SplitController.SplitSupportStatus");
const {SplitInfo} = require("../../data/android/reference/androidx.window.embedding/class/SplitInfo");
const {SplitPairFilter} = require("../../data/android/reference/androidx.window.embedding/class/SplitPairFilter");
const {SplitPairRule_Builder} = require("../../data/android/reference/androidx.window.embedding/class/SplitPairRule.Builder");
const {SplitPairRule} = require("../../data/android/reference/androidx.window.embedding/class/SplitPairRule");
const {SplitPlaceholderRule_Builder} = require("../../data/android/reference/androidx.window.embedding/class/SplitPlaceholderRule.Builder");
const {SplitPlaceholderRule} = require("../../data/android/reference/androidx.window.embedding/class/SplitPlaceholderRule");
const {SplitRule_FinishBehavior} = require("../../data/android/reference/androidx.window.embedding/class/SplitRule.FinishBehavior");
const {SplitRule} = require("../../data/android/reference/androidx.window.embedding/class/SplitRule");





// overview

router.get("/androidx.window.embedding/overview",androidx_window_embedding);


//class
router.get("/androidx.window.embedding/class/ActivityEmbeddingController",ActivityEmbeddingController);
router.get("/androidx.window.embedding/class/ActivityEmbeddingOptions",ActivityEmbeddingOptions);
router.get("/androidx.window.embedding/class/ActivityFilter",ActivityFilter);
router.get("/androidx.window.embedding/class/ActivityRule.Builder",ActivityRule_Builder);
router.get("/androidx.window.embedding/class/ActivityRule",ActivityRule);
router.get("/androidx.window.embedding/class/ActivityStack",ActivityStack);
router.get("/androidx.window.embedding/class/EmbeddingAspectRatio",EmbeddingAspectRatio);
router.get("/androidx.window.embedding/class/EmbeddingRule",EmbeddingRule);
router.get("/androidx.window.embedding/class/RuleController",RuleController);
router.get("/androidx.window.embedding/class/SplitAttributes.Builder",SplitAttributes_Builder);
router.get("/androidx.window.embedding/class/SplitAttributes",SplitAttributes);
router.get("/androidx.window.embedding/class/SplitAttributes.LayoutDirection",SplitAttributes_LayoutDirection);
router.get("/androidx.window.embedding/class/SplitAttributes.SplitType",SplitAttributes_SplitType);
router.get("/androidx.window.embedding/class/SplitAttributesCalculatorParams",SplitAttributesCalculatorParams);
router.get("/androidx.window.embedding/class/SplitController",SplitController);
router.get("/androidx.window.embedding/class/SplitController.SplitSupportStatus",SplitController_SplitSupportStatus);
router.get("/androidx.window.embedding/class/SplitInfo",SplitInfo);
router.get("/androidx.window.embedding/class/SplitPairFilter",SplitPairFilter);
router.get("/androidx.window.embedding/class/SplitPairRule.Builder",SplitPairRule_Builder);
router.get("/androidx.window.embedding/class/SplitPairRule",SplitPairRule);
router.get("/androidx.window.embedding/class/SplitPlaceholderRule.Builder",SplitPlaceholderRule_Builder);
router.get("/androidx.window.embedding/class/SplitPlaceholderRule",SplitPlaceholderRule);
router.get("/androidx.window.embedding/class/SplitRule.FinishBehavior",SplitRule_FinishBehavior);
router.get("/androidx.window.embedding/class/SplitRule",SplitRule);





//androidx.window.extensions.core.util.function

//import overview

const {androidx_window_extensions_core_util_function} = require("../../data/android/reference/androidx.window.extensions.core.util.function/overview")


//import interface

const {Consumer} = require("../../data/android/reference/androidx.window.extensions.core.util.function/interface/Consumer");
const {Function} = require("../../data/android/reference/androidx.window.extensions.core.util.function/interface/Function");
const {Predicate} = require("../../data/android/reference/androidx.window.extensions.core.util.function/interface/Predicate");





// overview

router.get("/androidx.window.extensions.core.util.function/overview",androidx_window_extensions_core_util_function);


//interface
router.get("/androidx.window.extensions.core.util.function/interface/Consumer",Consumer);
router.get("/androidx.window.extensions.core.util.function/interface/Function",Function);
router.get("/androidx.window.extensions.core.util.function/interface/Predicate",Predicate);






//androidx.window.java.area

//import overview

const {androidx_window_java_area} = require("../../data/android/reference/androidx.window.java.area/overview")


//import class

const {WindowAreaControllerCallbackAdapter} = require("../../data/android/reference/androidx.window.java.area/class/WindowAreaControllerCallbackAdapter");




// overview

router.get("/androidx.window.java.area/overview",androidx_window_java_area);


//class
router.get("/androidx.window.java.area/class/WindowAreaControllerCallbackAdapter",WindowAreaControllerCallbackAdapter);



//androidx.window.java.embedding

//import overview

const {androidx_window_java_embedding} = require("../../data/android/reference/androidx.window.java.embedding/overview")


//import class

const {SplitControllerCallbackAdapter} = require("../../data/android/reference/androidx.window.java.embedding/class/SplitControllerCallbackAdapter");




// overview

router.get("/androidx.window.java.embedding/overview",androidx_window_java_embedding);


//class
router.get("/androidx.window.java.embedding/class/SplitControllerCallbackAdapter",SplitControllerCallbackAdapter);




//androidx.window.java.layout

//import overview

const {androidx_window_java_layout} = require("../../data/android/reference/androidx.window.java.layout/overview")


//import class

const {WindowInfoTrackerCallbackAdapter} = require("../../data/android/reference/androidx.window.java.layout/class/WindowInfoTrackerCallbackAdapter");




// overview

router.get("/androidx.window.java.layout/overview",androidx_window_java_layout);


//class
router.get("/androidx.window.java.layout/class/WindowInfoTrackerCallbackAdapter",WindowInfoTrackerCallbackAdapter);




//androidx.window.layout

//import overview

const {androidx_window_layout} = require("../../data/android/reference/androidx.window.layout/overview")


//import class

const {FoldingFeature_OcclusionType} = require("../../data/android/reference/androidx.window.layout/class/FoldingFeature.OcclusionType");
const {FoldingFeature_Orientation} = require("../../data/android/reference/androidx.window.layout/class/FoldingFeature.Orientation");
const {FoldingFeature_State} = require("../../data/android/reference/androidx.window.layout/class/FoldingFeature.State");
const {WindowLayoutInfo} = require("../../data/android/reference/androidx.window.layout/class/WindowLayoutInfo");
const {WindowMetrics} = require("../../data/android/reference/androidx.window.layout/class/WindowMetrics");




//import interface

const {DisplayFeature} = require("../../data/android/reference/androidx.window.layout/interface/DisplayFeature");
const {FoldingFeature} = require("../../data/android/reference/androidx.window.layout/interface/FoldingFeature");
const {WindowInfoTracker} = require("../../data/android/reference/androidx.window.layout/interface/WindowInfoTracker");
const {WindowMetricsCalculator} = require("../../data/android/reference/androidx.window.layout/interface/WindowMetricsCalculator");




// overview

router.get("/androidx.window.layout/overview",androidx_window_layout);


//class
router.get("/androidx.window.layout/class/FoldingFeature.OcclusionType",FoldingFeature_OcclusionType);
router.get("/androidx.window.layout/class/FoldingFeature.Orientation",FoldingFeature_Orientation);
router.get("/androidx.window.layout/class/FoldingFeature.State",FoldingFeature_State);
router.get("/androidx.window.layout/class/WindowLayoutInfo",WindowLayoutInfo);
router.get("/androidx.window.layout/class/WindowMetrics",WindowMetrics);


//interface
router.get("/androidx.window.layout/interface/DisplayFeature",DisplayFeature);
router.get("/androidx.window.layout/interface/FoldingFeature",FoldingFeature);
router.get("/androidx.window.layout/interface/WindowInfoTracker",WindowInfoTracker);
router.get("/androidx.window.layout/interface/WindowMetricsCalculator",WindowMetricsCalculator);






//androidx.window.rxjava2.layout

//import overview

const {androidx_window_rxjava2_layout} = require("../../data/android/reference/androidx.window.rxjava2.layout/overview")



//import class

const {WindowInfoTrackerRx} = require("../../data/android/reference/androidx.window.rxjava2.layout/class/WindowInfoTrackerRx");





// overview

router.get("/androidx.window.rxjava2.layout/overview",androidx_window_rxjava2_layout);


//class
router.get("/androidx.window.rxjava2.layout/class/WindowInfoTrackerRx",WindowInfoTrackerRx);




//androidx.window.rxjava3.layout

//import overview

const {androidx_window_rxjava3_layout} = require("../../data/android/reference/androidx.window.rxjava3.layout/overview")



//import class

const {WindowInfoTrackerRx_3} = require("../../data/android/reference/androidx.window.rxjava3.layout/class/WindowInfoTrackerRx");




// overview

router.get("/androidx.window.rxjava3.layout/overview",androidx_window_rxjava3_layout);


//class
router.get("/androidx.window.rxjava3.layout/class/WindowInfoTrackerRx",WindowInfoTrackerRx_3);



//androidx.window.testing.embedding

//import overview

const {androidx_window_testing_embedding} = require("../../data/android/reference/androidx.window.testing.embedding/overview")



//import class

const {ActivityEmbeddingRule} = require("../../data/android/reference/androidx.window.testing.embedding/class/ActivityEmbeddingRule");
const {TestActivityStack} = require("../../data/android/reference/androidx.window.testing.embedding/class/TestActivityStack");
const {TestSplitAttributesCalculatorParams} = require("../../data/android/reference/androidx.window.testing.embedding/class/TestSplitAttributesCalculatorParams");
const {TestSplitInfo} = require("../../data/android/reference/androidx.window.testing.embedding/class/TestSplitInfo");




// overview

router.get("/androidx.window.testing.embedding/overview",androidx_window_testing_embedding);


//class
router.get("/androidx.window.testing.embedding/class/ActivityEmbeddingRule",ActivityEmbeddingRule);
router.get("/androidx.window.testing.embedding/class/TestActivityStack",TestActivityStack);
router.get("/androidx.window.testing.embedding/class/TestSplitAttributesCalculatorParams",TestSplitAttributesCalculatorParams);
router.get("/androidx.window.testing.embedding/class/TestSplitInfo",TestSplitInfo);



//androidx.window.testing.layout

//import overview

const {androidx_window_testing_layout} = require("../../data/android/reference/androidx.window.testing.layout/overview")



//import class

const {DisplayFeatureTesting} = require("../../data/android/reference/androidx.window.testing.layout/class/DisplayFeatureTesting");
const {FoldingFeatureTestingConstants} = require("../../data/android/reference/androidx.window.testing.layout/class/FoldingFeatureTestingConstants");
const {WindowLayoutInfoPublisherRule} = require("../../data/android/reference/androidx.window.testing.layout/class/WindowLayoutInfoPublisherRule");
const {WindowLayoutInfoTesting} = require("../../data/android/reference/androidx.window.testing.layout/class/WindowLayoutInfoTesting");
const {WindowMetricsCalculatorRule} = require("../../data/android/reference/androidx.window.testing.layout/class/WindowMetricsCalculatorRule");




// overview

router.get("/androidx.window.testing.layout/overview",androidx_window_testing_layout);


//class
router.get("/androidx.window.testing.layout/class/DisplayFeatureTesting",DisplayFeatureTesting);
router.get("/androidx.window.testing.layout/class/FoldingFeatureTestingConstants",FoldingFeatureTestingConstants);
router.get("/androidx.window.testing.layout/class/WindowLayoutInfoPublisherRule",WindowLayoutInfoPublisherRule);
router.get("/androidx.window.testing.layout/class/WindowLayoutInfoTesting",WindowLayoutInfoTesting);
router.get("/androidx.window.testing.layout/class/WindowMetricsCalculatorRule",WindowMetricsCalculatorRule);






module.exports = router;