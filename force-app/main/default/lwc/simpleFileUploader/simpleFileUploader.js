import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class SimpleFileUploader extends LightningElement {
    @api recordId;

    // Toast après l'upload du fichier
    handleUploadFinished(event) {
        const uploadedFiles = event.detail.files;
        this.showToast('Succès', `${uploadedFiles.length} fichier(s) ajouté(s).`, 'success');
    }

    // Toast après la sauvegarde du champ texte
    handleSuccess(event) {
        this.showToast('Succès', 'Transcription enregistrée.', 'success');
    }

    showToast(title, message, variant) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: title,
                message: message,
                variant: variant,
            })
        );
    }
}