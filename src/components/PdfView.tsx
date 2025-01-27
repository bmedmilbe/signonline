interface Props {
  pdf_path: string;
}

function PdfView({ pdf_path }: Props) {
  //   pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  //   console.log(pdf_path);
  return (
    // <div>
    //   <Document file={pdf_path} />
    // </div>
    <object
      data={pdf_path}
      type="application/pdf"
      width="100%"
      style={{ height: "100vh" }}
    >
      <p>
        Alternative text - include a link <a href={pdf_path}>to the PDF!</a>
      </p>
    </object>
  );
}

export default PdfView;
