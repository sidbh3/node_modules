const safeFonts = {
    Arial: {
        Regular: { selector: "Arial", weight: undefined },
        Black: { selector: "Arial-Black", weight: undefined },
        Narrow: { selector: "Arial Narrow", weight: undefined },
        "Rounded Bold": { selector: "Arial Rounded MT Bold", weight: undefined },
    },
    Avenir: {
        Book: { selector: "Avenir", weight: undefined },
        Light: { selector: "Avenir-Light", weight: undefined },
        Medium: { selector: "Avenir-Medium", weight: undefined },
        Heavy: { selector: "Avenir-Heavy", weight: undefined },
        Black: { selector: "Avenir-Black", weight: undefined },
    },
    "Avenir Next": {
        Regular: { selector: "Avenir Next", weight: undefined },
        "Ultra Light": { selector: "AvenirNext-UltraLight", weight: undefined },
        Medium: { selector: "AvenirNext-Medium", weight: undefined },
        "Demi Bold": { selector: "AvenirNext-DemiBold", weight: undefined },
        Heavy: { selector: "AvenirNext-Heavy", weight: undefined },
    },
    "Avenir Next Condensed": {
        Regular: { selector: "Avenir Next Condensed", weight: undefined },
        "Ultra Light": { selector: "AvenirNextCondensed-UltraLight", weight: undefined },
        Medium: { selector: "AvenirNextCondensed-Medium", weight: undefined },
        "Demi Bold": { selector: "AvenirNextCondensed-DemiBold", weight: undefined },
        Heavy: { selector: "AvenirNextCondensed-Heavy", weight: undefined },
    },
    Baskerville: {
        Regular: { selector: "Baskerville", weight: undefined },
        "Semi Bold": { selector: "Baskerville-SemiBold", weight: undefined },
    },
    "Bodoni 72": {
        Book: { selector: "Bodoni 72", weight: undefined },
        Oldstyle: { selector: "Bodoni 72 Oldstyle", weight: undefined },
        Smallcaps: { selector: "Bodoni 72 Smallcaps", weight: undefined },
    },
    Courier: { Regular: { selector: "Courier", weight: undefined } },
    "Courier New": { Regular: { selector: "Courier New", weight: undefined } },
    Futura: {
        Medium: { selector: "Futura", weight: undefined },
        Condensed: { selector: "Futura-CondensedMedium", weight: undefined },
        "Condensed ExtraBold": { selector: "Futura-CondensedExtraBold", weight: undefined },
    },
    Georgia: { Regular: { selector: "Georgia", weight: undefined } },
    "Gill Sans": {
        Regular: { selector: "Gill Sans", weight: undefined },
        Light: { selector: "GillSans-Light", weight: undefined },
        SemiBold: { selector: "GillSans-SemiBold", weight: undefined },
        UltraBold: { selector: "GillSans-UltraBold", weight: undefined },
    },
    Helvetica: {
        Regular: { selector: "Helvetica", weight: undefined },
        Light: { selector: "Helvetica-Light", weight: undefined },
        Bold: { selector: "Helvetica-Bold", weight: undefined },
        Oblique: { selector: "Helvetica-Oblique", weight: undefined },
        "Light Oblique": { selector: "Helvetica-LightOblique", weight: undefined },
        "Bold Oblique": { selector: "Helvetica-BoldOblique", weight: undefined },
    },
    "Helvetica Neue": {
        Regular: { selector: "Helvetica Neue", weight: undefined },
        UltraLight: { selector: "HelveticaNeue-UltraLight", weight: undefined },
        Thin: { selector: "HelveticaNeue-Thin", weight: undefined },
        Light: { selector: "HelveticaNeue-Light", weight: undefined },
        Medium: { selector: "HelveticaNeue-Medium", weight: undefined },
        Bold: { selector: "HelveticaNeue-Bold", weight: undefined },
        Italic: { selector: "HelveticaNeue-Italic", weight: undefined },
        "UltraLight Italic": { selector: "HelveticaNeue-UltraLightItalic", weight: undefined },
        "Thin Italic": { selector: "HelveticaNeue-ThinItalic", weight: undefined },
        "Light Italic": { selector: "HelveticaNeue-LightItalic", weight: undefined },
        "Medium Italic": { selector: "HelveticaNeue-MediumItalic", weight: undefined },
        "Bold Italic": { selector: "HelveticaNeue-BoldItalic", weight: undefined },
        "Condensed Bold": { selector: "HelveticaNeue-CondensedBold", weight: undefined },
        "Condensed Black": { selector: "HelveticaNeue-CondensedBlack", weight: undefined },
    },
    "Hoefler Text": { Regular: { selector: "Hoefler Text", weight: undefined } },
    Impact: { Regular: { selector: "Impact", weight: undefined } },
    "Lucida Grande": { Regular: { selector: "Lucida Grande", weight: undefined } },
    Menlo: { Regular: { selector: "Menlo", weight: undefined } },
    Monaco: { Regular: { selector: "Monaco", weight: undefined } },
    Optima: {
        Regular: { selector: "Optima", weight: undefined },
        ExtraBlack: { selector: "Optima-ExtraBlack", weight: undefined },
    },
    Palatino: { Regular: { selector: "Palatino", weight: undefined } },
    "SF Pro Display": {
        Regular: { selector: "__SF-UI-Display-Regular__", weight: 400 },
        Ultralight: { selector: "__SF-UI-Display-Ultralight__", weight: 100 },
        Thin: { selector: "__SF-UI-Display-Thin__", weight: 200 },
        Light: { selector: "__SF-UI-Display-Light__", weight: 300 },
        Medium: { selector: "__SF-UI-Display-Medium__", weight: 500 },
        Semibold: { selector: "__SF-UI-Display-Semibold__", weight: 600 },
        Bold: { selector: "__SF-UI-Display-Bold__", weight: 700 },
        Heavy: { selector: "__SF-UI-Display-Heavy__", weight: 800 },
        Black: { selector: "__SF-UI-Display-Black__", weight: 900 },
        Italic: { selector: "__SF-UI-Display-Italic__", weight: 400 },
        "Ultralight Italic": { selector: "__SF-UI-Display-Ultralight-Italic__", weight: 100 },
        "Thin Italic": { selector: "__SF-UI-Display-Thin-Italic__", weight: 200 },
        "Light Italic": { selector: "__SF-UI-Display-Light-Italic__", weight: 300 },
        "Medium Italic": { selector: "__SF-UI-Display-Medium-Italic__", weight: 500 },
        "Semibold Italic": { selector: "__SF-UI-Display-Semibold-Italic__", weight: 600 },
        "Bold Italic": { selector: "__SF-UI-Display-Bold-Italic__", weight: 700 },
        "Heavy Italic": { selector: "__SF-UI-Display-Heavy-Italic__", weight: 800 },
        "Black Italic": { selector: "__SF-UI-Display-Black-Italic__", weight: 900 },
    },
    "SF Pro Display Condensed": {
        Regular: { selector: "__SF-UI-Display-Condensed-Regular__", weight: 400 },
        Ultralight: { selector: "__SF-UI-Display-Condensed-Ultralight__", weight: 100 },
        Thin: { selector: "__SF-UI-Display-Condensed-Thin__", weight: 200 },
        Light: { selector: "__SF-UI-Display-Condensed-Light__", weight: 300 },
        Medium: { selector: "__SF-UI-Display-Condensed-Medium__", weight: 500 },
        Semibold: { selector: "__SF-UI-Display-Condensed-Semibold__", weight: 600 },
        Bold: { selector: "__SF-UI-Display-Condensed-Bold__", weight: 700 },
        Heavy: { selector: "__SF-UI-Display-Condensed-Heavy__", weight: 800 },
        Black: { selector: "__SF-UI-Display-Condensed-Black__", weight: 900 },
    },
    "SF Pro Text": {
        Regular: { selector: "__SF-UI-Text-Regular__", weight: 400 },
        Light: { selector: "__SF-UI-Text-Light__", weight: 200 },
        Medium: { selector: "__SF-UI-Text-Medium__", weight: 500 },
        Semibold: { selector: "__SF-UI-Text-Semibold__", weight: 600 },
        Bold: { selector: "__SF-UI-Text-Bold__", weight: 700 },
        Heavy: { selector: "__SF-UI-Text-Heavy__", weight: 800 },
        Italic: { selector: "__SF-UI-Text-Italic__", weight: 400 },
        "Light Italic": { selector: "__SF-UI-Text-Light-Italic__", weight: 200 },
        "Medium Italic": { selector: "__SF-UI-Text-Medium-Italic__", weight: 500 },
        "Semibold Italic": { selector: "__SF-UI-Text-Semibold-Italic__", weight: 600 },
        "Bold Italic": { selector: "__SF-UI-Text-Bold-Italic__", weight: 700 },
        "Heavy Italic": { selector: "__SF-UI-Text-Heavy-Italic__", weight: 800 },
    },
    "SF Pro Text Condensed": {
        Regular: { selector: "__SF-UI-Text-Condensed-Regular__", weight: 400 },
        Light: { selector: "__SF-UI-Text-Condensed-Light__", weight: 200 },
        Medium: { selector: "__SF-UI-Text-Condensed-Medium__", weight: 500 },
        Semibold: { selector: "__SF-UI-Text-Condensed-Semibold__", weight: 600 },
        Bold: { selector: "__SF-UI-Text-Condensed-Bold__", weight: 700 },
        Heavy: { selector: "__SF-UI-Text-Condensed-Heavy__", weight: 800 },
    },
    Tahoma: { Regular: { selector: "Tahoma", weight: undefined } },
    Times: { Regular: { selector: "Times", weight: undefined } },
    "Times New Roman": { Regular: { selector: "Times New Roman", weight: undefined } },
    Trebuchet: { Regular: { selector: "Trebuchet MS", weight: undefined } },
    Verdana: { Regular: { selector: "Verdana", weight: undefined } },
};
// NOTE: While the SF Compact fonts have been removed from the default font
// list, because there are no longer selectors that work on both macOS (in all
// cases) and iOS, the aliases are still here so old documents keep working.
// See https://github.com/framer/company/issues/17747
export const typefaceAliases = {
    "__SF-Compact-Display-Regular__": "SFCompactDisplay-Regular|.SFCompactDisplay-Regular",
    "__SF-Compact-Display-Ultralight__": "SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight",
    "__SF-Compact-Display-Thin__": "SFCompactDisplay-Thin|.SFCompactDisplay-Thin",
    "__SF-Compact-Display-Light__": "SFCompactDisplay-Light|.SFCompactDisplay-Light",
    "__SF-Compact-Display-Medium__": "SFCompactDisplay-Medium|.SFCompactDisplay-Medium",
    "__SF-Compact-Display-Semibold__": "SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold",
    "__SF-Compact-Display-Heavy__": "SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy",
    "__SF-Compact-Display-Black__": "SFCompactDisplay-Black|.SFCompactDisplay-Black",
    "__SF-Compact-Display-Bold__": "SFCompactDisplay-Bold|.SFCompactDisplay-Bold",
    "__SF-UI-Text-Regular__": ".SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText",
    "__SF-UI-Text-Light__": ".SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light",
    "__SF-UI-Text-Medium__": ".SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium",
    "__SF-UI-Text-Semibold__": ".SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold",
    "__SF-UI-Text-Bold__": ".SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold",
    "__SF-UI-Text-Heavy__": ".SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy",
    "__SF-UI-Text-Italic__": ".SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic",
    "__SF-UI-Text-Light-Italic__": ".SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic",
    "__SF-UI-Text-Medium-Italic__": ".SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic",
    "__SF-UI-Text-Semibold-Italic__": ".SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic",
    "__SF-UI-Text-Bold-Italic__": ".SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic",
    "__SF-UI-Text-Heavy-Italic__": ".SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic",
    "__SF-Compact-Text-Regular__": "SFCompactText-Regular|.SFCompactText-Regular",
    "__SF-Compact-Text-Light__": "SFCompactText-Light|.SFCompactText-Light",
    "__SF-Compact-Text-Medium__": "SFCompactText-Medium|.SFCompactText-Medium",
    "__SF-Compact-Text-Semibold__": "SFCompactText-Semibold|.SFCompactText-Semibold",
    "__SF-Compact-Text-Bold__": "SFCompactText-Bold|.SFCompactText-Bold",
    "__SF-Compact-Text-Heavy__": "SFCompactText-Heavy|.SFCompactText-Heavy",
    "__SF-Compact-Text-Italic__": "SFCompactText-Italic|.SFCompactText-Italic",
    "__SF-Compact-Text-Light-Italic__": "SFCompactText-LightItalic|.SFCompactText-LightItalic",
    "__SF-Compact-Text-Medium-Italic__": "SFCompactText-MediumItalic|.SFCompactText-MediumItalic",
    "__SF-Compact-Text-Semibold-Italic__": "SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic",
    "__SF-Compact-Text-Bold-Italic__": "SFCompactText-BoldItalic|.SFCompactText-BoldItalic",
    "__SF-Compact-Text-Heavy-Italic__": "SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic",
    "__SF-UI-Display-Condensed-Regular__": ".SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular",
    "__SF-UI-Display-Condensed-Ultralight__": ".SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight",
    "__SF-UI-Display-Condensed-Thin__": ".SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin",
    "__SF-UI-Display-Condensed-Light__": ".SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light",
    "__SF-UI-Display-Condensed-Medium__": ".SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium",
    "__SF-UI-Display-Condensed-Semibold__": ".SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold",
    "__SF-UI-Display-Condensed-Bold__": ".SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold",
    "__SF-UI-Display-Condensed-Heavy__": ".SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy",
    "__SF-UI-Display-Condensed-Black__": ".SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black",
    "__SF-UI-Display-Regular__": ".SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay",
    "__SF-UI-Display-Ultralight__": ".SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight",
    "__SF-UI-Display-Thin__": ".SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin",
    "__SF-UI-Display-Light__": ".SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light",
    "__SF-UI-Display-Medium__": ".SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium",
    "__SF-UI-Display-Semibold__": ".SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold",
    "__SF-UI-Display-Bold__": ".SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold",
    "__SF-UI-Display-Heavy__": ".SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy",
    "__SF-UI-Display-Black__": ".SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black",
    "__SF-UI-Display-Italic__": ".SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic",
    "__SF-UI-Display-Ultralight-Italic__": ".SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic",
    "__SF-UI-Display-Thin-Italic__": ".SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic",
    "__SF-UI-Display-Light-Italic__": ".SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic",
    "__SF-UI-Display-Medium-Italic__": ".SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic",
    "__SF-UI-Display-Semibold-Italic__": ".SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic",
    "__SF-UI-Display-Bold-Italic__": ".SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic",
    "__SF-UI-Display-Heavy-Italic__": ".SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic",
    "__SF-UI-Display-Black-Italic__": ".SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic",
    "__SF-UI-Text-Condensed-Regular__": ".SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular",
    "__SF-UI-Text-Condensed-Light__": ".SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light",
    "__SF-UI-Text-Condensed-Medium__": ".SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium",
    "__SF-UI-Text-Condensed-Semibold__": ".SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold",
    "__SF-UI-Text-Condensed-Bold__": ".SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold",
    "__SF-UI-Text-Condensed-Heavy__": ".SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy",
    "__SF-Compact-Rounded-Regular__": "SFCompactRounded-Regular|.SFCompactRounded-Regular",
    "__SF-Compact-Rounded-Ultralight__": "SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight",
    "__SF-Compact-Rounded-Thin__": "SFCompactRounded-Thin|.SFCompactRounded-Thin",
    "__SF-Compact-Rounded-Light__": "SFCompactRounded-Light|.SFCompactRounded-Light",
    "__SF-Compact-Rounded-Medium__": "SFCompactRounded-Medium|.SFCompactRounded-Medium",
    "__SF-Compact-Rounded-Semibold__": "SFCompactRounded-Semibold|.SFCompactRounded-Semibold",
    "__SF-Compact-Rounded-Bold__": "SFCompactRounded-Bold|.SFCompactRounded-Bold",
    "__SF-Compact-Rounded-Heavy__": "SFCompactRounded-Heavy|.SFCompactRounded-Heavy",
    "__SF-Compact-Rounded-Black__": "SFCompactRounded-Black|.SFCompactRounded-Black",
};
export const typefaces = safeFonts;
//# sourceMappingURL=fonts.js.map