import { Component } from '@angular/core';
import { Indent } from './microcomponents/code-enum';
import { Code } from './microcomponents/code-interface';
import { StyleCode } from './microcomponents/code-style';

@Component({
  selector: 'tab-va-buttons-container',
  templateUrl: './tab-va-buttons-container.component.html',
  styleUrls: ['./microcomponents/code-style.css']
})
export class TabVaButtonsContainerComponent {

  colTotal: string = "3";

  colSpan: string = "2";

  rowHeightProp: string = "700px";

  showWord: string = "Hello!";

  mainSelectorComponent: string = "virtual-assistant-buttons-container";

  acommentComponent: string = `<!-- ${this.mainSelectorComponent.toUpperCase()} -->`;

  case1: Code = {
    title: 'Case 1',
    subtitle: `Basic <b>${this.mainSelectorComponent}</b> without attributes`,
    show: [
      StyleCode.comment(this.mainSelectorComponent),
      StyleCode.open(Indent.NOINDENT, this.mainSelectorComponent),
      StyleCode.sandwich(Indent.INDENT1, 'p', this.showWord),
      StyleCode.close(Indent.NOINDENT, this.mainSelectorComponent),
      StyleCode.comment(this.mainSelectorComponent, true)
    ],
    copy: [
      `${StyleCode.copyComment(this.mainSelectorComponent)}`,
      `\n<${this.mainSelectorComponent}>`,
      `\n\t<p>${this.showWord}</p>`,
      `\n</${this.mainSelectorComponent}>`,
      `\n${StyleCode.copyComment(this.mainSelectorComponent, true)}`
    ]
  }

  case2: Code = {
    title: 'Case 2',
    subtitle: `Basic buttons container theme using <b>vaStyle='theme'</b>`,
    show: [
      StyleCode.comment(this.mainSelectorComponent),
      StyleCode.open(Indent.NOINDENT, this.mainSelectorComponent, Indent.NOINDENT, ["vaStyle", "'theme'"]),
      StyleCode.sandwich(Indent.INDENT1, 'p', this.showWord),
      StyleCode.close(Indent.NOINDENT, this.mainSelectorComponent),
      StyleCode.comment(this.mainSelectorComponent, true)
    ],
    copy: [
      `${StyleCode.copyComment(this.mainSelectorComponent)}`,
      `\n<${this.mainSelectorComponent} vaStyle='theme'>`,
      `\n\t<p>${this.showWord}</p>`,
      `\n</${this.mainSelectorComponent}>`,
      `\n${StyleCode.copyComment(this.mainSelectorComponent, true)}`
    ]
  }

  case3: Code = {
    title: 'Case 3',
    subtitle: `Fully functional buttons-container`,
    show: [
      StyleCode.comment(this.mainSelectorComponent),
      StyleCode.open(Indent.NOINDENT, this.mainSelectorComponent, Indent.INDENT1,
        ["vaStyle", "'theme'"],
        ["containerWidth", "'400px'"],
        ["containerHeight", "'250px'"],
        ["mainButtonText", "'say hello'"],
        ["mainButtonColor", "'accent'"],
        ["[mainButtonFunction]", "'myCallbackOnMainButtonClick'"],
        ["secondaryButtonText", "'say bye'"],
        ["secondaryButtonColor", "'primary'"],
        ["[secondaryButtonFunction]", "'myCallbackOnSecondaryButtonClick'"]
      ),
      StyleCode.sandwich(Indent.INDENT1, 'p', this.showWord),
      StyleCode.close(Indent.NOINDENT, this.mainSelectorComponent),
      StyleCode.comment(this.mainSelectorComponent, true)
    ],
    copy: [
      `${StyleCode.copyComment(this.mainSelectorComponent)}`,
      `\n<${this.mainSelectorComponent}`,
      `\n\tvaStyle='theme'`,
      `\n\tcontainerWidth='400px'`,
      `\n\tcontainerHeight='250px'`,
      `\n\tmainButtonText='say hello'`,
      `\n\tmainButtonColor='accent'`,
      `\n\t[mainButtonFunction]='myCallbackOnMainButtonClick'`,
      `\n\tsecondaryButtonText='say bye'`,
      `\n\tsecondaryButtonColor='primary'`,
      `\n\t[secondaryButtonFunction]='myCallbackOnSecondaryButtonClick'`,
      `\n>`,
      `\n\t<p>${this.showWord}</p>`,
      `\n</${this.mainSelectorComponent}>`,
      `\n${StyleCode.copyComment(this.mainSelectorComponent, true)}`
    ]
  }

  showWordCase3: string = "Hello!";

  case3onHelloButtonClick = () => {
    this.showWordCase3 = "You say: Hello!";
  }

  case3onByeButtonClick = () => {
    this.showWordCase3 = "You say: Bye!";
  }

  case4: Code = {
    title: 'Case 4',
    subtitle: `<b>Flex properties</b> on the va-buttons-container component`,
    show: [
      StyleCode.comment(this.mainSelectorComponent),
      StyleCode.open(Indent.NOINDENT, this.mainSelectorComponent, Indent.INDENT1,
        ["vaStyle", "'theme'"],
        ["containerWidth", "'550px'"],
        ["buttonsContainerFlow", "'row'"],
        ["buttonsContainerPosition", "'center'"],
        ["[buttonsContainerTotalButtons]", "'3'"]
      ),
      StyleCode.sandwich(Indent.INDENT1, 'p', this.showWord),
      StyleCode.close(Indent.NOINDENT, this.mainSelectorComponent),
      StyleCode.comment(this.mainSelectorComponent, true)
    ],
    copy: [
      `${StyleCode.copyComment(this.mainSelectorComponent)}`,
      `\n<${this.mainSelectorComponent}`,
      `\n\tvaStyle='theme'`,
      `\n\tcontainerWidth='550px'`,
      `\n\tbuttonsContainerFlow='row'`,
      `\n\tbuttonsContainerPosition='center'`,
      `\n\t[buttonsContainerTotalButtons]='3'`,
      `\n>`,
      `\n\t<p>${this.showWord}</p>`,
      `\n</${this.mainSelectorComponent}>`,
      `\n${StyleCode.copyComment(this.mainSelectorComponent, true)}`
    ]
  }

  constructor() { }

}