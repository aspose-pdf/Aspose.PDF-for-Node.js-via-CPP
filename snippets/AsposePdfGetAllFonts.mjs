import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Get list fonts from a PDF-file*/
const json = AsposePdfModule.AsposePdfGetAllFonts(pdf_file);
/*json.fonts - array of fonts: { fontName: <string>, isEmbedded: <boolean>, isAccessible: <boolean> }*/
console.log("AsposePdfGetAllFonts => fonts: %O", json.errorCode == 0 ? json.fonts : json.errorText);
