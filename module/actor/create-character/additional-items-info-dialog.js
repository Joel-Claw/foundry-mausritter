export async function showAdditionalItemsInfoDialog(items) {
    const template = 'systems/mausritter/templates/dialogs/additional-item-info.html';
    const html = await foundry.applications.handlebars.renderTemplate(template, {items: items})
    const d = new foundry.applications.api.Dialog({
        title: "Additional starting items",
        content: html,
        buttons: [
            {
                action: "ok",
                icon: '<i class="fas fa-check"></i>',
                label: 'ok',
                callback: (event, button, dialog) => {
                },
                default: true
            }
        ],
        close: () => {
        }
    });
    d.render(true);
}