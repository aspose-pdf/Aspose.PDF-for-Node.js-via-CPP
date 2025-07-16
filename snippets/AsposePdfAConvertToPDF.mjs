import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_PDFA_file = 'ResultConvertToPDFA.pdf';
/*Convert a PDF/A-file to PDF and save the "ResultConvertToPDF.pdf"*/
const json = AsposePdfModule.AsposePdfAConvertToPDF(pdf_PDFA_file, "ResultConvertToPDF.pdf");
console.log("AsposePdfAConvertToPDF => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
