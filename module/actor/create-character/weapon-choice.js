export async function showWeaponChoiceDialog(callback) {
    const template = 'systems/mausritter/templates/dialogs/weapon-choice.html';
    const html = await foundry.applications.handlebars.renderTemplate(template)
    const d = new foundry.applications.api.Dialog({
        title: "What weapon do you want?",
        content: html,
        buttons: [
            {
                action: "ok",
                icon: '<i class="fas fa-check"></i>',
                label: 'ok',
                callback: (html) => {
                    const selector = html[0].querySelector('select');
                    callback(selector.value)
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