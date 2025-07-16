import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Export from a PDF-file with AcroForm to XFDF and save the "ResultPdfExportXfdf.xfdf"*/
const json = AsposePdfModule.AsposePdfExportXfdf(pdf_file, "ResultPdfExportXfdf.xfdf");
console.log("AsposePdfExportXfdf => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);