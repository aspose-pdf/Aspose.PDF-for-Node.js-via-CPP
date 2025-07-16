import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Get list layers from a PDF-file*/
const json = AsposePdfModule.AsposePdfGetPagesLayers(pdf_file);
/*json.pagesLayers - list of pages with lists of layers on each page*/
console.log("AsposePdfGetPagesLayers => layers: %O", json.errorCode == 0 ? json.pagesLayers : json.errorText);
