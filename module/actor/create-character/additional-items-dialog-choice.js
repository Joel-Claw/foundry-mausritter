export async function showAdditionalItemsChoiceDialog(items, callback) {
    const template = 'systems/mausritter/templates/dialogs/additional-item-choice.html';
    const html = await foundry.applications.handlebars.renderTemplate(template, {items: items})
    const d = new foundry.applications.api.Dialog({
        title: "Additional starting items",
        content: html,
        buttons: [
            {
                action: "ok",
                icon: '<i class="fas fa-check"></i>',
                label: 'ok',
                callback: (html) => {
                    const selector = html[0].querySelector('select');
                    callback(selector.selectedIndex)
                },
                default: true
            }
        ],
        close: () => {
        }
    });
    d.render(true);
}