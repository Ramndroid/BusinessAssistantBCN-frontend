// ANGULAR CORE
import { Component, Input } from '@angular/core';

// VIRTUAL-ASSISTANT MODELS - BUSINESS ASISSTANT CATEGORY
import { Category } from '../../models/business-assistant.model';


@Component({
  selector: 'virtual-assistant-page-main-content',
  templateUrl: './virtual-assistant-main-content.component.html'
})
export class VirtualAssistantMainContentComponent {

  // Data Shared with VirtualAssistantDataSaveComponent.
  dataShared: any[] = [] // TODO improve typing any[]

  // Data Source to share with Mat-Accordion from VirtualAssistantAccordionComponent.
  @Input('inputDataMain') dataSourceCategory: Category[] = [];

  // Not delete this empty constructor to make implementations easier to understand.
  constructor() { }

  /**
   * Get the output data from accordion-component.
   * @param accordionData The obtained data is shared by the component in the input of VirtualAssistantList.
   */
  getDataFromAccordion(accordionData: any[]) {  // TODO improve typing any[]
    this.dataShared = [...accordionData];
  }

  /**
   * Click on the resume button.
   * It needs to be a callback function (it will be used as a parameter).
   */
  onClickResumeButton = (): void => {
    console.log("Ver resumen");
  }

  /**
   * Click on the save button.
   * It needs to be a callback function (it will be used as a parameter).
   */
  onClickSaveButton = (): void => {
    console.log("Guardar");
  }

}