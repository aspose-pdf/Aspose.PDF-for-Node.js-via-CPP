import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Delete images from a PDF-file and save the "ResultPdfDeleteImages.pdf"*/
const json = AsposePdfModule.AsposePdfDeleteImages(pdf_file, "ResultPdfDeleteImages.pdf");
console.log("AsposePdfDeleteImages => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
