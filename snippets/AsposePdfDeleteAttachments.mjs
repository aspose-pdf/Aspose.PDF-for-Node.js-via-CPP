import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Delete attachments from a PDF-file and save the "ResultPdfDeleteAttachments.pdf"*/
const json = AsposePdfModule.AsposePdfDeleteAttachments(pdf_file, "ResultPdfDeleteAttachments.pdf");
console.log("AsposePdfDeleteAttachments => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
