/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { StatusUpdates } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StatusUpdatesUpdateFormInputValues = {
    user_id?: string;
    status?: string;
    create_on?: string;
};
export declare type StatusUpdatesUpdateFormValidationValues = {
    user_id?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    create_on?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StatusUpdatesUpdateFormOverridesProps = {
    StatusUpdatesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user_id?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    create_on?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StatusUpdatesUpdateFormProps = React.PropsWithChildren<{
    overrides?: StatusUpdatesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    statusUpdates?: StatusUpdates;
    onSubmit?: (fields: StatusUpdatesUpdateFormInputValues) => StatusUpdatesUpdateFormInputValues;
    onSuccess?: (fields: StatusUpdatesUpdateFormInputValues) => void;
    onError?: (fields: StatusUpdatesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StatusUpdatesUpdateFormInputValues) => StatusUpdatesUpdateFormInputValues;
    onValidate?: StatusUpdatesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StatusUpdatesUpdateForm(props: StatusUpdatesUpdateFormProps): React.ReactElement;
