const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Convert a PDF-file to CSV (extract tables) with template "ResultPdfTablesToCSV{0:D2}.csv" ({0}, {0:D2}, {0:D3}, ... format page number), TAB as delimiter and save*/
    const json = AsposePdfModule.AsposePdfTablesToCSV(pdf_file, "ResultPdfTablesToCSV{0:D2}.csv", "\t");
    console.log("AsposePdfTablesToCSV => %O", json.errorCode == 0 ? json.filesNameResult : json.errorText);
});