import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Delete watermarks from a PDF-file and save the "ResultPdfDeleteWatermarks.pdf"*/
const json = AsposePdfModule.AsposePdfDeleteWatermarks(pdf_file, "ResultPdfDeleteWatermarks.pdf");
console.log("AsposePdfDeleteWatermarks => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
