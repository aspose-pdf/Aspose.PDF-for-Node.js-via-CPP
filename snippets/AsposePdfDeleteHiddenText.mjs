import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Delete hidden text from a PDF-file and save the "ResultPdfDeleteHiddenText.pdf"*/
const json = AsposePdfModule.AsposePdfDeleteHiddenText(pdf_file, "ResultPdfDeleteHiddenText.pdf");
console.log("AsposePdfDeleteHiddenText => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
