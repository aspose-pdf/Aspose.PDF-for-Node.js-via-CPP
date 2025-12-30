import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Delete text footers from a PDF-file and save the "ResultPdfDeleteTextFooters.pdf"*/
const json = AsposePdfModule.AsposePdfDeleteTextFooters(pdf_file, "ResultPdfDeleteTextFooters.pdf");
console.log("AsposePdfDeleteTextFooters => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);