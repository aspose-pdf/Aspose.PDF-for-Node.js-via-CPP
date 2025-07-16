import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Delete JavaScripts from a PDF-file and save the "ResultPdfDeleteJavaScripts.pdf"*/
const json = AsposePdfModule.AsposePdfDeleteJavaScripts(pdf_file, "ResultPdfDeleteJavaScripts.pdf");
console.log("AsposePdfDeleteJavaScripts => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
