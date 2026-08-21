const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*array, source page numbers in the desired order, 1-based*/
    const numPages = [2];
    /*Reorder pages in a PDF-file and save the "ResultReorderPages.pdf"*/
    const json = AsposePdfModule.AsposePdfReorderPages(pdf_file, "ResultReorderPages.pdf", numPages);
    console.log("AsposePdfReorderPages => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});