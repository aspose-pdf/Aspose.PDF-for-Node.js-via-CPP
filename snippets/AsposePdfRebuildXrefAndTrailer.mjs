import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Rebuild a PDF-file cross-reference table and trailer structures and save the "ResultPdfRebuildXrefAndTrailer.pdf"*/
const json = AsposePdfModule.AsposePdfRebuildXrefAndTrailer(pdf_file, "ResultPdfRebuildXrefAndTrailer.pdf");
console.log("AsposePdfRebuildXrefAndTrailer => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
