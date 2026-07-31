/**
 * Extend the basic Item with some very simple modifications.
 * @extends {foundry.documents.Item}
 */
export class MausritterItem extends foundry.documents.Item {
  /**
   * Augment the basic Item data model with additional dynamic data.
   */
  prepareData() {
    super.prepareData();

    // Get the Item's data
    const itemData = this;
    const actorData = this.actor ? this.actor.system : {};
    const data = itemData.system;
  }
}
