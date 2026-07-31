export async function showCreateCharacterDialog(callback) {
    const template = 'systems/mausritter/templates/dialogs/create-character.html';
    const html = await foundry.applications.handlebars.renderTemplate(template)
    const d = new foundry.applications.api.Dialog({
        title: "What do you want to create?",
        content: html,
        buttons: [
            {
                action: "roll",
                icon: '<i class="fas fa-check"></i>',
                label: 'ok',
                callback: (event, button, dialog) => {
                    const formElement = dialog.element.querySelector('fieldset');
                    const formData = new foundry.applications.forms.FormDataExtended(formElement);
                    const options = formData.object;
                    callback(options)
                },
                default: true
            },
            {
                action: "cancel",
                icon: '<i class="fas fa-times"></i>',
                label: game.i18n.localize('Maus.Cancel'),
                callback: () => {
                }
            }
        ],
        close: () => {
        }
    });
    d.render(true);
}