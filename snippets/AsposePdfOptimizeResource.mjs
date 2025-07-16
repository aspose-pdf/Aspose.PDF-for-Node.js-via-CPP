import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Optimize resources of PDF-file and save the "ResultPdfOptimizeResource.pdf"*/
const json = AsposePdfModule.AsposePdfOptimizeResource(pdf_file, "ResultPdfOptimizeResource.pdf");
console.log("AsposePdfOptimizeResource => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
