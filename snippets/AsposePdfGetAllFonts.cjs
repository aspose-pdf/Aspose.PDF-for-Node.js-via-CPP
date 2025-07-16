const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Get list fonts from a PDF-file*/
    const json = AsposePdfModule.AsposePdfGetAllFonts(pdf_file);
    /*json.fonts - array of fonts: { fontName: <string>, isEmbedded: <boolean>, isAccessible: <boolean> }*/
    console.log("AsposePdfGetAllFonts => fonts: %O", json.errorCode == 0 ? json.fonts : json.errorText);
});