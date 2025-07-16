import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Repair a PDF-file and save the "ResultPdfRepair.pdf"*/
const json = AsposePdfModule.AsposePdfRepair(pdf_file, "ResultPdfRepair.pdf");
console.log("AsposePdfRepair => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
