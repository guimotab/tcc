import IFormCreateGroup from "@/interfaces/IFormCreateGroup";
import IParticipantsGroup from "@/interfaces/IParticipantsGroup";
import defaultRoles from "@/types/defaultRoles";
interface paramsUpdateStepOne {
  nameGroup: string;
  description: string
}

class FormCreateGroup implements IFormCreateGroup {
  private _nameGroup: string
  private _description: string
  private _participants: IParticipantsGroup[]

  constructor({ description, nameGroup, participants }: IFormCreateGroup) {
    this._nameGroup = nameGroup
    this._description = description
    this._participants = participants
  }

  updateFormStepOne({ nameGroup, description }: paramsUpdateStepOne) {
    this._nameGroup = nameGroup
    this._description = description
  }

  updateFormStepTwo(emailParticipants: IParticipantsGroup) {
    this.participants.push(emailParticipants)
  }

  verifyStepOne() {
    if (this._nameGroup !== "") {
      return true
    }
    return false
  }

  verifyStepTwo() {
    if (this.verifyStepOne() && this.participants.length > 1) {
      return true
    }
    return false
  }
  verifyStepThree() {
    if (this.verifyStepTwo()) {
      return true
    }
    return false
  }

  getInitialOfEmail(email: string) {
    return email.charAt(0).toUpperCase()
  }

  deleteParticipant(emailParticipant: string) {
    const index = this._participants.findIndex(participant => participant.email === emailParticipant)
    this._participants.splice(index, 1)
  }

  updateRole(emailParticipant: string, newRole: defaultRoles) {
    const newInformation = {
      email: emailParticipant,
      role: newRole
    } as IParticipantsGroup
    const index = this._participants.findIndex(participant => participant.email === emailParticipant)
    this._participants.splice(index, 1, newInformation)
  }

  public get nameGroup(): string {
    return this._nameGroup;
  }
  public get description(): string {
    return this._description;
  }
  public get participants() {
    return this._participants;
  }

  public set participants(value) {
    this._participants = value;
  }
  public set nameGroup(value: string) {
    this._nameGroup = value;
  }
  public set description(value: string) {
    this._description = value;
  }
}

export default FormCreateGroup