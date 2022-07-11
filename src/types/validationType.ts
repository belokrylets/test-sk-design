interface IDirty {
    nameDirty: boolean;
    phoneDirty: boolean;
    mailDirty: boolean;
    profileLinkDirty: boolean;
    citiesDirty: boolean;
}

interface IError {
    nameError: string;
    phoneError: string;
    mailError: string;
    profileLinkError: string;
    citiesError: string;
}

export interface IValidation {
    dirty: IDirty;
    errorValidation: IError;
}