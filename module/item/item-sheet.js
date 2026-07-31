/**
 * Extend the basic ItemSheet with some very simple modifications
 * @extends {ItemSheet}
 */
export class MausritterItemSheet extends foundry.appv1.sheets.ItemSheet {

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["mausritter", "sheet", "item"],
      width: 520,
      height: 480,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }]
    });
  }

  /** @override */
  get template() {
    const path = "systems/mausritter/templates/item";
    // Return a single sheet for all item types.
    return `${path}/item-${this.item.type}-sheet.html`;
    // Alternatively, you could use the following return statement to do a
    // unique item sheet by type, like `weapon-sheet.html`.

    // return `${path}/${this.item.system.type}-sheet.html`;
  }


  /* -------------------------------------------- */

  /** @override */
  getData() {
    const data = super.getData();
    // V14: Use this.item.system directly for template access.
    data.system = this.item.system;
    data.item = this.item;
    data.name = this.item.name;
    data.img = this.item.img;
    return data;
  }

  // /**
  //  * Organize and classify Items for Character sheets.
  //  *
  //  * @param {Object} itemData The actor to prepare.
  //  *
  //  * @return {undefined}
  //  */
  // _prepareItemData(item) {
  //   console.log(item.system);

  //   if(item.category == "gear"){item.isWeapon = false; item.isCondition = false;}
  //   else if(item.category == "weapon"){
  //     this.object.update({"data.isWeapon" : true});
  //     this.object.update({"data.isCondition" : false});

  //     console.log(item.system.isWeapon);

  //     if(item.weapon.dmg2 != ""){
  //       item.weapon.canSwap = true;
  //     } else {
  //       item.weapon.canSwap = false;
  //     }
  //   }
  //   else if(item.category == "condition"){item.isWeapon = false; item.isCondition = true;}

  //   var dupeItem = foundry.utils.duplicate(item.system);

    
  //   // this.update({"data.recharge.charged": false});
  // }

  /* -------------------------------------------- */

  /** @override */
  async _updateObject(event, formData) {
    const updateData = foundry.utils.expandObject(formData);
    // V14: Ensure required 'name' field is present to pass schema validation.
    if (updateData.name === undefined) updateData.name = this.item.name;
    await this.item.update(updateData, { diff: false });
  }

  /* -------------------------------------------- */

  /** @override */
  setPosition(options = {}) {
    const position = super.setPosition(options);
    const sheetBody = $(this.element).find(".sheet-body");
    const bodyHeight = position.height - 192;
    sheetBody.css("height", bodyHeight);
    return position;
  }

  /* -------------------------------------------- */

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);
    const data = super.getData();

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;

    // if(data.data.pips == null){
    //   data.data.pips = {};
    // }

    // let pipHtml = "";
    // for(let i=0; i < data.data.pips.max; i++){
    //   pipHtml += '<i class="far fa-circle"></i>';
    // }

    // data.data.pips.html= pipHtml;

    // let oldData = foundry.utils.duplicate(this.object.data);
    // this.object.update(oldData);
    // Roll handlers, click handlers, etc. would go here.
  }
}
