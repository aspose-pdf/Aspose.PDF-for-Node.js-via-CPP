import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
const searchPattern = "aspose|pdf";
/*Permanently redact and black out sensitive text in a PDF-file and save the "ResultPdfRedactText.pdf"*/
const json = AsposePdfModule.AsposePdfRedactText(pdf_file, searchPattern, "ResultPdfRedactText.pdf");
console.log("AsposePdfRedactText => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
