declare module "html2pdf.js" {
    interface Html2PdfOptions {
      margin: number;
      filename: string;
      image: { type: string; quality: number };
      html2canvas: { scale: number };
      jsPDF: { unit: string; format: string; orientation: string };
    }
  
    function html2pdf(): {
      from: (element: HTMLElement) => {
        set: (options: Html2PdfOptions) => any;
        save: () => void;
      };
    };
  
    export = html2pdf;
  }