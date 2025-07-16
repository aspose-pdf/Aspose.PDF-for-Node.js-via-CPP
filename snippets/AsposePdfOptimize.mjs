import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Optimize a PDF-file and save the "ResultOptimize.pdf"*/
const json = AsposePdfModule.AsposePdfOptimize(pdf_file, "ResultOptimize.pdf");
console.log("AsposePdfOptimize => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
