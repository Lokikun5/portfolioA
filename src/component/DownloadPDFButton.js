function DownloadPDFButton() {
    // Construction du chemin du fichier en utilisant PUBLIC_URL
    const pdfFile = `${process.env.PUBLIC_URL}/dl/QUADJOVIE-ANTONIO.pdf`;

    return (
        <a href={pdfFile} download="QUADJOVIE-ANTONIO.pdf">
            <button type="button" className="btn btn-primary">Télécharger mon CV</button>
        </a>
    );
}
export default DownloadPDFButton;