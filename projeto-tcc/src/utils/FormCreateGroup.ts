import IFormCreateGroup from "@/interfaces/IFormCreateGroup";
interface paramsUpdateStepOne {
  nameGroup: string;
  description: string
}

class FormCreateGroup implements IFormCreateGroup {

  constructor(private _nameGroup = "", private _description = "", private _emailParticipants = [""]) { }

  updateFormStepOne({ nameGroup, description }: paramsUpdateStepOne) {
    this._nameGroup = nameGroup
    this._description = description
  }

  updateFormStepTwo(emailParticipants: string) {
    this._emailParticipants.push(emailParticipants)
  }

  verifyStepOne() {
    if (this._nameGroup !== "" && this._description !== "") {
      return true
    }
    return false
  }

  verifyStepTwo() {
    if (this._nameGroup !== "" && this._description !== "") {
      return true
    }
    return false
  }

  public get nameGroup(): string {
    return this._nameGroup;
  }
  public get description(): string {
    return this._description;
  }
  public get emailParticipants() {
    return this._emailParticipants;
  }

  public set emailParticipants(value) {
    this._emailParticipants = value;
  }
  public set nameGroup(value: string) {
    this._nameGroup = value;
  }
  public set description(value: string) {
    this._description = value;
  }
}

export default FormCreateGroup