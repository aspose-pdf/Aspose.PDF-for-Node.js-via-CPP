import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Convert a PDF-file to ePub and save the "ResultPDFtoEPUB.epub"*/
const json = AsposePdfModule.AsposePdfToEPUB(pdf_file, "ResultPDFtoEPUB.epub");
console.log("AsposePdfToEPUB => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
