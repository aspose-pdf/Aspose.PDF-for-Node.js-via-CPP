import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*array, source page numbers in the desired order, 1-based*/
const numPages = [3,2];
/*Reorder pages from a PDF-file and save the "ResultReorderPages.pdf"*/
const json = AsposePdfModule.AsposePdfReorderPages(pdf_file, "ResultReorderPages.pdf", numPages);
console.log("AsposePdfReorderPages => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
