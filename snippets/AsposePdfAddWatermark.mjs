import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Add watermark to a PDF-file and save the "ResultWatermark.pdf"*/
const json = AsposePdfModule.AsposePdfAddWatermark(pdf_file, "Aspose PDF", "Arial", 32, "#010101", 100, 100, 45, 1, 0.5, "ResultAddWatermark.pdf");
console.log("AsposePdfAddWatermark => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
